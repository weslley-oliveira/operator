import { AnalysisCard } from '@/components/ui/analysis-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeBlock } from '@/components/ui/code-block';
import { DiffLine } from '@/components/ui/diff-line';
import { LeaderboardRow } from '@/components/ui/leaderboard-row';
import { Navbar } from '@/components/ui/navbar';
import { ScoreRing } from '@/components/ui/score-ring';
import { StatusBadge } from '@/components/ui/status-badge';
import { Toggle } from '@/components/ui/toggle';

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-mono text-[11px] text-zinc-600">{label}</span>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}

const JS_SAMPLE = `function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('world'));`;

const TS_SAMPLE = `type User = {
  id: number;
  name: string;
  role: 'admin' | 'user';
};

function getUser(id: number): Promise<User> {
  return fetch(\`/api/users/\${id}\`).then(r => r.json());
}`;

export default function ComponentsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-12 py-16">
      <div className="mx-auto flex max-w-3xl flex-col gap-16">
        <div className="flex flex-col gap-1">
          <h1 className="font-mono text-xl font-semibold text-zinc-100">
            UI Components
          </h1>
          <p className="font-mono text-sm text-zinc-500">
            Visual reference of all variants
          </p>
        </div>

        {/* Badge */}
        <Section title="Badge">
          <Row label="variant">
            <Badge variant="default">javascript</Badge>
            <Badge variant="default">typescript</Badge>
            <Badge variant="default">sql</Badge>
            <Badge variant="muted">java</Badge>
            <Badge variant="muted">python</Badge>
          </Row>
          <Row label="size">
            <Badge size="sm">sm — javascript</Badge>
            <Badge size="md">md — typescript</Badge>
          </Row>
        </Section>

        {/* CodeBlock */}
        <Section title="CodeBlock">
          <Row label="javascript">
            <div className="w-full">
              <CodeBlock code={JS_SAMPLE} lang="javascript" />
            </div>
          </Row>
          <Row label="typescript">
            <div className="w-full">
              <CodeBlock code={TS_SAMPLE} lang="typescript" />
            </div>
          </Row>
        </Section>

        {/* Toggle */}
        <Section title="Toggle">
          <Row label="off">
            <div className="flex items-center gap-3">
              <Toggle size="md" />
              <span className="font-mono text-xs text-zinc-500">roast mode</span>
            </div>
            <div className="flex items-center gap-3">
              <Toggle size="sm" />
              <span className="font-mono text-[11px] text-zinc-500">roast mode</span>
            </div>
          </Row>
          <Row label="on">
            <div className="flex items-center gap-3">
              <Toggle defaultChecked size="md" />
              <span className="font-mono text-xs text-emerald-500">roast mode</span>
            </div>
            <div className="flex items-center gap-3">
              <Toggle defaultChecked size="sm" />
              <span className="font-mono text-[11px] text-emerald-500">roast mode</span>
            </div>
          </Row>
          <Row label="disabled">
            <Toggle disabled size="md" />
            <Toggle defaultChecked disabled size="md" />
          </Row>
        </Section>

        {/* StatusBadge */}
        <Section title="StatusBadge">
          <Row label="variant">
            <StatusBadge variant="critical">critical</StatusBadge>
            <StatusBadge variant="warning">warning</StatusBadge>
            <StatusBadge variant="good">good</StatusBadge>
          </Row>
          <Row label="verdict">
            <StatusBadge variant="critical">needs_serious_help</StatusBadge>
          </Row>
        </Section>

        {/* AnalysisCard */}
        <Section title="AnalysisCard">
          <Row label="severity">
            <AnalysisCard
              severity="critical"
              title="using var instead of const/let"
              description="the var keyword is function-scoped rather than block-scoped, which can lead to unexpected behavior and bugs. modern javascript uses const for immutable bindings and let for mutable ones."
            />
            <AnalysisCard
              severity="warning"
              title="missing error handling in async function"
              description="async functions should wrap awaited calls in try/catch to handle rejections gracefully and avoid unhandled promise rejections at runtime."
            />
            <AnalysisCard
              severity="good"
              title="good use of destructuring"
              description="destructuring assignment is used correctly here, improving readability and reducing repetition when extracting properties from objects."
            />
          </Row>
        </Section>

        {/* DiffLine */}
        <Section title="DiffLine">
          <Row label="types">
            <div className="w-full overflow-hidden border border-[#2A2A2A]">
              <DiffLine type="removed" code="var total = 0;" />
              <DiffLine type="added" code="const total = 0;" />
              <DiffLine type="context" code="for (let i = 0; i < items.length; i++) {" />
            </div>
          </Row>
        </Section>

        {/* LeaderboardRow */}
        <Section title="LeaderboardRow">
          <Row label="scores">
            <div className="w-full">
              <LeaderboardRow rank={1} score={2.1} codePreview="function calculateTotal(items) { var total = 0; ..." lang="javascript" />
              <LeaderboardRow rank={2} score={5.8} codePreview="async function fetchUser(id) { return await db.query..." lang="typescript" />
              <LeaderboardRow rank={3} score={8.4} codePreview="const users = await Promise.all(ids.map(fetchUser));" lang="typescript" />
            </div>
          </Row>
        </Section>

        {/* Navbar */}
        <Section title="Navbar">
          <Row label="default">
            <div className="w-full">
              <Navbar navLinks={[{ label: 'leaderboard', href: '#' }]} />
            </div>
          </Row>
        </Section>

        {/* ScoreRing */}
        <Section title="ScoreRing">
          <Row label="design reference (3.5)">
            <ScoreRing score={3.5} />
          </Row>
          <Row label="range — critical · warning · good">
            <ScoreRing score={2.1} />
            <ScoreRing score={5.5} />
            <ScoreRing score={8.7} />
          </Row>
          <Row label="edge cases">
            <ScoreRing score={0} />
            <ScoreRing score={10} />
          </Row>
        </Section>

        {/* Button */}
        <Section title="Button">
          <Row label="variant">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </Row>

          <Row label="size">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </Row>

          <Row label="rounded">
            <Button rounded="sm">Rounded sm</Button>
            <Button rounded="md">Rounded md</Button>
            <Button rounded="full">Rounded full</Button>
          </Row>

          <Row label="disabled">
            <Button disabled>Primary</Button>
            <Button variant="secondary" disabled>
              Secondary
            </Button>
            <Button variant="outline" disabled>
              Outline
            </Button>
            <Button variant="ghost" disabled>
              Ghost
            </Button>
            <Button variant="destructive" disabled>
              Destructive
            </Button>
          </Row>

          <Row label="combinations">
            <Button variant="primary" size="sm" rounded="full">
              $ deploy
            </Button>
            <Button variant="outline" size="lg" rounded="sm">
              $ cancel
            </Button>
            <Button variant="destructive" size="sm" rounded="full">
              $ delete
            </Button>
            <Button variant="ghost" size="md" rounded="md">
              $ dismiss
            </Button>
          </Row>
        </Section>
      </div>
    </main>
  );
}
