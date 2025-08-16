import Image from "next/image"
import WaveAnimation from "@/components/ui/animated-footer"

const footerLinks = [
  {
    title: "Token",
    links: [
      { name: "Buy on Pump.fun", href: "https://pump.fun" }, // Placeholder URL; replace with actual Pump.fun link when available
    ],
  },
  {
    title: "AI Development",
    links: [
      { name: "Roadmap", href: "#roadmap" },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "Telegram", href: "https://t.me/SolanaAiCoin" }, // Placeholder; replace with actual Telegram link
      { name: "Twitter", href: "https://x.com/cryptomrpenguin" }, // Placeholder; replace with actual Twitter link
    ],
  },
]

export default function Footer() {
  return (
    <>
      <footer className="border-t border-neutral-800 py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Image
                    src="/logo_on_white.png"
                    alt="logo"
                    width={120}
                    height={120}
                    className="rounded-xl w-8 h-8"
                    priority
                  />
                </div>
                <span className="font-semibold text-xl">AI Meme Coin</span>
              </div>
              <p className="text-neutral-400">The meme coin that builds the future of AI.</p>
            </div>

            {footerLinks.map((section, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="text-neutral-400 space-y-2">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <a href={link.href} className="hover:text-white transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
            <p className="text-neutral-400">
              © 2025 AI Coin. Building the future, one trade at a time.
            </p>
          </div>
        </div>
      </footer>
      <WaveAnimation barCount={136} />
    </>
  )
}