// TODO: Props of Textarea component to be defined
// Variants: Filled & Outlined
// Sizes: Small, Medium, Large
// Disabled
// Error
// Helper Text
// Label
// Important Indicator

import { forwardRef } from 'react';
import { twJoin } from 'tailwind-merge';

type Variant = 'filled' | 'outlined';

type Size = 'small' | 'medium' | 'large';

interface ITextarea extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: Size;
  error?: string;
  label?: string;
  variant?: Variant;
  disabled?: boolean;
  important?: boolean;
  helperText?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, ITextarea>(
  (
    {
      id,
      label,
      error,
      className,
      helperText,
      size = 'small',
      disabled = false,
      important = false,
      variant = 'filled',
      ...props
    },
    ref
  ) => {
    const variantStyles: Record<Variant, string> = {
      filled: 'bg-secondary/15',
      outlined: `bg-transparent outline ${error ? 'outline-danger' : 'outline-secondary/50'} disabled:bg-secondary/10`,
    };

    const fontSizeStyles: Record<Size, string> = {
      small: 'text-sm',
      medium: 'text-base',
      large: 'text-lg',
    };

    return (
      <div className="flex w-full flex-col gap-2">
        {label && (
          <label
            htmlFor={id}
            className={twJoin('text-primary', fontSizeStyles[size])}
          >
            {label}
            {important && (
              <span className="text-danger ml-1 font-semibold">*</span>
            )}
          </label>
        )}

        <div>
          <textarea
            id={id}
            ref={ref}
            disabled={disabled}
            className={twJoin(
              'focus:outline-info min-h-28 w-full rounded-md px-3 py-2 outline-offset-0 focus:outline-2 disabled:cursor-not-allowed disabled:opacity-50',
              !disabled && error && 'outline-danger outline-2',
              variantStyles[variant],
              fontSizeStyles[size]
            )}
            {...props}
          />

          {error && <p className="text-danger mt-1 text-xs">{error}</p>}
          {!error && helperText && (
            <p className="text-secondary/50 mt-1 text-xs">{helperText}</p>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
