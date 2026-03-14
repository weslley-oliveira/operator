import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv, type VariantProps } from 'tailwind-variants';

const statusBadgeVariants = tv({
  base: 'inline-flex items-center gap-2 font-mono text-xs',
  variants: {
    variant: {
      critical: 'text-red-500',
      warning: 'text-amber-500',
      good: 'text-emerald-500',
    },
  },
  defaultVariants: { variant: 'good' },
});

const dotVariants = tv({
  base: 'size-2 shrink-0 rounded-full',
  variants: {
    variant: {
      critical: 'bg-red-500',
      warning: 'bg-amber-500',
      good: 'bg-emerald-500',
    },
  },
  defaultVariants: { variant: 'good' },
});

type StatusBadgeVariants = VariantProps<typeof statusBadgeVariants>;

type StatusBadgeProps = ComponentProps<'span'> & StatusBadgeVariants;

export function StatusBadge({ variant, className, children, ...props }: StatusBadgeProps) {
  return (
    <span {...props} className={twMerge(statusBadgeVariants({ variant }), className)}>
      <span className={dotVariants({ variant })} />
      {children}
    </span>
  );
}
