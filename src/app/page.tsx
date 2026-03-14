'use client';

import { useRef, useState } from 'react';
import { Toggle } from '@/components/ui/toggle';

const DEFAULT_CODE = `function calculateTotal(items) {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    total = total + items[i].price;
  }

  if (total > 100) {
    console.log("discount applied");
    total = total * 0.9;
  }

  // TODO: handle tax calculation
  // TODO: handle currency conversion

  return total;
}`;

const LEADERBOARD = [
  {
    rank: 1,
    rankColor: 'text-amber-500',
    score: '1.2',
    code: [
      'eval(prompt("enter code"))',
      'document.write(response)',
      '// trust the user lol',
    ],
    lang: 'javascript',
  },
  {
    rank: 2,
    rankColor: 'text-zinc-500',
    score: '1.8',
    code: [
      'if (x == true) { return true; }',
      'else if (x == false) { return false; }',
      'else { return !false; }',
    ],
    lang: 'typescript',
  },
  {
    rank: 3,
    rankColor: 'text-zinc-500',
    score: '2.1',
    code: [
      'SELECT * FROM users WHERE 1=1',
      '-- TODO: add authentication',
    ],
    lang: 'sql',
  },
];

export default function HomePage() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [roastMode, setRoastMode] = useState(true);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lineNumRef = useRef<HTMLDivElement>(null);

  const lineCount = code.split('\n').length;

  const syncScroll = () => {
    if (lineNumRef.current && textareaRef.current) {
      lineNumRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] font-mono">
      {/* Navbar */}
      <header className="flex h-14 w-full items-center justify-between border-b border-[#2A2A2A] bg-[#0A0A0A] px-10">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-emerald-500">{'>'}</span>
          <span className="text-lg font-medium text-zinc-50">devroast</span>
        </div>
        <a
          href="#"
          className="text-[13px] text-zinc-500 transition-colors hover:text-zinc-300"
        >
          leaderboard
        </a>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center gap-8 px-10 pt-20">
        {/* Hero */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-3">
            <span className="text-4xl font-bold text-emerald-500">$</span>
            <h1 className="text-4xl font-bold text-zinc-50">
              paste your code. get roasted.
            </h1>
          </div>
          <p className="text-sm text-zinc-500">
            {'// drop your code below and we\'ll rate it — brutally honest or full roast mode'}
          </p>
        </div>

        {/* Code Editor */}
        <div className="flex h-[360px] w-[780px] flex-col overflow-hidden border border-[#2A2A2A] bg-[#111111]">
          {/* Window dots */}
          <div className="flex h-10 shrink-0 items-center border-b border-[#2A2A2A] px-4">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-red-500" />
              <span className="size-3 rounded-full bg-amber-500" />
              <span className="size-3 rounded-full bg-emerald-500" />
            </div>
          </div>

          {/* Code inner */}
          <div className="flex flex-1 overflow-hidden">
            {/* Line numbers */}
            <div
              ref={lineNumRef}
              className="flex w-12 shrink-0 flex-col items-end overflow-hidden border-r border-[#2A2A2A] bg-[#0F0F0F] px-3 py-4"
            >
              {Array.from({ length: lineCount }, (_, i) => (
                <span
                  key={i}
                  className="select-none font-mono text-[12px] leading-[1.5] text-zinc-600"
                >
                  {i + 1}
                </span>
              ))}
            </div>

            {/* Textarea */}
            <textarea
              ref={textareaRef}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onScroll={syncScroll}
              className="flex-1 resize-none bg-transparent p-4 font-mono text-[12px] leading-[1.5] text-zinc-50 outline-none placeholder:text-zinc-700"
              spellCheck={false}
              placeholder="// paste your code here..."
            />
          </div>
        </div>

        {/* Actions Bar */}
        <div className="flex w-[780px] items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-[10px]">
              <Toggle
                checked={roastMode}
                onCheckedChange={setRoastMode}
                size="md"
              />
              <span
                className={`text-[13px] transition-colors ${roastMode ? 'text-emerald-500' : 'text-zinc-500'}`}
              >
                roast mode
              </span>
            </div>
            <span className="text-xs text-zinc-600">
              // maximum sarcasm enabled
            </span>
          </div>

          <button
            type="button"
            className="cursor-pointer bg-emerald-500 px-6 py-[10px] text-[13px] font-medium text-[#0A0A0A] transition-colors hover:bg-emerald-400"
          >
            $ roast_my_code
          </button>
        </div>

        {/* Footer Hint */}
        <div className="flex items-center gap-6">
          <span className="text-xs text-zinc-600">2,847 codes roasted</span>
          <span className="text-xs text-zinc-600">·</span>
          <span className="text-xs text-zinc-600">avg score: 4.2/10</span>
        </div>

        {/* Spacer */}
        <div className="h-[60px]" />

        {/* Leaderboard Preview */}
        <div className="flex w-[960px] flex-col gap-6">
          {/* Title Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-emerald-500">//</span>
              <span className="text-sm font-bold text-zinc-50">shame_leaderboard</span>
            </div>
            <div className="flex cursor-pointer items-center border border-[#2A2A2A] px-3 py-[6px] transition-colors hover:border-zinc-600">
              <span className="text-xs text-zinc-500">{'$ view_all >>'}</span>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-[13px] text-zinc-600">
            // the worst code on the internet, ranked by shame
          </p>

          {/* Table */}
          <div className="flex flex-col border border-[#2A2A2A]">
            {/* Header */}
            <div className="flex h-10 items-center border-b border-[#2A2A2A] bg-[#0F0F0F] px-5">
              <span className="w-[50px] shrink-0 text-xs font-medium text-zinc-600">#</span>
              <span className="w-[70px] shrink-0 text-xs font-medium text-zinc-600">score</span>
              <span className="flex-1 text-xs font-medium text-zinc-600">code</span>
              <span className="w-[100px] shrink-0 text-xs font-medium text-zinc-600">lang</span>
            </div>

            {/* Rows */}
            {LEADERBOARD.map((row, idx) => (
              <div
                key={row.rank}
                className={`flex items-start px-5 py-4 ${idx < LEADERBOARD.length - 1 ? 'border-b border-[#2A2A2A]' : ''}`}
              >
                <span className={`w-[50px] shrink-0 text-xs ${row.rankColor}`}>
                  {row.rank}
                </span>
                <span className="w-[70px] shrink-0 text-xs font-bold text-red-500">
                  {row.score}
                </span>
                <div className="flex flex-1 flex-col gap-[3px]">
                  {row.code.map((line, i) => (
                    <span
                      key={i}
                      className={`text-xs ${line.startsWith('//') || line.startsWith('--') ? 'text-[#8B8B8B]' : 'text-zinc-50'}`}
                    >
                      {line}
                    </span>
                  ))}
                </div>
                <span className="w-[100px] shrink-0 text-xs text-zinc-500">
                  {row.lang}
                </span>
              </div>
            ))}
          </div>

          {/* Fade hint */}
          <div className="flex justify-center py-4">
            <span className="text-xs text-zinc-600">
              {'showing top 3 of 2,847 · view full leaderboard >>'}
            </span>
          </div>
        </div>

        {/* Bottom padding */}
        <div className="h-[60px]" />
      </main>
    </div>
  );
}
