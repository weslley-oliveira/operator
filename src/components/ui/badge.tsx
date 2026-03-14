import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv, type VariantProps } from 'tailwind-variants';

const badge = tv({
  base: ['inline-flex items-center font-mono font-normal rounded-sm'],
  variants: {
    variant: {
      default: 'text-zinc-400 border border-zinc-700',
      muted: 'text-zinc-500',
    },
    size: {
      sm: 'text-[11px] px-1.5 py-0.5',
      md: 'text-xs px-2 py-0.5',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

type BadgeVariants = VariantProps<typeof badge>;

type BadgeProps = ComponentProps<'span'> & BadgeVariants;

export function Badge({ variant, size, className, ...props }: BadgeProps) {
  return (
    <span {...props} className={twMerge(badge({ variant, size }), className)} />
  );
}
