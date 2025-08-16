import { Inter, Unbounded } from 'next/font/google'
import "./globals.css"

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin", "cyrillic"],
})

const unboundedDisplay = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"]
})

export const metadata = {
  title: "AICOIN | A brand new Solana meme coin with a real purpose.",
  description: "Every profit goes directly into AI development. Our goal: reach $50M+ market cap while building the future of artificial intelligence.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className="dark">
      <body className={`${interSans.variable} ${unboundedDisplay.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
