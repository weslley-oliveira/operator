import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type NavbarProps = ComponentProps<'header'> & {
  navLinks?: { label: string; href: string }[];
};

export function Navbar({ navLinks, className, ...props }: NavbarProps) {
  return (
    <header
      {...props}
      className={twMerge(
        'flex h-14 w-full items-center gap-2 border-b border-[#2A2A2A] bg-[#0A0A0A] px-6',
        className,
      )}
    >
      {/* logo */}
      <div className="flex items-center gap-2">
        <span className="font-mono text-[13px] font-bold text-emerald-500">//</span>
        <span className="font-mono text-[13px] font-bold text-zinc-50">devroast.io</span>
      </div>

      {/* spacer */}
      <div className="flex-1" />

      {/* nav links */}
      {navLinks?.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="font-mono text-[13px] text-zinc-500 transition-colors hover:text-zinc-300"
        >
          {link.label}
        </a>
      ))}
    </header>
  );
}
