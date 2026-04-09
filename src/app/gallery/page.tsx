import fs from "fs";
import path from "path";
import Gallery from "./gallery";

export type Screen = {
  slug: string;
  label: string;
  category: string;
  variant: string;
  hasCode: boolean;
  hasScreenshot: boolean;
};

const CATEGORY_MAP: Record<string, { label: string; order: number; icon: string }> = {
  homepage: { label: "Homepage", order: 0, icon: "home" },
  about: { label: "About", order: 1, icon: "info" },
  how_it_works: { label: "How It Works", order: 2, icon: "help_outline" },
  organizations: { label: "Organizations", order: 3, icon: "business" },
  movement_leader: { label: "Movement Leader", order: 4, icon: "person" },
  leadership: { label: "Leadership Transformation", order: 5, icon: "psychology" },
  platform: { label: "Platform", order: 6, icon: "devices" },
  ai_content: { label: "AI Content", order: 7, icon: "auto_awesome" },
  ai_governance: { label: "AI Governance", order: 8, icon: "policy" },
  church_landing: { label: "Church Landing", order: 9, icon: "church" },
  pricing: { label: "Pricing", order: 10, icon: "payments" },
  faq: { label: "FAQ", order: 11, icon: "quiz" },
  fundraising: { label: "Fundraising", order: 12, icon: "volunteer_activism" },
  proof_research: { label: "Proof & Research", order: 13, icon: "science" },
  conversation: { label: "Start a Conversation", order: 14, icon: "forum" },
  design_system: { label: "Design System", order: 15, icon: "palette" },
  other: { label: "Other", order: 16, icon: "more_horiz" },
};

function categorize(slug: string): { category: string; variant: string } {
  if (
    slug.match(
      /^movemental_(final_definitive|revised|progressive|architectural|editorial_modernism|glass_tonal|institutional_impact|institutional_minimalist|scholarly_workspace|systemic_vision|the_archive|the_monolith)/
    ) ||
    slug === "the_curator_original" ||
    slug === "ai_discovery_lab_landing_page"
  ) {
    const variant = slug.replace(/^movemental_/, "").replace(/_/g, " ");
    return { category: "homepage", variant };
  }
  if (slug.startsWith("about_")) {
    return { category: "about", variant: slug.replace("about_", "").replace(/_/g, " ") };
  }
  if (slug.startsWith("how_it_works_") || slug.startsWith("see_how_it_works_")) {
    const prefix = slug.startsWith("see_") ? "see — " : "";
    const v = slug.replace(/^(see_)?how_it_works_/, "").replace(/_/g, " ");
    return { category: "how_it_works", variant: prefix + v };
  }
  if (slug.startsWith("organizations_") || slug.startsWith("movemental_org_landing_") || slug.startsWith("movemental_organization_")) {
    const v = slug.replace(/^(movemental_)?(org_landing_|organization_landing_|organizations_)/, "").replace(/_/g, " ");
    return { category: "organizations", variant: v };
  }
  if (slug.startsWith("movement_leader_") || slug === "movemental_movement_leader_landing_page") {
    const v = slug.replace(/^(movemental_)?movement_leader_/, "").replace(/_landing_page/, "landing").replace(/_/g, " ");
    return { category: "movement_leader", variant: v };
  }
  if (slug.startsWith("leadership_transformation_")) {
    return { category: "leadership", variant: slug.replace("leadership_transformation_", "").replace(/_/g, " ") };
  }
  if (slug.startsWith("platform_")) {
    return { category: "platform", variant: slug.replace("platform_", "").replace(/_/g, " ") };
  }
  if (slug.startsWith("ai_content_")) {
    return { category: "ai_content", variant: slug.replace("ai_content_", "").replace(/_/g, " ") };
  }
  if (slug.startsWith("ai_governance_")) {
    return { category: "ai_governance", variant: slug.replace("ai_governance_", "").replace(/_/g, " ") };
  }
  if (slug.startsWith("church_landing_")) {
    return { category: "church_landing", variant: slug.replace("church_landing_", "").replace(/_/g, " ") };
  }
  if (slug.startsWith("pricing_")) {
    return { category: "pricing", variant: slug.replace("pricing_", "").replace(/_/g, " ") };
  }
  if (slug.startsWith("faq_") || slug.startsWith("movemental_faq_")) {
    const v = slug.replace(/^movemental_/, "").replace(/^faq_/, "").replace(/_/g, " ");
    return { category: "faq", variant: v };
  }
  if (slug.startsWith("fundraising_system_")) {
    return { category: "fundraising", variant: slug.replace("fundraising_system_", "").replace(/_/g, " ") };
  }
  if (slug.startsWith("movemental_proof_research_")) {
    return { category: "proof_research", variant: slug.replace("movemental_proof_research_", "").replace(/_/g, " ") };
  }
  if (slug.startsWith("start_conversation_") || slug.startsWith("movemental_conversation_")) {
    const v = slug.replace(/^(movemental_)?conversation_/, "").replace(/^start_conversation_/, "").replace(/_/g, " ");
    return { category: "conversation", variant: v };
  }
  if (slug.startsWith("digital_curator")) {
    return { category: "design_system", variant: slug.replace("digital_curator", "").replace(/_/g, " ") || "v1" };
  }
  return { category: "other", variant: slug.replace(/_/g, " ") };
}

function getScreens(): Screen[] {
  const screensDir = path.join(process.cwd(), "public", "screens");
  if (!fs.existsSync(screensDir)) return [];
  const dirs = fs.readdirSync(screensDir);
  return dirs
    .filter((d) => fs.statSync(path.join(screensDir, d)).isDirectory())
    .map((slug) => {
      const { category, variant } = categorize(slug);
      return {
        slug,
        label: variant.replace(/\b\w/g, (c) => c.toUpperCase()),
        category,
        variant,
        hasCode: fs.existsSync(path.join(screensDir, slug, "index.html")),
        hasScreenshot: fs.existsSync(path.join(screensDir, slug, "screen.png")),
      };
    })
    .sort((a, b) => {
      const ao = CATEGORY_MAP[a.category]?.order ?? 99;
      const bo = CATEGORY_MAP[b.category]?.order ?? 99;
      if (ao !== bo) return ao - bo;
      return a.label.localeCompare(b.label);
    });
}

export const metadata = {
  title: "Design Gallery | Movemental Stitch",
};

export default function GalleryPage() {
  const screens = getScreens();
  const groups: Record<string, Screen[]> = {};
  for (const s of screens) {
    if (!groups[s.category]) groups[s.category] = [];
    groups[s.category].push(s);
  }
  const sortedCategories = Object.keys(groups).sort(
    (a, b) => (CATEGORY_MAP[a]?.order ?? 99) - (CATEGORY_MAP[b]?.order ?? 99)
  );
  const categoryMeta: Record<string, { label: string; count: number; icon: string }> = {};
  for (const cat of sortedCategories) {
    categoryMeta[cat] = {
      label: CATEGORY_MAP[cat]?.label ?? cat,
      count: groups[cat].length,
      icon: CATEGORY_MAP[cat]?.icon ?? "folder",
    };
  }
  return (
    <Gallery
      groups={groups}
      sortedCategories={sortedCategories}
      categoryMeta={categoryMeta}
    />
  );
}
