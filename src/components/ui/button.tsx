import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv, type VariantProps } from 'tailwind-variants';

const button = tv({
  base: [
    'inline-flex items-center justify-center gap-2 font-mono font-medium',
    'cursor-pointer select-none whitespace-nowrap',
    'transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  variants: {
    variant: {
      primary:
        'bg-emerald-500 text-zinc-950 hover:bg-emerald-400 focus-visible:ring-emerald-500',
      secondary:
        'bg-zinc-800 text-zinc-100 hover:bg-zinc-700 focus-visible:ring-zinc-500',
      outline:
        'border border-emerald-500 text-emerald-500 bg-transparent hover:bg-emerald-500/10 focus-visible:ring-emerald-500',
      ghost:
        'bg-transparent text-zinc-300 hover:bg-zinc-800 focus-visible:ring-zinc-500',
      destructive:
        'bg-red-600 text-white hover:bg-red-500 focus-visible:ring-red-600',
    },
    size: {
      sm: 'h-8 px-4 text-xs',
      md: 'h-[42px] px-6 text-[13px]',
      lg: 'h-12 px-8 text-sm',
    },
    rounded: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    rounded: 'md',
  },
});

type ButtonVariants = VariantProps<typeof button>;

type ButtonProps = ComponentProps<'button'> & ButtonVariants;

export function Button({
  variant,
  size,
  rounded,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(button({ variant, size, rounded }), className)}
    />
  );
}
