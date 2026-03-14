import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

function scoreColor(score: number): string {
  if (score >= 7) return 'text-emerald-500';
  if (score >= 4) return 'text-amber-500';
  return 'text-red-500';
}

type LeaderboardRowProps = ComponentProps<'div'> & {
  rank: number;
  score: number;
  codePreview: string;
  lang: string;
};

export function LeaderboardRow({
  rank,
  score,
  codePreview,
  lang,
  className,
  ...props
}: LeaderboardRowProps) {
  return (
    <div
      {...props}
      className={twMerge(
        'flex w-full items-center gap-6 border-b border-[#2A2A2A] px-5 py-4',
        className,
      )}
    >
      {/* rank */}
      <span className="w-10 shrink-0 font-mono text-[13px] text-zinc-600">
        #{rank}
      </span>

      {/* score */}
      <span className={twMerge('w-[60px] shrink-0 font-mono text-[13px] font-bold', scoreColor(score))}>
        {score.toFixed(1)}
      </span>

      {/* code preview */}
      <span className="min-w-0 flex-1 truncate font-mono text-xs text-zinc-500">
        {codePreview}
      </span>

      {/* lang */}
      <span className="w-[100px] shrink-0 font-mono text-xs text-zinc-600">
        {lang}
      </span>
    </div>
  );
}
