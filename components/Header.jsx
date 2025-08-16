import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const headerLinks = [
  { label: "Features", href: "#features" },
  { label: "Roadmap", href: "#roadmap" },
]

export default function Header() {
  return (
    <header className="border-b border-neutral-800 sticky top-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-1 flex items-center justify-between max-w-7xl">
        {/* Лого + ссылки */}
        <div className="flex items-center space-x-8">
          <Image
            src="/logo_white_on_transperent.png"
            alt="logo"
            width={120}
            height={120}
            className="rounded-xl w-12 h-12"
            priority
          />
          <nav className="hidden md:flex items-center space-x-8">
            {headerLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-sm text-neutral-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Кнопка справа */}
        <Button className="bg-white text-black hover:bg-neutral-200 font-medium">
          Buy Now
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </header>
  )
}
