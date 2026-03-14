import { codeToHtml } from 'shiki';
import { twMerge } from 'tailwind-merge';

type CodeBlockProps = {
  code: string;
  lang: string;
  className?: string;
};

export async function CodeBlock({ code, lang, className }: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang,
    theme: 'vesper',
  });

  return (
    <div
      className={twMerge(
        'overflow-hidden rounded-sm border border-[#2A2A2A] bg-[#111111]',
        className,
      )}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: shiki output is trusted
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
