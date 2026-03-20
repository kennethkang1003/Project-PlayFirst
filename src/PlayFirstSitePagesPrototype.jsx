import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Compass,
  Disc3,
  Film,
  Gamepad2,
  Github,
  Globe,
  Image as ImageIcon,
  Layers3,
  ListChecks,
  Lock,
  Mail,
  MonitorPlay,
  Search,
  ShieldCheck,
  Sparkles,
  Upload,
  User,
  WandSparkles,
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

const authShowcase = [
  {
    title: "Featured this week",
    tag: "Rising",
    project: "Echo Drift",
    body: "Playable slice, visible narrative roadmap, and 22.7k players following.",
  },
  {
    title: "Recently updated",
    tag: "Patch note",
    project: "Ashfall Ops",
    body: "New alpha clips, mission HUD refresh, and clearer extraction loop updates.",
  },
  {
    title: "Trending with players",
    tag: "Saved",
    project: "Mecha Orchard",
    body: "Steam Deck pass announced and community wishlist momentum climbing.",
  },
];

const roleCards = [
  {
    id: "player",
    title: "I'm here to discover projects",
    body: "Track demos early, follow updates, and find the next breakout game before launch.",
  },
  {
    id: "developer",
    title: "I'm a developer / studio",
    body: "Publish progress in public, build trust with players, and turn your project page into momentum.",
  },
];

const interestOptions = [
  "Action RPG",
  "Strategy",
  "Cozy Builder",
  "Narrative",
  "Co-op",
  "Survival",
  "Deckbuilder",
  "Roguelite",
];

const platformOptions = ["Windows", "Mac", "Steam Deck", "PlayStation", "Xbox", "Switch"];
const stageOptions = ["Concept", "Prototype", "Vertical slice", "Demo live", "Early access"];
const discoverabilityOptions = ["Atmospheric", "Cozy", "Tactical", "Multiplayer", "Choice-driven", "Hardcore"];
const audienceOptions = ["Solo players", "Co-op groups", "Streamer-friendly", "Controller-first", "Lore hunters"];

const initialUploadState = {
  title: "Signal Run",
  hook: "A tactical stealth extraction game where every reroute leaves a visible trace.",
  shortDescription:
    "Plan your route through semi-open districts, improvise around live security systems, and extract with proof that changes the next mission.",
  fullDescription:
    "Signal Run blends stealth, route planning, and public progression tracking. Players scout entry points, manipulate city infrastructure, and decide how much risk to absorb for better rewards. The PlayFirst page is meant to show early traction, playable systems, and a clear roadmap before launch.",
  studioName: "Low Orbit",
  buildStatus: "Vertical slice",
  visibility: "Public",
  genres: ["Action RPG", "Co-op"],
  platforms: ["Windows", "Steam Deck"],
  searchTags: ["stealth", "systems-driven", "extraction"],
  moodTags: ["Atmospheric", "Tactical"],
  audienceTags: ["Solo players", "Streamer-friendly"],
  keyFeatures: [
    "Reactive patrol routes and alarm systems",
    "Mission modifiers driven by extraction history",
    "Low-light stealth with readable UI feedback",
  ],
  website: "https://loworbit.example",
  steam: "https://store.steampowered.example/signal-run",
  discord: "https://discord.gg/signalrun",
  kickstarter: "",
  otherLink: "https://youtube.com/@loworbit",
  trailerUrl: "https://youtu.be/signal-run-preview",
  draftStatus: "Last autosave 2 min ago",
  heroAsset: "signal-run-hero.png",
  cardAsset: "signal-run-card.png",
  galleryAssets: ["district-night-shot.png", "alarm-route-map.png", "co-op-breach-frame.png"],
  hoverPreview: "signal-run-hover.gif",
};

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function routeForPage(page) {
  if (page === "home") return "/";
  if (page === "explore") return "/explore";
  if (page === "project-preview") return "/project";
  if (page === "how-it-works") return "/how-it-works";
  if (page === "login") return "/login";
  if (page === "signup") return "/signup";
  if (page === "upload") return "/upload";
  return "/";
}

function pageForPath(pathname) {
  if (pathname === "/explore") return "explore";
  if (pathname === "/project") return "project-preview";
  if (pathname === "/how-it-works") return "how-it-works";
  if (pathname === "/login") return "login";
  if (pathname === "/signup") return "signup";
  if (pathname === "/upload") return "upload";
  return "home";
}

function PlayFirstMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200 shadow-[0_0_24px_rgba(56,189,248,0.18)] backdrop-blur">
        <Gamepad2 className="h-5 w-5" />
      </div>
      <div>
        <div className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">PlayFirst</div>
        <div className="text-xs text-zinc-400">discover early. publish in public.</div>
      </div>
    </div>
  );
}

function AppShell({ currentPage, setCurrentPage, children }) {
  const darkExperience = ["login", "signup", "upload"].includes(currentPage);

  return (
    <div
      className={cn(
        "min-h-screen",
        darkExperience
          ? "bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_24%),radial-gradient(circle_at_80%_0%,_rgba(249,115,22,0.10),_transparent_22%),linear-gradient(to_bottom,_#050816,_#0a1020_44%,_#0b1220)] text-zinc-100"
          : "bg-stone-50 text-zinc-900"
      )}
    >
      <header
        className={cn(
          "sticky top-0 z-50 border-b backdrop-blur",
          darkExperience ? "border-white/10 bg-[#07101d]/70" : "border-zinc-200 bg-white/90"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-6">
          <button onClick={() => setCurrentPage("home")} className="text-left">
            <PlayFirstMark />
          </button>

          <nav
            className={cn(
              "hidden items-center gap-5 text-sm lg:flex",
              darkExperience ? "text-zinc-300" : "text-zinc-600"
            )}
          >
            <NavButton currentPage={currentPage} id="home" label="Home" setCurrentPage={setCurrentPage} dark={darkExperience} />
            <NavButton currentPage={currentPage} id="explore" label="Explore" setCurrentPage={setCurrentPage} dark={darkExperience} />
            <NavButton currentPage={currentPage} id="how-it-works" label="How It Works" setCurrentPage={setCurrentPage} dark={darkExperience} />
            <NavButton currentPage={currentPage} id="upload" label="Upload" setCurrentPage={setCurrentPage} dark={darkExperience} />
          </nav>

          <div className="hidden flex-1 justify-center xl:flex">
            <div
              className={cn(
                "flex w-full max-w-xl items-center gap-3 rounded-full border px-4 py-2 text-sm",
                darkExperience
                  ? "border-white/10 bg-white/5 text-zinc-400"
                  : "border-zinc-300 bg-zinc-100 text-zinc-500"
              )}
            >
              <Search className="h-4 w-4" />
              <span>Search demos, studios, genres, milestones...</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <GhostButton onClick={() => setCurrentPage("login")} dark={darkExperience}>
              Log In
            </GhostButton>
            <GhostButton onClick={() => setCurrentPage("signup")} dark={darkExperience}>
              Sign Up
            </GhostButton>
            <PrimaryButton onClick={() => setCurrentPage("upload")} dark>
              <Upload className="h-4 w-4" />
              Upload
            </PrimaryButton>
          </div>
        </div>
      </header>

      {children}

      <footer
        className={cn(
          "border-t",
          darkExperience ? "border-white/10 bg-[#070d18]/80" : "border-zinc-200 bg-white"
        )}
      >
        <div
          className={cn(
            "mx-auto grid max-w-7xl gap-8 px-6 py-10 text-sm md:grid-cols-4",
            darkExperience ? "text-zinc-400" : "text-zinc-500"
          )}
        >
          <div>
            <div className={cn("text-base font-semibold", darkExperience ? "text-white" : "text-zinc-900")}>
              PlayFirst
            </div>
            <p className="mt-2 leading-6">
              A discovery-first platform for following upcoming games, publishing milestones, and building trust in public.
            </p>
          </div>
          <FooterGroup dark={darkExperience} title="Discover" items={["Trending now", "Playable demos", "Recently updated"]} />
          <FooterGroup dark={darkExperience} title="Creators" items={["Upload project", "Live preview", "Profile presence"]} />
          <FooterGroup dark={darkExperience} title="Platform" items={["How it works", "Terms", "Privacy"]} />
        </div>
      </footer>
    </div>
  );
}

function NavButton({ currentPage, id, label, setCurrentPage, dark }) {
  return (
    <button
      onClick={() => setCurrentPage(id)}
      className={cn(
        "transition hover:opacity-100",
        currentPage === id
          ? dark
            ? "font-medium text-white"
            : "font-medium text-zinc-900"
          : dark
            ? "opacity-80 hover:text-white"
            : "hover:text-zinc-900"
      )}
    >
      {label}
    </button>
  );
}

function FooterGroup({ title, items, dark }) {
  return (
    <div>
      <div className={cn("font-medium", dark ? "text-white" : "text-zinc-900")}>{title}</div>
      <div className="mt-3 space-y-2">
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
}

function PrimaryButton({ children, className, dark = false, disabled = false, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2",
        dark
          ? "bg-cyan-300 text-slate-950 hover:bg-cyan-200 focus:ring-offset-slate-950"
          : "bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-offset-white",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

function GhostButton({ children, dark = false, className, ...props }) {
  return (
    <button
      className={cn(
        "rounded-full border px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2",
        dark
          ? "border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10 focus:ring-offset-slate-950"
          : "border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-50 focus:ring-offset-white",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

function SurfaceCard({ children, className, dark = false }) {
  return (
    <div
      className={cn(
        "rounded-[28px] border shadow-[0_20px_60px_rgba(2,6,23,0.18)]",
        dark
          ? "border-white/10 bg-white/[0.06] backdrop-blur-xl"
          : "border-zinc-200 bg-white shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

function SectionHeader({ eyebrow, title, body, action, onAction, dark = false }) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        {eyebrow ? (
          <div className={cn("mb-2 text-xs font-medium uppercase tracking-[0.18em]", dark ? "text-cyan-200/70" : "text-zinc-500")}>
            {eyebrow}
          </div>
        ) : null}
        <h2 className={cn("text-2xl font-semibold tracking-tight", dark ? "text-white" : "text-zinc-900")}>{title}</h2>
        {body ? <p className={cn("mt-1 text-sm", dark ? "text-zinc-400" : "text-zinc-500")}>{body}</p> : null}
      </div>
      {action ? (
        <button onClick={onAction} className={cn("text-sm", dark ? "text-zinc-300" : "text-zinc-600")}>
          {action}
        </button>
      ) : null}
    </div>
  );
}

function DiscoveryCard({ item }) {
  return (
    <SurfaceCard dark className="p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-cyan-200">
          {item.tag}
        </span>
        <span className="text-xs text-zinc-500">{item.title}</span>
      </div>
      <div className="text-base font-semibold text-white">{item.project}</div>
      <p className="mt-2 text-sm leading-6 text-zinc-400">{item.body}</p>
    </SurfaceCard>
  );
}

function SocialButton({ icon, children }) {
  const Icon = icon;
  return (
    <button className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300">
      <Icon className="h-4 w-4" />
      {children}
    </button>
  );
}

function FieldShell({ label, helper, error, children, dark = false }) {
  return (
    <label className="block">
      <div className={cn("mb-2 text-sm font-medium", dark ? "text-zinc-200" : "text-zinc-800")}>{label}</div>
      {children}
      <div className="mt-2 min-h-[20px] text-xs">
        {error ? (
          <span className="inline-flex items-center gap-1 text-rose-300">
            <CircleAlert className="h-3.5 w-3.5" />
            {error}
          </span>
        ) : helper ? (
          <span className={dark ? "text-zinc-500" : "text-zinc-500"}>{helper}</span>
        ) : null}
      </div>
    </label>
  );
}

function TextInput({ icon: Icon, dark = false, className, ...props }) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-2xl border px-4 py-3 transition focus-within:ring-2 focus-within:ring-cyan-300",
        dark ? "border-white/10 bg-white/5" : "border-zinc-300 bg-white",
        className
      )}
    >
      {Icon ? <Icon className={cn("h-4 w-4", dark ? "text-zinc-500" : "text-zinc-400")} /> : null}
      <input
        className={cn(
          "w-full bg-transparent text-sm outline-none placeholder:text-zinc-500",
          dark ? "text-white" : "text-zinc-900"
        )}
        {...props}
      />
    </div>
  );
}

function TextAreaInput({ dark = false, className, ...props }) {
  return (
    <textarea
      className={cn(
        "min-h-[120px] w-full rounded-2xl border px-4 py-3 text-sm outline-none transition placeholder:text-zinc-500 focus:ring-2 focus:ring-cyan-300",
        dark ? "border-white/10 bg-white/5 text-white" : "border-zinc-300 bg-white text-zinc-900",
        className
      )}
      {...props}
    />
  );
}

function CheckboxField({ checked, onChange, label, dark = false }) {
  return (
    <label className={cn("flex items-center gap-3 text-sm", dark ? "text-zinc-300" : "text-zinc-600")}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="h-4 w-4 rounded border-white/10 bg-transparent text-cyan-300 focus:ring-cyan-300"
      />
      {label}
    </label>
  );
}

function RoleOption({ item, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-[24px] border p-4 text-left transition focus:outline-none focus:ring-2 focus:ring-cyan-300",
        selected ? "border-cyan-300/40 bg-cyan-300/10" : "border-white/10 bg-white/5 hover:bg-white/10"
      )}
    >
      <div className="text-sm font-semibold text-white">{item.title}</div>
      <p className="mt-2 text-sm leading-6 text-zinc-400">{item.body}</p>
    </button>
  );
}

function SelectableChip({ label, active, onClick, dark = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-cyan-300",
        active
          ? dark
            ? "border-cyan-300/40 bg-cyan-300/15 text-cyan-100"
            : "border-zinc-900 bg-zinc-900 text-white"
          : dark
            ? "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
            : "border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-50"
      )}
    >
      {label}
    </button>
  );
}

function MiniMeta({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">{label}</div>
      <div className="mt-1 text-sm font-medium text-white">{value}</div>
    </div>
  );
}

function GameCard({ game, onOpen }) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative h-48 overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(17,24,39,0.12),_rgba(17,24,39,0.78)),radial-gradient(circle_at_20%_20%,_rgba(56,189,248,0.28),_transparent_26%),radial-gradient(circle_at_80%_24%,_rgba(249,115,22,0.32),_transparent_26%),linear-gradient(to_bottom_right,_#1f2937,_#020617)]" />
        <div className="absolute left-4 top-4 rounded-full bg-black/35 px-2.5 py-1 text-[11px] text-white backdrop-blur">{game.build}</div>
        <div className="absolute bottom-4 left-4 rounded-full bg-white/12 px-2.5 py-1 text-[11px] text-white backdrop-blur">{game.update}</div>
        <div className="absolute bottom-4 right-4 rounded-full bg-black/35 px-2.5 py-1 text-[11px] text-white backdrop-blur">{game.followers}</div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-lg font-semibold text-zinc-900">{game.title}</div>
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
            <span key={badge} className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-600">
              {badge}
            </span>
          ))}
        </div>
        <button
          onClick={onOpen}
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm text-zinc-700 transition hover:bg-zinc-50"
        >
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
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">{title}</h2>
          <p className="mt-1 text-sm text-zinc-500">{subtitle}</p>
        </div>
        <button onClick={() => setCurrentPage("explore")} className="text-sm text-zinc-500">
          See all
        </button>
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
              <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(24,24,27,0.18),_rgba(24,24,27,0.72)),radial-gradient(circle_at_18%_20%,_rgba(56,189,248,0.28),_transparent_24%),radial-gradient(circle_at_78%_30%,_rgba(249,115,22,0.30),_transparent_20%),linear-gradient(to_bottom_right,_#1f2937,_#020617)] transition duration-300 group-hover:scale-[1.04]" />
              <div className="absolute left-4 top-4 rounded-full bg-black/35 px-2.5 py-1 text-[11px] text-white backdrop-blur">{game.build}</div>
              <div className="absolute bottom-4 left-4 rounded-full bg-white/12 px-2.5 py-1 text-[11px] text-white backdrop-blur">{game.update}</div>
              <div className="absolute bottom-4 right-4 rounded-full bg-black/35 px-2.5 py-1 text-[11px] text-white backdrop-blur">{game.followers}</div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-lg font-semibold text-zinc-900">{game.title}</div>
                  <div className="mt-1 text-sm text-zinc-500">{game.genre} · {game.studio}</div>
                </div>
                <div className="rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] text-zinc-600">{game.status}</div>
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{game.description}</p>
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
      <section className="border-b border-zinc-200 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.14),_transparent_24%),radial-gradient(circle_at_80%_0%,_rgba(249,115,22,0.14),_transparent_28%),linear-gradient(to_bottom,_#ffffff,_#fafaf9)]">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:py-10">
          <div className="grid gap-6 lg:grid-cols-[1.5fr,0.72fr]">
            <button
              onClick={() => openProjectPreview(featuredHero)}
              className="group relative overflow-hidden rounded-[32px] border border-zinc-200 bg-zinc-900 text-left shadow-sm"
            >
              <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(15,23,42,0.26),_rgba(15,23,42,0.78)),radial-gradient(circle_at_18%_20%,_rgba(249,115,22,0.5),_transparent_24%),radial-gradient(circle_at_78%_28%,_rgba(56,189,248,0.32),_transparent_24%),linear-gradient(to_bottom_right,_#1f2937,_#020617)] transition duration-300 group-hover:scale-[1.02]" />
              <div className="relative flex min-h-[420px] flex-col justify-between p-7 md:p-9">
                <div className="flex flex-wrap gap-2 text-xs text-white/90">
                  {featuredHero.trustTags.map((chip) => (
                    <span key={chip} className="rounded-full bg-white/12 px-3 py-1 backdrop-blur">
                      {chip}
                    </span>
                  ))}
                </div>
                <div className="max-w-2xl">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-black/25 px-3 py-1 text-xs text-white/80 backdrop-blur">
                    <Sparkles className="h-3.5 w-3.5" />
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
                  <MiniMeta label="Funding" value={featuredHero.amount} />
                  <MiniMeta label="Progress" value={`${featuredHero.progress}% funded`} />
                  <MiniMeta label="Followers" value={featuredHero.followers} />
                  <MiniMeta label="Status" value={featuredHero.status} />
                </div>
              </div>
            </button>

            <div className="grid gap-4">
              <SurfaceCard className="p-5">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold tracking-tight text-zinc-900">Quick filters</h2>
                  <button onClick={() => setCurrentPage("explore")} className="text-sm text-zinc-500">
                    See all
                  </button>
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
              </SurfaceCard>

              <SurfaceCard className="p-5">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold tracking-tight text-zinc-900">Player to creator</h2>
                  <button onClick={() => setCurrentPage("signup")} className="text-sm text-zinc-500">
                    Join
                  </button>
                </div>
                <div className="space-y-3">
                  {[
                    ["1", "Save your next obsession", "Track demos and project updates in one place."],
                    ["2", "Build your profile", "Join as a player or studio and shape your public presence."],
                    ["3", "Publish early", "Upload a project page and preview how discovery sees it."],
                  ].map(([step, title, body]) => (
                    <div key={step} className="rounded-2xl bg-zinc-50 p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-zinc-900 text-sm text-white">{step}</div>
                        <div>
                          <div className="text-sm font-medium text-zinc-900">{title}</div>
                          <p className="mt-1 text-sm leading-6 text-zinc-500">{body}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SurfaceCard>
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
      return featuredGames.filter((g) => ["Updated Mar 16", "New this week", "Recently updated"].includes(g.update));
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
          <SurfaceCard className="p-5">
            <div className="text-sm font-semibold text-zinc-900">Browse filters</div>
            <div className="mt-4 space-y-2">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setSelectedCategory(item)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left text-sm",
                    selectedCategory === item ? "bg-zinc-900 text-white" : "bg-zinc-50 text-zinc-700"
                  )}
                >
                  <span>{item}</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              ))}
            </div>
          </SurfaceCard>

          <SurfaceCard className="p-5">
            <div className="text-sm font-semibold text-zinc-900">Trust signals</div>
            <div className="mt-4 space-y-3 text-sm text-zinc-600">
              <p>Verified studios</p>
              <p>Playable demo availability</p>
              <p>Milestone cadence</p>
              <p>Transparent use of funds</p>
            </div>
          </SurfaceCard>
        </aside>

        <section>
          <SectionHeader
            eyebrow="Explore"
            title="Discover projects with more context"
            body="Filter by demo availability, funding momentum, or recent developer activity."
          />
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

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-zinc-200 p-4">
      <div className="text-xs uppercase tracking-wide text-zinc-500">{label}</div>
      <div className="mt-2 text-xl font-semibold text-zinc-900">{value}</div>
    </div>
  );
}

function FeatureBox({ title, body }) {
  return (
    <div className="rounded-[24px] border border-zinc-200 bg-zinc-50 p-5">
      <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-600">{body}</p>
    </div>
  );
}

function ProjectPreviewPage({ project, setCurrentPage }) {
  const activeProject = project || featuredGames[0];

  return (
    <main>
      <section className="border-b border-zinc-200 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.10),_transparent_30%),radial-gradient(circle_at_80%_0%,_rgba(249,115,22,0.12),_transparent_24%),linear-gradient(to_bottom,_#ffffff,_#fafaf9)]">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <div className="text-sm font-medium text-zinc-500">Generated from live project fields</div>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">{activeProject.title}</h1>
            </div>
            <GhostButton onClick={() => setCurrentPage("upload")}>Back to upload</GhostButton>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <div>
              <div className="mb-4 flex flex-wrap gap-2 text-xs text-zinc-600">
                {[activeProject.status, ...activeProject.trustTags].map((chip) => (
                  <span key={chip} className="rounded-full bg-white px-3 py-1 shadow-sm ring-1 ring-zinc-200">
                    {chip}
                  </span>
                ))}
              </div>
              <p className="max-w-2xl text-base leading-7 text-zinc-600 md:text-lg">
                {activeProject.description} This view mirrors how your project page reads once it moves from discovery into a deeper showcase.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <PrimaryButton>Follow project</PrimaryButton>
                <GhostButton>Watch trailer</GhostButton>
              </div>
            </div>

            <SurfaceCard className="p-5">
              <div className="text-sm font-medium text-zinc-500">Funding progress</div>
              <div className="mt-2 text-3xl font-semibold text-zinc-900">{activeProject.progress}% funded</div>
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
            </SurfaceCard>
          </div>

          <div className="mt-8 overflow-hidden rounded-[28px] border border-zinc-200 bg-zinc-900 shadow-sm">
            <div className="relative h-[360px] bg-[linear-gradient(140deg,_rgba(15,23,42,0.72),_rgba(15,23,42,0.20)),radial-gradient(circle_at_20%_20%,_rgba(56,189,248,0.36),_transparent_26%),radial-gradient(circle_at_78%_30%,_rgba(249,115,22,0.35),_transparent_22%),linear-gradient(to_bottom_right,_#1f2937,_#020617)]">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur">
                  <Film className="ml-1 h-7 w-7" />
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
            <SurfaceCard className="p-6">
              <SectionHeader title="About the project" body="Generated from your upload basics, links, and summary blocks." />
              <div className="grid gap-4 md:grid-cols-2">
                <FeatureBox title="Playable build" body={`Pulled from the build label: ${activeProject.build}.`} />
                <FeatureBox title="Roadmap visibility" body="Created from milestone inputs and visible creator update cadence." />
                <FeatureBox title="Budget transparency" body="Rendered from the use-of-funds percentages filled out by the studio." />
                <FeatureBox title="Regular updates" body={`Freshness is signaled through the latest update label: ${activeProject.update}.`} />
              </div>
            </SurfaceCard>

            <SurfaceCard className="p-6">
              <SectionHeader title="Milestones" body="These checklist items come directly from the project publishing flow." />
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
            </SurfaceCard>
          </div>

          <div className="space-y-8">
            <SurfaceCard className="p-6">
              <SectionHeader title="Use of funds" body="Built from the creator publishing details, not hand-authored page copy." />
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
            </SurfaceCard>

            <SurfaceCard className="p-6">
              <SectionHeader title="Studio trust section" body="Generated from studio history, updates, and external links." />
              <div className="space-y-3 text-sm text-zinc-600">
                {activeProject.studioTrust.map((item) => (
                  <div key={item} className="rounded-2xl bg-zinc-50 px-4 py-3">
                    {item}
                  </div>
                ))}
                <GhostButton onClick={() => setCurrentPage("upload")}>Edit upload inputs</GhostButton>
              </div>
            </SurfaceCard>
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
          <div className="mb-3 inline-flex rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            A clearer process for players and developers
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">How PlayFirst works</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 md:text-lg">
            Players discover games with more trust signals. Developers earn support by publishing milestones, demos, funding plans, and consistent updates.
          </p>
        </div>

        <SurfaceCard className="p-6">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Games discovered monthly", "480k"],
              ["Projects with demo", "326"],
              ["Avg. update frequency", "8.2 days"],
              ["Verified studios", "214"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                <div className="text-sm text-zinc-500">{label}</div>
                <div className="mt-2 text-2xl font-semibold text-zinc-900">{value}</div>
              </div>
            ))}
          </div>
        </SurfaceCard>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          ["1. Discover", "Players browse projects using trust-driven filters like demo availability, milestone cadence, and recent updates."],
          ["2. Evaluate", "Each project page gives a playable build, roadmap clarity, and funding context before players commit support."],
          ["3. Support", "Players back projects with a better understanding of what is already playable and what the next milestone unlocks."],
          ["4. Publish in public", "Studios upload milestones, screenshots, and creator-facing previews to maintain trust before and after launch."],
        ].map(([title, body], idx) => (
          <SurfaceCard key={title} className="p-5">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-stone-100 text-zinc-700">0{idx + 1}</div>
            <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600">{body}</p>
          </SurfaceCard>
        ))}
      </section>

      <SurfaceCard className="mt-10 grid gap-6 p-8 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">For players</h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
            <p>Playable demo links reduce guesswork.</p>
            <p>Milestone tracking makes progress easier to understand.</p>
            <p>Funding plans help players see where support is intended to go.</p>
            <p>Update history shows whether the team is consistently communicating.</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">For developers</h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
            <p>Pages are structured to communicate credibility without needing a giant community team.</p>
            <p>Milestones and updates help convert attention into trust.</p>
            <p>Demo-first discovery can improve the quality of supporters and feedback.</p>
            <p>Studio profiles turn one project into long-term audience equity.</p>
          </div>
          <PrimaryButton className="mt-6" onClick={() => setCurrentPage("upload")}>
            See upload flow
          </PrimaryButton>
        </div>
      </SurfaceCard>
    </main>
  );
}

function LoginPage({ setCurrentPage }) {
  const [email, setEmail] = useState("sam@northcircuit.dev");
  const [password, setPassword] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const emailError = submitted && !email.includes("@") ? "Use the email tied to your PlayFirst account." : "";
  const passwordError = submitted && password.length < 8 ? "Password must be at least 8 characters." : "";
  const isValid = email.includes("@") && password.length >= 8;

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    if (!isValid) return;
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setCurrentPage("upload");
    }, 700);
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-8 md:py-12">
      <div className="grid gap-8 lg:grid-cols-[1.08fr,0.92fr]">
        <SurfaceCard dark className="relative overflow-hidden p-7 md:p-9">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,_rgba(56,189,248,0.18),_transparent_24%),radial-gradient(circle_at_84%_12%,_rgba(249,115,22,0.18),_transparent_22%)]" />
          <div className="relative">
            <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-200">
              Return to your feed
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-5xl">Log back in to keep building.</h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400">
              Re-enter your saved discoveries, creator uploads, milestone check-ins, and profile tools without losing the momentum you already built.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {authShowcase.map((item) => (
                <DiscoveryCard key={item.project} item={item} />
              ))}
            </div>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              <MiniMeta label="Saved projects" value="34 active follows" />
              <MiniMeta label="Creator tools" value="7 draft surfaces" />
              <MiniMeta label="Last sign-in" value="2 days ago" />
            </div>
          </div>
        </SurfaceCard>

        <SurfaceCard dark className="p-7 md:p-8">
          <div className="max-w-md">
            <div className="text-sm uppercase tracking-[0.18em] text-zinc-500">Welcome back</div>
            <h2 className="mt-3 text-3xl font-semibold text-white">Sign in to PlayFirst</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">Pick up where you left off across discovery, saved projects, and creator publishing.</p>

            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <FieldShell label="Email" helper="Use the same email you used for projects, saves, or creator tools." error={emailError} dark>
                <TextInput icon={Mail} dark value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@studio.com" />
              </FieldShell>
              <FieldShell label="Password" helper="At least 8 characters." error={passwordError} dark>
                <TextInput icon={Lock} dark type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your password" />
              </FieldShell>

              <div className="flex items-center justify-between gap-4">
                <CheckboxField checked={keepSignedIn} onChange={setKeepSignedIn} label="Keep me signed in" dark />
                <button type="button" className="text-sm text-cyan-200 transition hover:text-cyan-100">
                  Forgot password?
                </button>
              </div>

              <PrimaryButton type="submit" dark disabled={!isValid || loading} className="w-full">
                {loading ? "Logging in..." : "Log In"}
              </PrimaryButton>
            </form>

            <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-zinc-500">
              <div className="h-px flex-1 bg-white/10" />
              continue with
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid gap-3">
              <SocialButton icon={Globe}>Continue with Google</SocialButton>
              <SocialButton icon={Disc3}>Continue with Discord</SocialButton>
              <SocialButton icon={Github}>Continue with GitHub</SocialButton>
            </div>

            <div className="mt-8 text-sm text-zinc-400">
              New to PlayFirst?{" "}
              <button className="text-cyan-200 transition hover:text-cyan-100" onClick={() => setCurrentPage("signup")}>
                Sign up
              </button>
            </div>
          </div>
        </SurfaceCard>
      </div>
    </main>
  );
}

function SignUpPage({ setCurrentPage }) {
  const [role, setRole] = useState("developer");
  const [form, setForm] = useState({
    name: "Low Orbit",
    username: "loworbit",
    email: "",
    password: "",
    interests: ["Narrative", "Co-op"],
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const errors = {
    name: submitted && form.name.trim().length < 2 ? "Add the name you want visible across profile and project pages." : "",
    username: submitted && form.username.trim().length < 3 ? "Username should be at least 3 characters." : "",
    email: submitted && !form.email.includes("@") ? "Enter a valid email address." : "",
    password: submitted && form.password.length < 8 ? "Use at least 8 characters." : "",
  };

  const isValid =
    form.name.trim().length >= 2 &&
    form.username.trim().length >= 3 &&
    form.email.includes("@") &&
    form.password.length >= 8;

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function toggleInterest(option) {
    setForm((current) => ({
      ...current,
      interests: current.interests.includes(option)
        ? current.interests.filter((item) => item !== option)
        : [...current.interests, option],
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    if (!isValid) return;
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setCurrentPage(role === "developer" ? "upload" : "explore");
    }, 700);
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-8 md:py-12">
      <div className="grid gap-8 lg:grid-cols-[1.03fr,0.97fr]">
        <SurfaceCard dark className="p-7 md:p-9">
          <div className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-emerald-200">
            Join before everyone else does
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-5xl">Join PlayFirst.</h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400">
            Discover breakout projects early, or publish your own and build trust in public from the first playable milestone onward.
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {roleCards.map((item) => (
              <RoleOption key={item.id} item={item} selected={role === item.id} onClick={() => setRole(item.id)} />
            ))}
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {[
              "Upload your first project",
              "Build a public dev presence",
              "Get discovered earlier",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-zinc-300">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
            <div className="text-sm font-semibold text-white">What happens next</div>
            <div className="mt-3 space-y-3 text-sm text-zinc-400">
              <div className="flex items-center gap-3">
                <Compass className="h-4 w-4 text-cyan-200" />
                Browse trending projects and save the ones you want to follow.
              </div>
              <div className="flex items-center gap-3">
                <User className="h-4 w-4 text-cyan-200" />
                Customize your profile and visible interests.
              </div>
              <div className="flex items-center gap-3">
                <Upload className="h-4 w-4 text-cyan-200" />
                If you're a studio, move straight into the publishing flow with live preview.
              </div>
            </div>
          </div>
        </SurfaceCard>

        <SurfaceCard dark className="p-7 md:p-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <div className="text-sm uppercase tracking-[0.18em] text-zinc-500">Create your account</div>
              <h2 className="mt-3 text-3xl font-semibold text-white">Start your PlayFirst profile</h2>
            </div>

            <FieldShell
              label={role === "developer" ? "Studio name" : "Name"}
              helper="This appears on your profile and public surfaces."
              error={errors.name}
              dark
            >
              <TextInput icon={User} dark value={form.name} onChange={(event) => updateField("name", event.target.value)} placeholder="Your display name" />
            </FieldShell>

            <FieldShell label="Username" helper="Used for your profile URL and mentions." error={errors.username} dark>
              <TextInput dark value={form.username} onChange={(event) => updateField("username", event.target.value)} placeholder="playfirst_handle" />
            </FieldShell>

            <FieldShell label="Email" helper="We'll use this for sign-in and important updates." error={errors.email} dark>
              <TextInput icon={Mail} dark value={form.email} onChange={(event) => updateField("email", event.target.value)} placeholder="name@example.com" />
            </FieldShell>

            <FieldShell label="Password" helper="Use 8+ characters. Mix words, numbers, or a phrase you can remember." error={errors.password} dark>
              <TextInput icon={Lock} dark type="password" value={form.password} onChange={(event) => updateField("password", event.target.value)} placeholder="Create a password" />
            </FieldShell>

            <FieldShell label="Genre interests" helper="These help shape recommendations and onboarding." dark>
              <div className="flex flex-wrap gap-2">
                {interestOptions.map((option) => (
                  <SelectableChip key={option} label={option} active={form.interests.includes(option)} onClick={() => toggleInterest(option)} dark />
                ))}
              </div>
            </FieldShell>

            <PrimaryButton type="submit" dark disabled={!isValid || loading} className="w-full">
              {loading ? "Creating account..." : "Create account"}
            </PrimaryButton>
          </form>

          <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-zinc-500">
            <div className="h-px flex-1 bg-white/10" />
            or continue with
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid gap-3">
            <SocialButton icon={Globe}>Google</SocialButton>
            <SocialButton icon={Disc3}>Discord</SocialButton>
            <SocialButton icon={Github}>GitHub</SocialButton>
          </div>

          <div className="mt-8 text-sm text-zinc-400">
            Already have an account?{" "}
            <button className="text-cyan-200 transition hover:text-cyan-100" onClick={() => setCurrentPage("login")}>
              Log in
            </button>
          </div>
        </SurfaceCard>
      </div>
    </main>
  );
}

function UploadSection({ title, eyebrow, body, children }) {
  return (
    <SurfaceCard dark className="p-5 md:p-6">
      <SectionHeader eyebrow={eyebrow} title={title} body={body} dark />
      <div className="space-y-5">{children}</div>
    </SurfaceCard>
  );
}

function FieldHint({ children }) {
  return <div className="text-xs text-zinc-500">{children}</div>;
}

function MediaDropZone({ label, helper, value, onSelect, accept = "image/*", icon: Icon = ImageIcon }) {
  const inputRef = useRef(null);

  return (
    <div>
      <div className="mb-2 text-sm font-medium text-zinc-200">{label}</div>
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="group flex min-h-[138px] w-full flex-col items-center justify-center rounded-[24px] border border-dashed border-white/15 bg-white/[0.03] px-4 py-5 text-center transition hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-cyan-300"
      >
        <Icon className="h-6 w-6 text-cyan-200" />
        <div className="mt-3 text-sm font-medium text-white">{value || "Drag and drop or browse files"}</div>
        <div className="mt-1 text-xs text-zinc-500">{helper}</div>
      </button>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) onSelect(file.name);
        }}
      />
    </div>
  );
}

function PreviewTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex flex-wrap gap-2">
      {[
        ["home-card", "Home Card"],
        ["project-page", "Project Page"],
        ["developer-profile", "Developer Profile"],
      ].map(([id, label]) => (
        <SelectableChip key={id} label={label} active={activeTab === id} onClick={() => setActiveTab(id)} dark />
      ))}
    </div>
  );
}

function UploadProjectPage({ setCurrentPage, setSelectedProject, previewProject }) {
  const [form, setForm] = useState(initialUploadState);
  const [previewTab, setPreviewTab] = useState("home-card");
  const [publishIntent, setPublishIntent] = useState("");

  const previewData = useMemo(() => buildPreviewProject(form), [form]);
  const validation = useMemo(() => getUploadValidation(form), [form]);
  const canPublish = validation.length === 0;

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function toggleListItem(field, value) {
    setForm((current) => ({
      ...current,
      [field]: current[field].includes(value) ? current[field].filter((item) => item !== value) : [...current[field], value],
    }));
  }

  function updateFeature(index, value) {
    setForm((current) => ({
      ...current,
      keyFeatures: current.keyFeatures.map((item, currentIndex) => (currentIndex === index ? value : item)),
    }));
  }

  function handleDraft() {
    setPublishIntent("draft");
    setForm((current) => ({
      ...current,
      draftStatus: "Draft saved just now",
    }));
  }

  function handlePreview() {
    setPublishIntent("preview");
    setSelectedProject(previewData);
    setCurrentPage("project-preview");
  }

  function handlePublish() {
    setPublishIntent("publish");
    if (!canPublish) return;
    setSelectedProject({
      ...previewData,
      status: form.visibility === "Public" ? "Publish ready" : form.visibility,
      update: "Just published",
    });
    setCurrentPage("project-preview");
  }

  return (
    <main className="mx-auto max-w-7xl px-5 py-6 md:px-6 md:py-8">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-200">
            Creator publishing experience
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">Upload project</h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400 md:text-base">
            Publish a page that reads like a discovery surface, not an admin form. Update your story, media, and tags while watching every preview surface respond in real time.
          </p>
        </div>

        <SurfaceCard dark className="px-4 py-3">
          <div className="flex items-center gap-3 text-sm text-zinc-300">
            <CheckCircle2 className="h-4 w-4 text-emerald-300" />
            {form.draftStatus}
          </div>
        </SurfaceCard>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.12fr)_420px] xl:grid-cols-[minmax(0,1.12fr)_460px]">
        <div className="space-y-6">
          <UploadSection eyebrow="A. Basics" title="Shape the first impression" body="These fields power feed cards, search results, and your project header.">
            <div className="grid gap-5 md:grid-cols-2">
              <FieldShell label="Project title" helper="Appears on project page, feed cards, and search." error={!form.title.trim() ? "Project title is required." : ""} dark>
                <TextInput dark value={form.title} onChange={(event) => updateField("title", event.target.value)} placeholder="Project title" />
              </FieldShell>

              <FieldShell label="Build status / stage" helper="Signals how playable the project is today." dark>
                <div className="flex flex-wrap gap-2">
                  {stageOptions.map((option) => (
                    <SelectableChip key={option} label={option} active={form.buildStatus === option} onClick={() => updateField("buildStatus", option)} dark />
                  ))}
                </div>
              </FieldShell>
            </div>

            <FieldShell
              label="One-line hook"
              helper={`Appears on cards and previews. ${form.hook.length}/90 characters.`}
              error={form.hook.length > 90 ? "Keep the hook under 90 characters for feed layouts." : ""}
              dark
            >
              <TextInput dark value={form.hook} onChange={(event) => updateField("hook", event.target.value)} placeholder="One line that explains why players should care." />
            </FieldShell>

            <FieldShell label="Short description" helper="Used in the project page intro and richer discovery modules." dark>
              <TextAreaInput dark className="min-h-[110px]" value={form.shortDescription} onChange={(event) => updateField("shortDescription", event.target.value)} />
            </FieldShell>

            <FieldShell label="Genre tags" helper="At least one genre helps discovery and recommendation quality." error={form.genres.length === 0 ? "Select at least one genre." : ""} dark>
              <div className="flex flex-wrap gap-2">
                {interestOptions.map((option) => (
                  <SelectableChip key={option} label={option} active={form.genres.includes(option)} onClick={() => toggleListItem("genres", option)} dark />
                ))}
              </div>
            </FieldShell>

            <FieldShell label="Platform tags" helper="Used in filters and compatibility rails." dark>
              <div className="flex flex-wrap gap-2">
                {platformOptions.map((option) => (
                  <SelectableChip key={option} label={option} active={form.platforms.includes(option)} onClick={() => toggleListItem("platforms", option)} dark />
                ))}
              </div>
            </FieldShell>
          </UploadSection>

          <UploadSection eyebrow="B. Cover & Media" title="Build the discovery surface" body="These assets define how your project reads in feeds, shelves, and the top of the project page.">
            <div className="grid gap-5 md:grid-cols-2">
              <MediaDropZone
                label="Hero thumbnail upload"
                helper="Main image shown on discovery feeds and project hero."
                value={form.heroAsset}
                onSelect={(value) => updateField("heroAsset", value)}
              />
              <MediaDropZone
                label="Card thumbnail / crop-safe area"
                helper="Optimized for shelves, profile grids, and compact cards."
                value={form.cardAsset}
                onSelect={(value) => updateField("cardAsset", value)}
              />
            </div>

            <MediaDropZone
              label="Gallery image uploads"
              helper="Add screenshots that explain systems, environment, or visual tone."
              value={form.galleryAssets.join(", ")}
              onSelect={(value) => updateField("galleryAssets", [...form.galleryAssets, value])}
            />

            <div className="grid gap-5 md:grid-cols-2">
              <FieldShell label="Trailer or demo video URL" helper="Shown at the top of the project page." dark>
                <TextInput icon={Film} dark value={form.trailerUrl} onChange={(event) => updateField("trailerUrl", event.target.value)} placeholder="https://youtube.com/..." />
              </FieldShell>
              <MediaDropZone
                label="Optional GIF / hover preview"
                helper="Used in richer discovery placements and hover modules."
                value={form.hoverPreview}
                onSelect={(value) => updateField("hoverPreview", value)}
                accept="image/gif"
                icon={WandSparkles}
              />
            </div>
          </UploadSection>

          <UploadSection eyebrow="C. Details" title="Teach players what they're looking at" body="Use plain language, visible features, and real links to make the page feel credible early.">
            <FieldShell label="Full description" helper="This is the longer project-page narrative." dark>
              <TextAreaInput dark className="min-h-[160px]" value={form.fullDescription} onChange={(event) => updateField("fullDescription", event.target.value)} />
            </FieldShell>

            <div className="grid gap-4 md:grid-cols-3">
              {form.keyFeatures.map((feature, index) => (
                <FieldShell key={index} label={`Key feature ${index + 1}`} helper="Rendered in feature summaries and value callouts." dark>
                  <TextAreaInput dark className="min-h-[120px]" value={feature} onChange={(event) => updateFeature(index, event.target.value)} />
                </FieldShell>
              ))}
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <FieldShell label="Team / studio name" helper="Visible on project page, cards, and creator profile." dark>
                <TextInput icon={User} dark value={form.studioName} onChange={(event) => updateField("studioName", event.target.value)} placeholder="Studio or team name" />
              </FieldShell>
              <FieldShell label="Website" helper="Useful for trust and external verification." dark>
                <TextInput icon={Globe} dark value={form.website} onChange={(event) => updateField("website", event.target.value)} placeholder="https://..." />
              </FieldShell>
              <FieldShell label="Steam" helper="Optional store page link." dark>
                <TextInput icon={MonitorPlay} dark value={form.steam} onChange={(event) => updateField("steam", event.target.value)} placeholder="https://store.steampowered.com/..." />
              </FieldShell>
              <FieldShell label="Discord" helper="Community link for devlogs and updates." dark>
                <TextInput icon={Disc3} dark value={form.discord} onChange={(event) => updateField("discord", event.target.value)} placeholder="https://discord.gg/..." />
              </FieldShell>
              <FieldShell label="Kickstarter / funding" helper="Optional external funding context." dark>
                <TextInput icon={BarChart3} dark value={form.kickstarter} onChange={(event) => updateField("kickstarter", event.target.value)} placeholder="https://kickstarter.com/..." />
              </FieldShell>
              <FieldShell label="Other relevant link" helper="Press kit, creator profile, or long-form devlog." dark>
                <TextInput icon={ArrowRight} dark value={form.otherLink} onChange={(event) => updateField("otherLink", event.target.value)} placeholder="https://..." />
              </FieldShell>
            </div>
          </UploadSection>

          <UploadSection eyebrow="D. Discoverability" title="Guide the right players to the page" body="These tags help shape recommendations, search behavior, and profile context.">
            <FieldShell label="Search tags" helper="Use short, searchable keywords.">
              <div className="flex flex-wrap gap-2">
                {["stealth", "narrative", "extraction", "systems", "co-op", "sci-fi"].map((option) => (
                  <SelectableChip key={option} label={option} active={form.searchTags.includes(option)} onClick={() => toggleListItem("searchTags", option)} dark />
                ))}
              </div>
            </FieldShell>

            <FieldShell label="Mood tags" helper="Helps recommendation clusters and mood-led discovery.">
              <div className="flex flex-wrap gap-2">
                {discoverabilityOptions.map((option) => (
                  <SelectableChip key={option} label={option} active={form.moodTags.includes(option)} onClick={() => toggleListItem("moodTags", option)} dark />
                ))}
              </div>
            </FieldShell>

            <FieldShell label="Audience tags" helper="Useful for creator profile shelves and player targeting.">
              <div className="flex flex-wrap gap-2">
                {audienceOptions.map((option) => (
                  <SelectableChip key={option} label={option} active={form.audienceTags.includes(option)} onClick={() => toggleListItem("audienceTags", option)} dark />
                ))}
              </div>
            </FieldShell>

            <FieldShell label="Visibility setting" helper="Control when and how the project is visible.">
              <div className="flex flex-wrap gap-2">
                {["Public", "Unlisted", "Coming soon"].map((option) => (
                  <SelectableChip key={option} label={option} active={form.visibility === option} onClick={() => updateField("visibility", option)} dark />
                ))}
              </div>
            </FieldShell>

            <SurfaceCard dark className="border-dashed px-4 py-4">
              <div className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-4 w-4 text-cyan-200" />
                <div>
                  <div className="text-sm font-medium text-white">Featured request</div>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">
                    Placeholder for future editorial submission. Keep your hero image, hook, and clear build status polished if you want a better shot at featuring.
                  </p>
                </div>
              </div>
            </SurfaceCard>
          </UploadSection>

          <UploadSection eyebrow="E. Publish" title="Ship the page with confidence" body="Review key blockers before you save draft, preview, or publish.">
            <div className="grid gap-3 md:grid-cols-2">
              {validation.length > 0 ? (
                validation.map((item) => (
                  <div key={item} className="rounded-2xl border border-rose-300/20 bg-rose-300/10 px-4 py-3 text-sm text-rose-100">
                    {item}
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-100">
                  Ready to publish. Your core discovery surfaces are filled in.
                </div>
              )}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300">
                Project title, hook, thumbnail, and genre tags are the highest-impact fields for discovery.
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <GhostButton dark onClick={handleDraft}>Save draft</GhostButton>
              <GhostButton dark onClick={handlePreview}>Preview project</GhostButton>
              <PrimaryButton dark disabled={!canPublish} onClick={handlePublish}>
                Publish project
              </PrimaryButton>
            </div>
            {publishIntent === "publish" && !canPublish ? (
              <FieldHint>Resolve the highlighted validation issues before publishing.</FieldHint>
            ) : null}
          </UploadSection>
        </div>

        <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <SurfaceCard dark className="p-5">
            <SectionHeader eyebrow="Live preview" title="Watch the page assemble itself" body="The right rail updates from local form state in real time." dark />
            <PreviewTabs activeTab={previewTab} setActiveTab={setPreviewTab} />
          </SurfaceCard>

          <SurfaceCard dark className="overflow-hidden p-5">
            {previewTab === "home-card" ? <HomeCardPreview data={previewData} /> : null}
            {previewTab === "project-page" ? <ProjectPageMiniPreview data={previewData} /> : null}
            {previewTab === "developer-profile" ? <DeveloperProfilePreview data={previewData} /> : null}
          </SurfaceCard>

          <SurfaceCard dark className="p-5">
            <div className="text-sm font-semibold text-white">Where fields appear</div>
              <div className="mt-4 space-y-3 text-sm text-zinc-400">
                <div>Project title appears on the project page, feed cards, and search results.</div>
                <div>One-line hook appears on cards, preview modules, and creator profile summaries.</div>
                <div>Thumbnail appears as the primary image shown in discovery feeds.</div>
                <div>Trailer appears as hero media at the top of the project page.</div>
              </div>
          </SurfaceCard>
        </div>
      </div>
    </main>
  );
}

function HomeCardPreview({ data }) {
  return (
    <div>
      <div className="mb-3 text-sm font-semibold text-white">Home Card</div>
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0d1626]">
        <div className="relative h-44 overflow-hidden bg-zinc-900">
          <div className="absolute inset-0 bg-[linear-gradient(145deg,_rgba(15,23,42,0.1),_rgba(15,23,42,0.78)),radial-gradient(circle_at_20%_20%,_rgba(56,189,248,0.34),_transparent_26%),radial-gradient(circle_at_78%_28%,_rgba(249,115,22,0.32),_transparent_22%),linear-gradient(to_bottom_right,_#162032,_#050816)]" />
          <div className="absolute left-4 top-4 rounded-full bg-black/40 px-2.5 py-1 text-[11px] text-white">{data.build}</div>
          <div className="absolute bottom-4 right-4 rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-white">{data.visibility}</div>
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-lg font-semibold text-white">{data.title}</div>
              <div className="mt-1 text-sm text-zinc-400">{data.genreLine} · {data.studio}</div>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-zinc-300">{data.status}</div>
          </div>
          <p className="mt-3 text-sm leading-6 text-zinc-400">{data.hook}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {data.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectPageMiniPreview({ data }) {
  return (
    <div className="space-y-4">
      <div className="text-sm font-semibold text-white">Project Page</div>
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0d1626]">
        <div className="h-40 bg-[linear-gradient(145deg,_rgba(15,23,42,0.1),_rgba(15,23,42,0.78)),radial-gradient(circle_at_20%_20%,_rgba(56,189,248,0.34),_transparent_26%),radial-gradient(circle_at_78%_28%,_rgba(249,115,22,0.32),_transparent_22%),linear-gradient(to_bottom_right,_#162032,_#050816)]" />
        <div className="p-5">
          <div className="flex flex-wrap gap-2">
            {[data.status, ...data.tags.slice(0, 3)].map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-zinc-300">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-4 text-2xl font-semibold text-white">{data.title}</div>
          <p className="mt-2 text-sm leading-6 text-zinc-400">{data.description}</p>
          <div className="mt-4 flex gap-3">
            <PrimaryButton dark className="px-4 py-2">Follow</PrimaryButton>
            <GhostButton dark>Watch trailer</GhostButton>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {data.gallery.slice(0, 3).map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-6 text-center text-xs text-zinc-400">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DeveloperProfilePreview({ data }) {
  return (
    <div className="space-y-4">
      <div className="text-sm font-semibold text-white">Developer Profile</div>
      <div className="rounded-[28px] border border-white/10 bg-[#0d1626] p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200">
            <User className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm text-zinc-500">Studio profile</div>
            <div className="text-lg font-semibold text-white">{data.studio}</div>
          </div>
        </div>
        <div className="mt-5 overflow-hidden rounded-[24px] border border-white/10 bg-[#111a2d]">
          <div className="h-32 bg-[linear-gradient(145deg,_rgba(15,23,42,0.1),_rgba(15,23,42,0.78)),radial-gradient(circle_at_20%_20%,_rgba(56,189,248,0.34),_transparent_26%),radial-gradient(circle_at_78%_28%,_rgba(249,115,22,0.32),_transparent_22%),linear-gradient(to_bottom_right,_#162032,_#050816)]" />
          <div className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-base font-semibold text-white">{data.title}</div>
                <div className="mt-1 text-sm text-zinc-400">{data.hook}</div>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-zinc-300">{data.status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function buildPreviewProject(form) {
  return {
    id: "signal-run",
    title: form.title.trim() || "Untitled Project",
    genre: form.genres.join(" / ") || "Genre pending",
    studio: form.studioName.trim() || "Studio name",
    progress: 63,
    amount: "$54.8k of $86k",
    followers: "6.4k following",
    build: form.buildStatus,
    status: form.visibility === "Coming soon" ? "Coming soon" : form.buildStatus,
    update: "Updated moments ago",
    description: form.fullDescription.trim() || form.shortDescription.trim() || "Add a short description to explain the project.",
    trustTags: [...form.genres.slice(0, 2), ...form.platforms.slice(0, 2)],
    milestones: [
      ["Playable onboarding slice", true],
      ["Public trailer refresh", true],
      ["Systems tuning pass", false],
      ["Steam page launch", false],
      ["Closed feedback round", false],
      ["Demo release prep", false],
    ],
    funds: [
      ["Engineering", "32%"],
      ["Art", "24%"],
      ["Audio", "10%"],
      ["QA + iteration", "18%"],
      ["Marketing", "16%"],
    ],
    studioTrust: [
      "Creator profile connected",
      form.website ? "Website linked" : "Website pending",
      form.discord ? "Discord community link added" : "Discord pending",
      form.trailerUrl ? "Trailer ready for hero placement" : "Trailer pending",
    ],
    hook: form.hook.trim() || "Your one-line hook appears here.",
    visibility: form.visibility,
    genreLine: form.genres.join(" / ") || "Genre pending",
    tags: [...form.genres, ...form.platforms, ...form.moodTags],
    gallery: form.galleryAssets.length > 0 ? form.galleryAssets : ["Gallery asset", "Second still", "Combat frame"],
  };
}

function getUploadValidation(form) {
  const issues = [];
  if (!form.title.trim()) issues.push("Missing title: add a project title before publishing.");
  if (!form.heroAsset) issues.push("Missing thumbnail: add a hero image for discovery feeds.");
  if (form.hook.trim().length > 90) issues.push("Hook is too long: keep it under 90 characters.");
  if (form.genres.length === 0) issues.push("No genre selected: choose at least one genre tag.");
  return issues;
}

export default function PlayFirstSitePagesPrototype() {
  const [currentPage, setCurrentPageState] = useState(() => pageForPath(window.location.pathname));
  const [selectedProject, setSelectedProject] = useState(featuredGames[0]);
  const [selectedCategory, setSelectedCategory] = useState("Trending");

  useEffect(() => {
    function handlePopState() {
      setCurrentPageState(pageForPath(window.location.pathname));
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  function setCurrentPage(page, options = {}) {
    const nextRoute = routeForPage(page);
    setCurrentPageState(page);

    if (window.location.pathname !== nextRoute) {
      if (options.replace) {
        window.history.replaceState({}, "", nextRoute);
      } else {
        window.history.pushState({}, "", nextRoute);
      }
    }
  }

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
  } else if (currentPage === "login") {
    page = <LoginPage setCurrentPage={setCurrentPage} />;
  } else if (currentPage === "signup") {
    page = <SignUpPage setCurrentPage={setCurrentPage} />;
  } else {
    page = <UploadProjectPage setCurrentPage={setCurrentPage} setSelectedProject={setSelectedProject} previewProject={selectedProject} />;
  }

  return (
    <AppShell currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {page}
    </AppShell>
  );
}
