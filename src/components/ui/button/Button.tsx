import { forwardRef } from 'react';
import { twJoin } from 'tailwind-merge';
import { Loader2 } from 'lucide-react';

type Size = 'small' | 'medium' | 'large';

type Variant = 'contained' | 'outlined' | 'text';

type Color =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  color?: Color;
  variant?: Variant;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, IButton>(
  (
    {
      children,
      className,
      startIcon,
      endIcon,
      size = 'small',
      color = 'primary',
      variant = 'contained',
      loading = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const fontSizeStyles: Record<Size, string> = {
      small: 'text-sm',
      medium: 'text-base',
      large: 'text-lg',
    };

    const containedStyles: Record<Color, string> = {
      primary: 'bg-primary hover:bg-primary/90',
      secondary: 'bg-secondary hover:bg-secondary/90',
      info: 'bg-info hover:bg-info/90',
      success: 'bg-success hover:bg-success/90',
      warning: 'bg-warning hover:bg-warning/90',
      danger: 'bg-danger hover:bg-danger/90',
    };

    const outlinedStyles: Record<Color, string> = {
      primary:
        'border-primary text-primary hover:border-primary/90 hover:text-primary/90',
      secondary:
        'border-secondary text-secondary hover:border-secondary/90 hover:text-secondary/90',
      info: 'border-info text-info hover:border-info/90 hover:text-info/90',
      success:
        'border-success text-success hover:border-success/90 hover:text-success/90',
      warning:
        'border-warning text-warning hover:border-warning/90 hover:text-warning/90',
      danger:
        'border-danger text-danger hover:border-danger/90 hover:text-danger/90',
    };

    const textStyles: Record<Color, string> = {
      primary: 'text-primary hover:text-primary/90',
      secondary: 'text-secondary hover:text-secondary/90',
      info: 'text-info hover:text-info/90',
      success: 'text-success hover:text-success/90',
      warning: 'text-warning hover:text-warning/90',
      danger: 'text-danger hover:text-danger/90',
    };

    return (
      <button
        ref={ref}
        className={twJoin(
          'flex items-center justify-center gap-2 rounded-md p-2',
          fontSizeStyles[size],
          variant === 'contained' && 'text-white',
          variant === 'text' && textStyles[color],
          variant === 'outlined' ? 'border hover:border-2' : 'border-none',
          variant === 'outlined' && outlinedStyles[color],
          variant === 'contained' ? containedStyles[color] : 'bg-transparent',
          disabled
            ? 'cursor-not-allowed font-medium opacity-30'
            : 'cursor-pointer font-medium hover:font-semibold',
          className
        )}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            <p>Loading...</p>
          </>
        ) : (
          <>
            {startIcon && startIcon}
            {children}
            {endIcon && endIcon}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
