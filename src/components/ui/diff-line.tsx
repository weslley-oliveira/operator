import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv, type VariantProps } from 'tailwind-variants';

const diffLineVariants = tv({
  base: 'flex w-full items-start gap-2 px-4 py-2 font-mono text-[13px]',
  variants: {
    type: {
      removed: 'bg-[#1A0A0A]',
      added: 'bg-[#0A1A0F]',
      context: 'bg-transparent',
    },
  },
  defaultVariants: { type: 'context' },
});

const prefixVariants = tv({
  base: 'shrink-0 select-none',
  variants: {
    type: {
      removed: 'text-red-500',
      added: 'text-emerald-500',
      context: 'text-zinc-600',
    },
  },
  defaultVariants: { type: 'context' },
});

const codeVariants = tv({
  base: '',
  variants: {
    type: {
      removed: 'text-zinc-500',
      added: 'text-zinc-50',
      context: 'text-zinc-500',
    },
  },
  defaultVariants: { type: 'context' },
});

const PREFIX: Record<string, string> = {
  removed: '-',
  added: '+',
  context: ' ',
};

type DiffLineVariants = VariantProps<typeof diffLineVariants>;

type DiffLineProps = ComponentProps<'div'> & DiffLineVariants & { code: string };

export function DiffLine({ type, code, className, ...props }: DiffLineProps) {
  return (
    <div {...props} className={twMerge(diffLineVariants({ type }), className)}>
      <span className={prefixVariants({ type })}>{PREFIX[type ?? 'context']}</span>
      <span className={codeVariants({ type })}>{code}</span>
    </div>
  );
}
