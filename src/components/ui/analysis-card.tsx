import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { StatusBadge } from './status-badge';

type Severity = 'critical' | 'warning' | 'good';

type AnalysisCardProps = ComponentProps<'div'> & {
  severity: Severity;
  label?: string;
  title: string;
  description: string;
};

export function AnalysisCard({
  severity,
  label,
  title,
  description,
  className,
  ...props
}: AnalysisCardProps) {
  return (
    <div
      {...props}
      className={twMerge(
        'flex flex-col gap-3 border border-[#2A2A2A] p-5',
        className,
      )}
    >
      <StatusBadge variant={severity}>{label ?? severity}</StatusBadge>
      <p className="font-mono text-[13px] text-zinc-50">{title}</p>
      <p className="font-mono text-xs leading-relaxed text-zinc-500">{description}</p>
    </div>
  );
}
