import { Loader2 } from 'lucide-react';
import { forwardRef } from 'react';
import { twJoin } from 'tailwind-merge';

type Color =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger';

type Variant = 'contained' | 'outlined' | 'text';

interface IIconButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: Color;
  variant?: Variant;
  loading?: boolean;
  disabled?: boolean;
}

const IconButton = forwardRef<HTMLButtonElement, IIconButton>(
  (
    {
      children,
      variant = 'contained',
      color = 'primary',
      loading = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    // Contained Styles
    const containedStyles: Record<Color, string> = {
      primary: 'bg-primary hover:bg-primary/90',
      secondary: 'bg-secondary hover:bg-secondary/90',
      info: 'bg-info hover:bg-info/90',
      success: 'bg-success hover:bg-success/90',
      warning: 'bg-warning hover:bg-warning/90',
      danger: 'bg-danger hover:bg-danger/90',
    };

    // Outlined Styles
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

    // Text Styles
    const textStyles: Record<Color, string> = {
      primary: 'text-primary hover:text-primary/90 hover:bg-primary/10',
      secondary: 'text-secondary hover:text-secondary/90 hover:bg-secondary/10',
      info: 'text-info hover:text-info/90 hover:bg-info/10',
      success: 'text-success hover:text-success/90 hover:bg-success/10',
      warning: 'text-warning hover:text-warning/90 hover:bg-warning/10',
      danger: 'text-danger hover:text-danger/90 hover:bg-danger/10',
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={twJoin(
          'flex min-h-10 max-w-fit min-w-10 items-center justify-center rounded-md p-2',
          disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
          variant === 'contained' && 'text-white',
          variant === 'contained' ? containedStyles[color] : 'bg-transparent',
          variant === 'outlined' ? 'border hover:border-2' : 'border-none',
          variant === 'outlined' && outlinedStyles[color],
          variant === 'text' && textStyles[color]
        )}
        {...props}
      >
        {loading ? <Loader2 size={16} className="animate-spin" /> : children}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;
