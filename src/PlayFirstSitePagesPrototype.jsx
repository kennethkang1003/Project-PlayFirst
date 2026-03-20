import React, { useMemo, useState } from "react";
import {
  Search,
  Upload,
  Play,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Gamepad2,
  Image as ImageIcon,
  ShieldCheck,
  BarChart3,
  ListChecks,
  Layers3,
} from "lucide-react";

const featuredGames = [
  {
    id: "neon-ashes",
    title: "Neon Ashes",
    genre: "Action RPG",
    studio: "North Circuit",
    progress: 68,
    amount: "$81.6k of $120k",
    followers: "14.2k following",
    build: "Windows demo v0.3.8",
    status: "Demo live",
    update: "Updated Mar 16",
    description:
      "A fast, cyber-fantasy action RPG with branching districts, boss hunts, and a public milestone roadmap.",
    trustTags: ["Verified studio", "Roadmap live", "Demo available"],
    milestones: [
      ["Pre-production", true],
      ["Vertical slice", true],
      ["Combat tuning", true],
      ["Region two content", false],
      ["Optimization and QA", false],
      ["Launch prep", false],
    ],
    funds: [
      ["Engineering", "34%"],
      ["Art & animation", "28%"],
      ["Audio", "9%"],
      ["QA & optimization", "17%"],
      ["Contingency", "12%"],
    ],
    studioTrust: [
      "Verified studio profile",
      "One shipped title in the last three years",
      "Weekly milestone summaries",
      "Average reply time under 24 hours",
    ],
  },
  {
    id: "tiny-kingdoms",
    title: "Tiny Kingdoms",
    genre: "Strategy / Sim",
    studio: "Clover Forge",
    progress: 41,
    amount: "$22.4k of $55k",
    followers: "5.2k following",
    build: "Prototype build available",
    status: "Roadmap live",
    update: "New this week",
    description:
      "A charming kingdom sim where players optimize villages, trade routes, and seasonal survival.",
    trustTags: ["Weekly devlog", "Prototype live", "Transparent budget"],
    milestones: [
      ["Core loop prototype", true],
      ["Art target", true],
      ["Trade system", false],
      ["Weather balance", false],
      ["Controller support", false],
      ["Launch prep", false],
    ],
    funds: [
      ["Engineering", "29%"],
      ["Art", "31%"],
      ["Design", "14%"],
      ["Audio", "8%"],
      ["QA + reserve", "18%"],
    ],
    studioTrust: [
      "Weekly updates",
      "Community QA group",
      "Playable prototype",
      "Public milestone log",
    ],
  },
  {
    id: "echo-drift",
    title: "Echo Drift",
    genre: "Narrative Sci-Fi",
    studio: "Blue Lantern Games",
    progress: 83,
    amount: "$99.8k of $120k",
    followers: "22.7k following",
    build: "Mac + PC vertical slice",
    status: "Playable build",
    update: "Popular",
    description:
      "A dialogue-rich sci-fi thriller built around time loops, memory fragments, and player choices.",
    trustTags: ["Vertical slice", "Story roadmap", "High traction"],
    milestones: [
      ["Narrative pillar", true],
      ["Vertical slice", true],
      ["Voice casting", true],
      ["Episode two", false],
      ["Optimization", false],
      ["Launch prep", false],
    ],
    funds: [
      ["Writing + narrative", "26%"],
      ["Engineering", "24%"],
      ["Art", "21%"],
      ["Audio", "12%"],
      ["QA + reserve", "17%"],
    ],
    studioTrust: [
      "Public vertical slice",
      "Consistent patch notes",
      "Shipped narrative title",
      "Fast creator replies",
    ],
  },
  {
    id: "mecha-orchard",
    title: "Mecha Orchard",
    genre: "Cozy Builder",
    studio: "Field System",
    progress: 52,
    amount: "$46.9k of $90k",
    followers: "8.9k following",
    build: "Demo with controller support",
    status: "Devlog posted",
    update: "2.1k saved",
    description:
      "A cozy automation builder where players grow fruit with tiny helper mechs and light factory systems.",
    trustTags: ["Controller demo", "Devlog active", "Save momentum"],
    milestones: [
      ["Farming loop", true],
      ["Helper bots", true],
      ["Factory chain", false],
      ["Biome expansion", false],
      ["Steam Deck pass", false],
      ["Launch prep", false],
    ],
    funds: [
      ["Engineering", "27%"],
      ["Art", "32%"],
      ["Animation", "11%"],
      ["Audio", "10%"],
      ["QA + reserve", "20%"],
    ],
    studioTrust: [
      "Controller-ready demo",
      "Frequent gifs and logs",
      "Public roadmap",
      "Small transparent team",
    ],
  },
  {
    id: "ashfall-ops",
    title: "Ashfall Ops",
    genre: "Co-op Shooter",
    studio: "Glass Harbor",
    progress: 59,
    amount: "$70.3k of $120k",
    followers: "9.3k following",
    build: "Closed alpha clips",
    status: "Squad roadmap",
    update: "Recently updated",
    description:
      "A tactical co-op extraction game with destructible weather zones and mission-based progression.",
    trustTags: ["Squad roadmap", "Recent build", "Alpha footage"],
    milestones: [
      ["Combat prototype", true],
      ["Squad roles", true],
      ["Weather tech", true],
      ["Map pass", false],
      ["Progression balance", false],
      ["Launch prep", false],
    ],
    funds: [
      ["Engineering", "36%"],
      ["Art", "23%"],
      ["Server + backend", "15%"],
      ["Audio", "8%"],
      ["QA + reserve", "18%"],
    ],
    studioTrust: [
      "Team-based roadmap",
      "Frequent update cadence",
      "Alpha media",
      "Clear scope breakdown",
    ],
  },
  {
    id: "moonwell",
    title: "Moonwell",
    genre: "Fantasy Adventure",
    studio: "Lark House",
    progress: 77,
    amount: "$61.4k of $80k",
    followers: "11.7k following",
    build: "Public demo available",
    status: "Budget breakdown",
    update: "Near goal",
    description:
      "A painterly fantasy exploration game centered on story choices, crafting, and moonlit ruins.",
    trustTags: ["Public demo", "Near goal", "Budget visible"],
    milestones: [
      ["Narrative setup", true],
      ["Exploration loop", true],
      ["Crafting", true],
      ["Act two zone", false],
      ["Polish pass", false],
      ["Launch prep", false],
    ],
    funds: [
      ["Engineering", "25%"],
      ["Art", "34%"],
      ["Narrative", "13%"],
      ["Audio", "9%"],
      ["QA + reserve", "19%"],
    ],
    studioTrust: [
      "Demo in public",
      "Budget section visible",
      "Milestone board",
      "Consistent creator notes",
    ],
  },
];

const categories = [
  "Trending",
  "New Projects",
  "Near Goal",
  "Recently Updated",
  "Demo Available",
  "Under $40k raised",
];

const uploadTabs = [
  { id: "basic", label: "Basic Info", icon: Layers3 },
  { id: "media", label: "Media", icon: ImageIcon },
  { id: "funding", label: "Funding", icon: BarChart3 },
  { id: "milestones", label: "Milestones", icon: ListChecks },
  { id: "trust", label: "Trust Signals", icon: ShieldCheck },
  { id: "preview", label: "Preview", icon: Play },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function navClass(active) {
  return cn("transition hover:text-zinc-900", active && "text-zinc-900 font-medium");
}

function Shell({ currentPage, setCurrentPage, children }) {
  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <button onClick={() => setCurrentPage("home")} className="flex items-center gap-2 text-xl font-semibold tracking-tight">
            <Gamepad2 className="h-5 w-5" />
            <span>PlayFirst</span>
          </button>

          <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
            <button onClick={() => setCurrentPage("home")} className={navClass(currentPage === "home")}>Home</button>
            <button onClick={() => setCurrentPage("explore")} className={navClass(currentPage === "explore")}>Explore</button>
            <button onClick={() => setCurrentPage("how-it-works")} className={navClass(currentPage === "how-it-works")}>How It Works</button>
            <button onClick={() => setCurrentPage("developers")} className={navClass(currentPage === "developers")}>Upload</button>
          </nav>

          <div className="hidden flex-1 justify-center lg:flex">
            <div className="flex w-full max-w-xl items-center gap-3 rounded-full border border-zinc-300 bg-zinc-100 px-4 py-2 text-sm text-zinc-500">
              <Search className="h-4 w-4" />
              <span>Search games, genres, studios, demos...</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <button className="rounded-full px-4 py-2 text-zinc-700">Log In</button>
            <button className="rounded-full border border-zinc-300 bg-white px-4 py-2">Sign Up</button>
            <button onClick={() => setCurrentPage("developers")} className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-white">
              <Upload className="h-4 w-4" />
              Upload
            </button>
          </div>
        </div>
      </header>

      {children}

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 text-sm text-zinc-500 md:grid-cols-4">
          <div>
            <div className="text-base font-semibold text-zinc-900">PlayFirst</div>
            <p className="mt-2 leading-6">Discover promising games early and support development with more visibility and trust.</p>
          </div>
          <div>
            <div className="font-medium text-zinc-900">Explore</div>
            <div className="mt-3 space-y-2">
              <div>Trending</div>
              <div>New Projects</div>
              <div>Demo Available</div>
            </div>
          </div>
          <div>
            <div className="font-medium text-zinc-900">Upload</div>
            <div className="mt-3 space-y-2">
              <div>Field mapping</div>
              <div>Card preview</div>
              <div>Project preview</div>
            </div>
          </div>
          <div>
            <div className="font-medium text-zinc-900">Company</div>
            <div className="mt-3 space-y-2">
              <div>Support</div>
              <div>Terms</div>
              <div>Privacy</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ eyebrow, title, body, action, onAction }) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        {eyebrow ? <div className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">{eyebrow}</div> : null}
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {body ? <p className="mt-1 text-sm text-zinc-500">{body}</p> : null}
      </div>
      {action ? <button onClick={onAction} className="text-sm text-zinc-600">{action}</button> : null}
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-zinc-200 p-4">
      <div className="text-xs uppercase tracking-wide text-zinc-500">{label}</div>
      <div className="mt-2 text-xl font-semibold">{value}</div>
    </div>
  );
}

function MetricCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
      <div className="text-sm text-zinc-500">{label}</div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
    </div>
  );
}

function FeatureBox({ title, body }) {
  return (
    <div className="rounded-[24px] border border-zinc-200 bg-zinc-50 p-5">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-600">{body}</p>
    </div>
  );
}

function HeroStat({ label, value }) {
  return (
    <div className="rounded-2xl bg-white/10 px-4 py-3 backdrop-blur">
      <div className="text-[11px] uppercase tracking-[0.18em] text-white/60">{label}</div>
      <div className="mt-1 text-sm font-medium text-white">{value}</div>
    </div>
  );
}

function GameCard({ game, onOpen }) {
  return (
    <article className="overflow-hidden rounded-[24px] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative h-44 overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(24,24,27,0.15),_rgba(24,24,27,0.72)),radial-gradient(circle_at_18%_20%,_rgba(251,146,60,0.45),_transparent_24%),radial-gradient(circle_at_78%_30%,_rgba(96,165,250,0.26),_transparent_20%),linear-gradient(to_bottom_right,_#3f3f46,_#18181b)]" />
        <div className="absolute left-4 top-4 rounded-full bg-black/35 px-2.5 py-1 text-[11px] text-white backdrop-blur">{game.build}</div>
        <div className="absolute bottom-4 left-4 rounded-full bg-white/12 px-2.5 py-1 text-[11px] text-white backdrop-blur">{game.update}</div>
        <div className="absolute bottom-4 right-4 rounded-full bg-black/35 px-2.5 py-1 text-[11px] text-white backdrop-blur">{game.followers}</div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-lg font-semibold">{game.title}</div>
            <div className="mt-1 text-sm text-zinc-500">{game.genre} · {game.studio}</div>
          </div>
          <div className="rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] text-zinc-600">{game.status}</div>
        </div>
        <p className="mt-3 text-sm leading-6 text-zinc-600">{game.description}</p>
        <div className="mt-4 h-2 rounded-full bg-zinc-200">
          <div className="h-2 rounded-full bg-zinc-900" style={{ width: `${game.progress}%` }} />
        </div>
        <div className="mt-2 text-sm font-medium text-zinc-700">{game.progress}% funded</div>
        <div className="mt-1 text-sm text-zinc-500">{game.amount}</div>
        <div className="mt-4 flex flex-wrap gap-2">
          {game.trustTags.map((badge) => (
            <span key={badge} className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-600">{badge}</span>
          ))}
        </div>
        <button onClick={onOpen} className="mt-5 inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm text-zinc-700">
          View project
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}

function HorizontalShelf({ title, subtitle, games, setCurrentPage, openProjectPreview, large = false }) {
  return (
    <section>
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          <p className="mt-1 text-sm text-zinc-500">{subtitle}</p>
        </div>
        <button onClick={() => setCurrentPage("explore")} className="text-sm text-zinc-500">See all</button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {games.map((game) => (
          <button
            key={`${title}-${game.id}`}
            onClick={() => openProjectPreview(game)}
            className={cn(
              "group shrink-0 overflow-hidden rounded-[28px] border border-zinc-200 bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",
              large ? "w-[340px]" : "w-[300px]"
            )}
          >
            <div className={cn("relative overflow-hidden bg-zinc-900", large ? "h-52" : "h-44")}>
              <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(24,24,27,0.18),_rgba(24,24,27,0.72)),radial-gradient(circle_at_18%_20%,_rgba(251,146,60,0.45),_transparent_24%),radial-gradient(circle_at_78%_30%,_rgba(96,165,250,0.26),_transparent_20%),linear-gradient(to_bottom_right,_#3f3f46,_#18181b)] transition duration-300 group-hover:scale-[1.04]" />
              <div className="absolute left-4 top-4 rounded-full bg-black/35 px-2.5 py-1 text-[11px] text-white backdrop-blur">{game.build}</div>
              <div className="absolute bottom-4 left-4 rounded-full bg-white/12 px-2.5 py-1 text-[11px] text-white backdrop-blur">{game.update}</div>
              <div className="absolute bottom-4 right-4 rounded-full bg-black/35 px-2.5 py-1 text-[11px] text-white backdrop-blur">{game.followers}</div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-lg font-semibold">{game.title}</div>
                  <div className="mt-1 text-sm text-zinc-500">{game.genre} · {game.studio}</div>
                </div>
                <div className="rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] text-zinc-600">{game.status}</div>
              </div>
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-600">{game.description}</p>
              <div className="mt-4 h-2 rounded-full bg-zinc-200">
                <div className="h-2 rounded-full bg-zinc-900" style={{ width: `${game.progress}%` }} />
              </div>
              <div className="mt-2 flex items-center justify-between gap-3 text-sm">
                <span className="font-medium text-zinc-700">{game.progress}% funded</span>
                <span className="text-zinc-500">{game.amount}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function HomePage({ setCurrentPage, setSelectedCategory, openProjectPreview }) {
  const featuredHero = featuredGames[0];
  const continueBrowsing = featuredGames.slice(0, 6);
  const recentlyUpdated = [featuredGames[4], featuredGames[0], featuredGames[2], featuredGames[5], featuredGames[1]];
  const recommended = [featuredGames[2], featuredGames[5], featuredGames[3], featuredGames[0], featuredGames[4]];
  const rising = [featuredGames[1], featuredGames[3], featuredGames[4], featuredGames[5]];

  return (
    <main className="bg-stone-50">
      <section className="border-b border-zinc-200 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.14),_transparent_24%),linear-gradient(to_bottom,_#ffffff,_#fafaf9)]">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:py-10">
          <div className="grid gap-6 lg:grid-cols-[1.5fr,0.72fr]">
            <button onClick={() => openProjectPreview(featuredHero)} className="group relative overflow-hidden rounded-[32px] border border-zinc-200 bg-zinc-900 text-left shadow-sm">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(24,24,27,0.26),_rgba(24,24,27,0.74)),radial-gradient(circle_at_18%_20%,_rgba(249,115,22,0.5),_transparent_24%),radial-gradient(circle_at_78%_28%,_rgba(96,165,250,0.32),_transparent_24%),linear-gradient(to_bottom_right,_#3f3f46,_#18181b)] transition duration-300 group-hover:scale-[1.02]" />
              <div className="relative flex min-h-[420px] flex-col justify-between p-7 md:p-9">
                <div className="flex flex-wrap gap-2 text-xs text-white/90">
                  {featuredHero.trustTags.map((chip) => (
                    <span key={chip} className="rounded-full bg-white/12 px-3 py-1 backdrop-blur">{chip}</span>
                  ))}
                </div>
                <div className="max-w-2xl">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-black/25 px-3 py-1 text-xs text-white/80 backdrop-blur">
                    <Play className="h-3.5 w-3.5" />
                    {featuredHero.update}
                  </div>
                  <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">{featuredHero.title}</h1>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/78 md:text-base">{featuredHero.description}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-900">View Project</span>
                    <span className="rounded-full bg-white/12 px-5 py-3 text-sm font-medium text-white backdrop-blur">Watch Trailer</span>
                  </div>
                </div>
                <div className="grid gap-3 md:grid-cols-4">
                  <HeroStat label="Funding" value={featuredHero.amount} />
                  <HeroStat label="Progress" value={`${featuredHero.progress}% funded`} />
                  <HeroStat label="Followers" value={featuredHero.followers} />
                  <HeroStat label="Status" value={featuredHero.status} />
                </div>
              </div>
            </button>

            <div className="grid gap-4">
              <div className="rounded-[28px] border border-zinc-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold tracking-tight">Quick filters</h2>
                  <button onClick={() => setCurrentPage("explore")} className="text-sm text-zinc-500">See all</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setSelectedCategory(item);
                        setCurrentPage("explore");
                      }}
                      className="rounded-full border border-zinc-300 bg-zinc-50 px-3 py-2 text-sm text-zinc-700 transition hover:bg-white"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-zinc-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold tracking-tight">Trending now</h2>
                  <button onClick={() => setCurrentPage("explore")} className="text-sm text-zinc-500">More</button>
                </div>
                <div className="space-y-3">
                  {featuredGames.slice(0, 4).map((game, idx) => (
                    <button key={game.id} onClick={() => openProjectPreview(game)} className="flex w-full items-center gap-3 rounded-2xl bg-zinc-50 p-3 text-left transition hover:bg-zinc-100">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-900 text-sm font-semibold text-white">{idx + 1}</div>
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-medium text-zinc-900">{game.title}</div>
                        <div className="truncate text-xs text-zinc-500">{game.genre} · {game.progress}% funded</div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-zinc-400" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-10 px-6 py-8 pb-16">
        <HorizontalShelf title="Continue browsing" subtitle="Popular games people are checking out right now." games={continueBrowsing} setCurrentPage={setCurrentPage} openProjectPreview={openProjectPreview} large />
        <HorizontalShelf title="Recently updated" subtitle="Fresh devlogs, milestone changes, and new builds." games={recentlyUpdated} setCurrentPage={setCurrentPage} openProjectPreview={openProjectPreview} />
        <HorizontalShelf title="Recommended for you" subtitle="Projects with strong momentum, clear roadmaps, and playable builds." games={recommended} setCurrentPage={setCurrentPage} openProjectPreview={openProjectPreview} />
        <HorizontalShelf title="Rising projects" subtitle="Smaller teams getting traction this week." games={rising} setCurrentPage={setCurrentPage} openProjectPreview={openProjectPreview} />
      </section>
    </main>
  );
}

function ExplorePage({ selectedCategory, setSelectedCategory, openProjectPreview }) {
  const filteredGames = useMemo(() => {
    if (selectedCategory === "Demo Available") {
      return featuredGames.filter((g) => g.build.toLowerCase().includes("demo") || g.build.toLowerCase().includes("public"));
    }
    if (selectedCategory === "Near Goal") {
      return featuredGames.filter((g) => g.progress >= 70);
    }
    if (selectedCategory === "New Projects") {
      return featuredGames.slice(1, 5);
    }
    if (selectedCategory === "Recently Updated") {
      return featuredGames.filter((g) =>
        ["Updated Mar 16", "New this week", "Recently updated"].includes(g.update)
      );
    }
    if (selectedCategory === "Under $40k raised") {
      return featuredGames.filter((g) => {
        const raised = Number(g.amount.split(" of ")[0]?.replace("$", "").replace("k", "").replace(/,/g, ""));
        return Number.isFinite(raised) && raised < 40;
      });
    }
    return featuredGames;
  }, [selectedCategory]);

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-8 lg:grid-cols-[280px,1fr]">
        <aside className="space-y-5">
          <div className="rounded-[24px] border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-zinc-900">Browse filters</div>
            <div className="mt-4 space-y-2">
              {categories.map((item) => (
                <button key={item} onClick={() => setSelectedCategory(item)} className={cn("flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left text-sm", selectedCategory === item ? "bg-zinc-900 text-white" : "bg-zinc-50 text-zinc-700")}>
                  <span>{item}</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="text-sm font-semibold text-zinc-900">Trust signals</div>
            <div className="mt-4 space-y-3 text-sm text-zinc-600">
              <p>Verified studios</p>
              <p>Playable demo availability</p>
              <p>Milestone cadence</p>
              <p>Transparent use of funds</p>
            </div>
          </div>
        </aside>

        <section>
          <SectionHeader eyebrow="Explore" title="Discover projects with more context" body="Filter by demo availability, funding momentum, or recent developer activity." />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} onOpen={() => openProjectPreview(game)} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function ProjectPreviewPage({ project, setCurrentPage }) {
  const activeProject = project || featuredGames[0];

  return (
    <main>
      <section className="border-b border-zinc-200 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.1),_transparent_30%),linear-gradient(to_bottom,_#ffffff,_#fafaf9)]">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <div className="text-sm font-medium text-zinc-500">Generated from upload fields</div>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">{activeProject.title}</h1>
            </div>
            <button onClick={() => setCurrentPage("developers")} className="rounded-full border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Back to upload mapping</button>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <div>
              <div className="mb-4 flex flex-wrap gap-2 text-xs text-zinc-600">
                {[activeProject.status, ...activeProject.trustTags].map((chip) => (
                  <span key={chip} className="rounded-full bg-white px-3 py-1 shadow-sm ring-1 ring-zinc-200">{chip}</span>
                ))}
              </div>
              <p className="max-w-2xl text-base leading-7 text-zinc-600 md:text-lg">
                {activeProject.description} This page is assembled from the same structured upload inputs that populate cards, badges, and home shelves.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white">Back this game</button>
                <button className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-800">
                  <Play className="h-4 w-4" />
                  Watch trailer
                </button>
              </div>
            </div>

            <div className="rounded-[28px] border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="text-sm font-medium text-zinc-500">Funding progress</div>
              <div className="mt-2 text-3xl font-semibold">{activeProject.progress}% funded</div>
              <div className="mt-1 text-sm text-zinc-500">{activeProject.amount}</div>
              <div className="mt-4 h-3 rounded-full bg-zinc-200">
                <div className="h-3 rounded-full bg-zinc-900" style={{ width: `${activeProject.progress}%` }} />
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <StatCard label="Followers" value={activeProject.followers} />
                <StatCard label="Build" value={activeProject.build} />
                <StatCard label="Status" value={activeProject.status} />
                <StatCard label="Latest label" value={activeProject.update} />
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[28px] border border-zinc-200 bg-zinc-900 shadow-sm">
            <div className="relative h-[360px] bg-[linear-gradient(140deg,_rgba(24,24,27,0.72),_rgba(24,24,27,0.15)),radial-gradient(circle_at_20%_20%,_rgba(249,115,22,0.55),_transparent_26%),radial-gradient(circle_at_78%_30%,_rgba(239,68,68,0.35),_transparent_22%),linear-gradient(to_bottom_right,_#27272a,_#52525b)]">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur">
                  <Play className="ml-1 h-7 w-7" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-black/20 p-5 text-sm text-white/80 backdrop-blur">
                <span>Hero media generated from uploaded trailer / cover assets</span>
                <span>{activeProject.build}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-8">
            <div className="rounded-[24px] border border-zinc-200 bg-white p-6 shadow-sm">
              <SectionHeader title="About the project" body="Generated from uploaded summary, genre, build, and trust inputs." />
              <div className="grid gap-4 md:grid-cols-2">
                <FeatureBox title="Playable build" body={`Pulled from the build label: ${activeProject.build}.`} />
                <FeatureBox title="Roadmap visibility" body="Created from milestone inputs added during upload." />
                <FeatureBox title="Budget transparency" body="Rendered from the use-of-funds percentages filled out by the developer." />
                <FeatureBox title="Regular updates" body={`Freshness is signaled through the latest update label: ${activeProject.update}.`} />
              </div>
            </div>

            <div className="rounded-[24px] border border-zinc-200 bg-white p-6 shadow-sm">
              <SectionHeader title="Milestones" body="These checklist items come directly from the upload form milestone builder." />
              <div className="space-y-4">
                {activeProject.milestones.map(([label, done]) => (
                  <div key={label} className="flex items-center justify-between rounded-2xl bg-zinc-50 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className={cn("flex h-8 w-8 items-center justify-center rounded-full", done ? "bg-zinc-900 text-white" : "bg-white text-zinc-400 ring-1 ring-zinc-200")}>
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <span className="font-medium text-zinc-800">{label}</span>
                    </div>
                    <span className="text-sm text-zinc-500">{done ? "Complete" : "In progress"}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[24px] border border-zinc-200 bg-white p-6 shadow-sm">
              <SectionHeader title="Use of funds" body="Built from the funding allocation section in upload." />
              <div className="space-y-4">
                {activeProject.funds.map(([label, pct]) => (
                  <div key={label}>
                    <div className="mb-2 flex items-center justify-between text-sm text-zinc-600">
                      <span>{label}</span>
                      <span>{pct}</span>
                    </div>
                    <div className="h-2 rounded-full bg-zinc-200">
                      <div className="h-2 rounded-full bg-zinc-900" style={{ width: pct }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-zinc-200 bg-white p-6 shadow-sm">
              <SectionHeader title="Studio trust section" body="Also generated from upload fields, not hand-written page content." />
              <div className="space-y-3 text-sm text-zinc-600">
                {activeProject.studioTrust.map((item) => (
                  <div key={item} className="rounded-2xl bg-zinc-50 px-4 py-3">{item}</div>
                ))}
                <button onClick={() => setCurrentPage("developers")} className="rounded-full border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Edit upload inputs</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function HowItWorksPage({ setCurrentPage }) {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <section className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
        <div>
          <div className="mb-3 inline-flex rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">A clearer process for players and developers</div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">How PlayFirst works</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 md:text-lg">Players discover games with more trust signals. Developers earn support by publishing milestones, demos, funding plans, and consistent updates.</p>
        </div>

        <div className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="grid gap-3 sm:grid-cols-2">
            <MetricCard label="Games discovered monthly" value="480k" />
            <MetricCard label="Projects with demo" value="326" />
            <MetricCard label="Avg. update frequency" value="8.2 days" />
            <MetricCard label="Verified studios" value="214" />
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          ["1. Discover", "Players browse projects using trust-driven filters like demo availability, milestone cadence, and recent updates."],
          ["2. Evaluate", "Each project page gives a playable build, roadmap clarity, and funding context before players commit support."],
          ["3. Support", "Players back projects with a better understanding of what is already playable and what the next milestone unlocks."],
          ["4. Follow progress", "Studios publish milestones, patch notes, screenshots, and sprint updates to maintain trust after funding."],
        ].map(([title, body], idx) => (
          <div key={title} className="rounded-[24px] border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-stone-100 text-zinc-700">0{idx + 1}</div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600">{body}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 grid gap-6 rounded-[32px] border border-zinc-200 bg-white p-8 shadow-sm lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">For players</h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
            <p>Playable demo links reduce guesswork.</p>
            <p>Milestone tracking makes progress easier to understand.</p>
            <p>Funding plans help players see where support is intended to go.</p>
            <p>Update history shows whether the team is consistently communicating.</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">For developers</h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
            <p>Pages are structured to communicate credibility without needing a giant community team.</p>
            <p>Milestones and updates help convert attention into trust.</p>
            <p>Demo-first discovery can improve the quality of supporters and feedback.</p>
            <p>Studio profiles turn one project into long-term audience equity.</p>
          </div>
          <button onClick={() => setCurrentPage("developers")} className="mt-6 rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white">See upload flow</button>
        </div>
      </section>
    </main>
  );
}

function UploadTabButton({ item, activeTab, setActiveTab }) {
  const Icon = item.icon;
  const isActive = activeTab === item.id;

  return (
    <button
      onClick={() => setActiveTab(item.id)}
      className={cn(
        "flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition",
        isActive ? "border-zinc-900 bg-zinc-900 text-white" : "border-zinc-300 bg-white text-zinc-700"
      )}
    >
      <Icon className="h-4 w-4" />
      {item.label}
    </button>
  );
}

function MappingRow({ label, value, mapsTo }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4">
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="text-sm font-medium text-zinc-900">{label}</div>
          <div className="mt-1 text-sm text-zinc-500">{mapsTo}</div>
        </div>
        <div className="rounded-xl bg-zinc-100 px-3 py-2 text-sm text-zinc-700 md:max-w-[45%]">{value}</div>
      </div>
    </div>
  );
}

function DevelopersPage({ selectedProject, setSelectedProject, setCurrentPage }) {
  const project = selectedProject || featuredGames[0];
  const [activeTab, setActiveTab] = useState("basic");

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <section className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-start">
        <div className="space-y-6">
          <div>
            <div className="mb-3 inline-flex rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
              Upload once, populate the whole product surface
            </div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Tabbed upload form with field mapping</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 md:text-lg">
              This upload page shows developers exactly where each field appears on cards, shelves, and the final project preview.
            </p>
          </div>

          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="mb-4">
              <div className="text-sm font-semibold text-zinc-900">Choose a sample project</div>
              <p className="mt-1 text-sm text-zinc-500">Switch the source data to see how every downstream surface updates.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {featuredGames.map((game) => (
                <button
                  key={game.id}
                  onClick={() => setSelectedProject(game)}
                  className={cn(
                    "rounded-[20px] border p-4 text-left transition",
                    project.id === game.id ? "border-zinc-900 bg-zinc-900 text-white" : "border-zinc-200 bg-zinc-50 text-zinc-900 hover:bg-white"
                  )}
                >
                  <div className="text-sm font-semibold">{game.title}</div>
                  <div className={cn("mt-1 text-sm", project.id === game.id ? "text-white/70" : "text-zinc-500")}>
                    {game.genre} · {game.studio}
                  </div>
                  <div className={cn("mt-3 text-xs", project.id === game.id ? "text-white/70" : "text-zinc-500")}>
                    {game.amount}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex flex-wrap gap-2">
              {uploadTabs.map((item) => (
                <UploadTabButton key={item.id} item={item} activeTab={activeTab} setActiveTab={setActiveTab} />
              ))}
            </div>

            <div className="space-y-4">
              {activeTab === "basic" ? (
                <>
                  <MappingRow label="Project title" value={project.title} mapsTo="Card title, shelf title, project preview H1" />
                  <MappingRow label="Genre" value={project.genre} mapsTo="Browse card metadata and hero sublabel" />
                  <MappingRow label="Studio name" value={project.studio} mapsTo="Card metadata and studio trust section" />
                  <MappingRow label="Description" value={project.description} mapsTo="Home hero description and project about section" />
                </>
              ) : null}

              {activeTab === "media" ? (
                <>
                  <MappingRow label="Playable build label" value={project.build} mapsTo="Hero media badge, card media chip, project stats" />
                  <MappingRow label="Update label" value={project.update} mapsTo="Hero freshness badge, card footer pill, project sidebar stat" />
                  <MappingRow label="Followers / saves" value={project.followers} mapsTo="Card media overlay, hero stat, preview stat block" />
                </>
              ) : null}

              {activeTab === "funding" ? (
                <>
                  <MappingRow label="Funding percentage" value={`${project.progress}% funded`} mapsTo="Progress bars on cards, shelves, and preview" />
                  <MappingRow label="Funding amount" value={project.amount} mapsTo="Card amount text, hero stat, project funding panel" />
                  <MappingRow label="Use of funds" value={project.funds.map(([label, pct]) => `${label} ${pct}`).join(" · ")} mapsTo="Project preview allocation breakdown" />
                </>
              ) : null}

              {activeTab === "milestones" ? (
                <>
                  <MappingRow label="Milestone checklist" value={project.milestones.map(([label]) => label).join(" · ")} mapsTo="Project preview milestone board" />
                  <MappingRow label="Milestone completion state" value={`${project.milestones.filter(([, done]) => done).length} of ${project.milestones.length} complete`} mapsTo="Progress language and trust framing" />
                </>
              ) : null}

              {activeTab === "trust" ? (
                <>
                  <MappingRow label="Trust tags" value={project.trustTags.join(" · ")} mapsTo="Hero pills, browse badges, preview chip row" />
                  <MappingRow label="Studio trust notes" value={project.studioTrust.join(" · ")} mapsTo="Project preview studio trust section" />
                </>
              ) : null}

              {activeTab === "preview" ? (
                <>
                  <MappingRow label="Project page assembly" value="Hero, progress, milestones, fund allocation, trust section" mapsTo="Generated preview page composition" />
                  <MappingRow label="Cross-surface consistency" value="Same structured fields power home shelves, browse cards, and full project page" mapsTo="System-wide content reuse" />
                </>
              ) : null}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-zinc-900">Generated card preview</div>
                <p className="mt-1 text-sm text-zinc-500">This is how the current upload fields render in browse and shelf contexts.</p>
              </div>
              <button onClick={() => setCurrentPage("project-preview")} className="rounded-full border border-zinc-300 px-4 py-2 text-sm text-zinc-700">
                Open full preview
              </button>
            </div>
            <GameCard game={project} onOpen={() => setCurrentPage("project-preview")} />
          </div>

          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="mb-4 text-sm font-semibold text-zinc-900">Why this upload flow feels realistic</div>
            <div className="grid gap-3 sm:grid-cols-2">
              <FeatureBox title="Single source of truth" body="Developers enter structured data once and the product reuses it everywhere consistently." />
              <FeatureBox title="Clear field-to-UI mapping" body="Every field explains exactly where it appears so creators understand the value of filling it in." />
              <FeatureBox title="Trust by default" body="Milestones, demo labels, and budget data are built into the workflow rather than added as afterthoughts." />
              <FeatureBox title="Fast iteration" body="Switching projects immediately updates the preview, which makes the prototype easier to review with stakeholders." />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function PlayFirstSitePagesPrototype() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProject, setSelectedProject] = useState(featuredGames[0]);
  const [selectedCategory, setSelectedCategory] = useState("Trending");

  function openProjectPreview(project) {
    setSelectedProject(project);
    setCurrentPage("project-preview");
  }

  let page = null;

  if (currentPage === "home") {
    page = <HomePage setCurrentPage={setCurrentPage} setSelectedCategory={setSelectedCategory} openProjectPreview={openProjectPreview} />;
  } else if (currentPage === "explore") {
    page = <ExplorePage selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} openProjectPreview={openProjectPreview} />;
  } else if (currentPage === "project-preview") {
    page = <ProjectPreviewPage project={selectedProject} setCurrentPage={setCurrentPage} />;
  } else if (currentPage === "how-it-works") {
    page = <HowItWorksPage setCurrentPage={setCurrentPage} />;
  } else {
    page = (
      <DevelopersPage
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        setCurrentPage={setCurrentPage}
      />
    );
  }

  return (
    <Shell currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {page}
    </Shell>
  );
}
