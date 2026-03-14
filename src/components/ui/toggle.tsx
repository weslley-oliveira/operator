'use client';

import { Switch } from '@base-ui/react/switch';
import { twMerge } from 'tailwind-merge';
import { tv, type VariantProps } from 'tailwind-variants';

const toggleTrack = tv({
  base: [
    'inline-flex shrink-0 cursor-pointer items-center rounded-full',
    'bg-[#2A2A2A] transition-colors duration-150',
    'data-[checked]:bg-emerald-500',
    'disabled:pointer-events-none disabled:opacity-50',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950',
  ],
  variants: {
    size: {
      sm: 'h-[18px] w-[32px] p-[2px]',
      md: 'h-[22px] w-[40px] p-[3px]',
    },
  },
  defaultVariants: { size: 'md' },
});

const toggleThumb = tv({
  base: [
    'block rounded-full transition-all duration-150',
    'bg-zinc-500',
    'data-[checked]:bg-[#0A0A0A]',
  ],
  variants: {
    size: {
      // track 32 - padding 2*2 - knob 14 = 14px travel
      sm: 'size-[14px] data-[checked]:translate-x-[14px]',
      // track 40 - padding 3*2 - knob 16 = 18px travel
      md: 'size-[16px] data-[checked]:translate-x-[18px]',
    },
  },
  defaultVariants: { size: 'md' },
});

type ToggleVariants = VariantProps<typeof toggleTrack>;

type ToggleProps = Omit<React.ComponentProps<typeof Switch.Root>, 'className'> &
  ToggleVariants & { className?: string };

export function Toggle({ size, className, ...props }: ToggleProps) {
  return (
    <Switch.Root
      {...props}
      className={twMerge(toggleTrack({ size }), className)}
    >
      <Switch.Thumb className={toggleThumb({ size })} />
    </Switch.Root>
  );
}
