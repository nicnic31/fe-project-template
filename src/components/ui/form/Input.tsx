// TODO: Create Input component
// Variants: Filled & Outlined
// Sizes: Small, Medium, Large
// Adornments: Start and End Adornments
// Disabled
// Full Width Option
// Label
// Helper Text
// Error State

import { forwardRef } from 'react';
import { twJoin } from 'tailwind-merge';

type Variant = 'filled' | 'outlined';

type Size = 'small' | 'medium' | 'large';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  inputSize?: Size;
  variant?: Variant;
  disabled?: boolean;
  important?: boolean;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, IInput>(
  (
    {
      id,
      label,
      error,
      className,
      helperText,
      important = false,
      disabled = false,
      inputSize = 'small',
      variant = 'filled',
      ...props
    },
    ref
  ) => {
    const fontSizeStyles: Record<Size, string> = {
      small: 'text-sm',
      medium: 'text-base',
      large: 'text-lg',
    };

    const variantStyles: Record<Variant, string> = {
      filled: 'bg-secondary/15',
      outlined: `bg-transparent outline ${error ? 'outline-danger' : 'outline-secondary/50'}`,
    };

    return (
      <div className="flex w-full flex-col gap-2">
        {label && (
          <label
            htmlFor={id}
            className={twJoin('text-primary', fontSizeStyles[inputSize])}
          >
            {label}
            {important && (
              <span className="text-danger ml-1 font-semibold">*</span>
            )}
          </label>
        )}
        <div className="w-full">
          <input
            id={id}
            ref={ref}
            disabled={disabled}
            className={twJoin(
              'text-primary focus:outline-info w-full rounded-md px-3 py-2 focus:outline-2 focus:outline-offset-0',
              disabled && 'cursor-not-allowed opacity-60',
              !disabled && error && 'outline-danger outline-2 outline-offset-0',
              variant === 'outlined' && error && 'outline-danger outline',
              variantStyles[variant],
              fontSizeStyles[inputSize],
              className
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

Input.displayName = 'Input';

export default Input;
