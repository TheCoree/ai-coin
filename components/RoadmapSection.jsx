import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Brain, TrendingUp, Zap, DollarSign, CheckCircle } from "lucide-react"

const roadmapPhases = [
  {
    phase: "Phase 1: Pump.fun Launch",
    status: "In Progress",
    icon: Rocket,
    date: "Q3 2025",
    milestones: [
      "Token launch on Pump.fun with 1B total supply",
      "800M tokens allocated to bonding curve",
      "Community building on Discord and Telegram",
      "Initial hype and trading on Pump.fun",
    ],
  },
  {
    phase: "Phase 2: DEX Listing",
    status: "Planned",
    icon: TrendingUp,
    date: "Q4 2025",
    milestones: [
      "Reach 800M tokens bought on Pump.fun",
      "Hit $69,000 market cap for Raydium listing",
      "Pay 6 SOL fee for DEX integration",
      "Expand trading to broader Solana DEXs",
    ],
  },
  {
    phase: "Phase 3: Growth & AI Investment",
    status: "Planned",
    icon: Brain,
    date: "Q1 2026",
    milestones: [
      "Reach $10M market cap",
      "First AI research investment funded by profits",
      "Release initial AI development report",
      "Strengthen community presence on Twitter",
    ],
  },
  {
    phase: "Phase 4: Scale & Innovation",
    status: "Planned",
    icon: Zap,
    date: "Q2 2026",
    milestones: [
      "Target $25M market cap",
      "Fund AI prototype development",
      "Expand to additional DEXs and CEXs",
      "Host global community events and AI hackathons",
    ],
  },
  {
    phase: "Phase 5: AI Leadership",
    status: "Planned",
    icon: DollarSign,
    date: "Q3 2026 & Beyond",
    milestones: [
      "Reach $50M market cap",
      "Sustain ongoing AI research funding",
      "Develop AI-powered community tools",
      "Establish AI Meme Coin as a leader in AI-backed tokens",
    ],
  },
]

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-16 px-4 sm:px-6 border-t border-neutral-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-4">Our Roadmap</h2>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto">
            From Pump.fun launch to global AI innovation, here’s our path to building the future with every trade.
          </p>
        </div>
        <div className="relative">
          {/* Vertical Timeline Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-neutral-800 h-full"></div>
          
          {roadmapPhases.map(({ phase, status, icon: Icon, date, milestones }, i) => (
            <div
              key={i}
              className={`mb-8 flex flex-col md:flex-row items-center ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } justify-between relative`}
            >
              {/* Card - Full width on mobile, half on desktop */}
              <div className="w-full md:w-5/12 relative z-10">
                <Card className="border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-colors py-0">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg sm:text-xl">{phase}</h3>
                        <p className="text-neutral-400 text-xs sm:text-sm">{date}</p>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className={`mb-4 text-xs sm:text-sm ${
                        status === "Completed"
                          ? "bg-green-900 text-green-300"
                          : status === "In Progress"
                          ? "bg-blue-900 text-blue-300"
                          : "bg-neutral-900 text-neutral-300"
                      }`}
                    >
                      {status}
                    </Badge>
                    <ul className="text-neutral-400 text-sm sm:text-base space-y-2">
                      {milestones.map((milestone, j) => (
                        <li key={j} className="flex items-start">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-500 mr-2 mt-1" />
                          <span>{milestone}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              {/* Timeline Dot - Hidden on mobile */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full"></div>
              {/* Empty space for alignment on desktop */}
              <div className="hidden md:block w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}