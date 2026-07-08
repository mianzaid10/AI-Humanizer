const badges = [
  { href: 'https://turbo0.com/item/ai-humanizer-tool', src: 'https://img.turbo0.com/badge-listed-light.svg', alt: 'Turbo0' },
  { href: 'https://thesaasdir.com/product/free-ai-humanizer?ref=badge', src: 'https://thesaasdir.com/badge/free-ai-humanizer.svg', alt: 'TheSaaSDir' },
  { href: 'https://aitoolslister.com/tools/ai-humanizer', src: 'https://aitoolslister.com/badges/listed-card-dark.svg', alt: 'AI Tools Lister' },
  { href: 'https://www.ai-visibility.org.uk/directory/verify/freeaihumanizer-online/', src: 'https://www.ai-visibility.org.uk/specifications/badges/essential.svg', alt: 'AI Visibility' },
  { href: 'https://startupdirectory.net', src: 'https://startupdirectory.net/badge/featured-light.svg', alt: 'StartupDirectory' },
  { href: 'https://aiagentsdirectory.com/agent/free-ai-humanizer', src: 'https://aiagentsdirectory.com/featured-badge.svg?v=2024', alt: 'AI Agents Directory' },
  { href: 'https://findly.tools/free-ai-humanizer?utm_source=free-ai-humanizer', src: 'https://findly.tools/badges/findly-tools-badge-dark.svg', alt: 'Findly.tools' },
  { href: 'https://dofollow.tools', src: 'https://dofollow.tools/badge/badge_dark.svg', alt: 'Dofollow.Tools' },
  { href: 'https://aitrustlist.com/?utm_source=freeaihumanizer.online', src: 'https://aitrustlist.com/badge-dark.svg', alt: 'AITrustList' },
  { href: 'https://launchumo.com', src: 'https://launchumo.com/images/badge.webp', alt: 'Launchumo' },
  { href: 'https://toolfame.com/item/free-ai-humanizer', src: 'https://toolfame.com/badge-dark.svg', alt: 'toolfame' },
  { href: 'https://tulimoa.com/discover/free-ai-humanizer', src: 'https://tulimoa.com/badge/dark.svg', alt: 'Tulimoa' },
  { href: 'https://indexof.ai/tool/free-ai-humanizer?ref=free-ai-humanizer', src: 'https://indexof.ai/badge-dark.svg', alt: 'IndexOf.AI' },
];

export default function Marquee() {
  const doubled = [...badges, ...badges];

  return (
    <section className="relative z-10 py-6 border-y border-white/[0.06] bg-[#0A0A14]/50 overflow-hidden">
      <div className="marquee-track">
        {doubled.map((badge, i) => (
          <a
            key={i}
            href={badge.href}
            target="_blank"
            rel="noopener noreferrer"
            className="marquee-item flex-shrink-0 mx-5 opacity-50 hover:opacity-100 transition-opacity"
          >
            <img
              src={badge.src}
              alt={badge.alt}
              className="h-8 w-auto"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
