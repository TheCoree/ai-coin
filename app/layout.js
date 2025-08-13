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
  title: "corede — свобода в коде",
  description: "Личный сайт разработчика corede. Python, Linux, React и всё, что интересно.",
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
