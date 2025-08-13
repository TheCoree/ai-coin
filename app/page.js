import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, Shield, TrendingUp, Zap, Rocket, DollarSign, ChevronRight } from "lucide-react"

export default function AITokenLanding() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-neutral-800 sticky top-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
              <Brain className="w-5 h-5 text-black" />
            </div>
            <span className="font-semibold text-xl">AI Meme Coin</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm text-neutral-400 hover:text-white transition-colors">
              Features
            </a>
            <a href="#about" className="text-sm text-neutral-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#roadmap" className="text-sm text-neutral-400 hover:text-white transition-colors">
              Roadmap
            </a>
          </nav>
          <Button className="bg-white text-black hover:bg-neutral-200 font-medium">
            Buy Now
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </header>

      <section className="py-24 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-6 bg-neutral-900 text-neutral-300 border-neutral-800">
            🚀 Just Launched on Solana
          </Badge>
          <h1 className="font-bold text-5xl md:text-7xl mb-6 tracking-tight">
            The AI Meme Coin
            <br />
            <span className="text-neutral-400">That Actually Builds</span>
          </h1>
          <p className="text-xl text-neutral-400 mb-12 leading-relaxed max-w-2xl mx-auto">
            A brand new Solana meme coin with a real purpose. Every profit goes directly into AI development. Our goal:
            reach $50M+ market cap while building the future of artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-neutral-200 font-medium text-lg px-8 py-4">
              <DollarSign className="mr-2 w-5 h-5" />
              Buy AI Meme Coin
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-neutral-700 text-white hover:bg-neutral-900 font-medium text-lg px-8 py-4 bg-transparent"
            >
              View Roadmap
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-neutral-800 pt-16">
            <div>
              <div className="text-3xl font-bold mb-2">Just Launched</div>
              <div className="text-neutral-400">Fresh Start</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$50M+</div>
              <div className="text-neutral-400">Target Market Cap</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-neutral-400">Profits to AI</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-6 border-t border-neutral-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl md:text-5xl mb-4">Why This Meme Coin is Different</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Not just another meme coin - we're building the future of AI with every trade
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Fresh Launch on Solana</h3>
                <p className="text-neutral-400">
                  Brand new token just launched on Solana blockchain. Get in early before the moon mission begins.
                </p>
              </CardContent>
            </Card>

            <Card className="border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Real AI Investment</h3>
                <p className="text-neutral-400">
                  Every profit from trading goes directly into AI research and development. This isn't just hype - it's
                  real building.
                </p>
              </CardContent>
            </Card>

            <Card className="border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-semibold text-xl mb-3">$50M+ Vision</h3>
                <p className="text-neutral-400">
                  Our target is clear: reach $50 million market cap while creating real value in the AI space.
                </p>
              </CardContent>
            </Card>

            <Card className="border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Transparent Development</h3>
                <p className="text-neutral-400">
                  Full transparency on how profits are invested in AI. Regular updates on development progress.
                </p>
              </CardContent>
            </Card>

            <Card className="border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Solana Speed</h3>
                <p className="text-neutral-400">
                  Built on Solana for lightning-fast transactions and minimal fees. Perfect for active trading.
                </p>
              </CardContent>
            </Card>

            <Card className="border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Early Opportunity</h3>
                <p className="text-neutral-400">
                  Get in at the ground floor. This is your chance to be part of something that actually builds value.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-neutral-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-bold text-4xl md:text-5xl mb-6">Join the AI Revolution</h2>
          <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
            This is more than a meme coin - it's a movement. Every holder contributes to building the future of AI.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-neutral-200 font-medium text-xl px-12 py-6">
            <Rocket className="mr-2 w-6 h-6" />
            Buy AI Meme Coin
          </Button>
          <p className="text-sm text-neutral-500 mt-6">Available on Solana DEXs • Just launched • Early opportunity</p>
        </div>
      </section>

      <footer className="border-t border-neutral-800 py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                  <Brain className="w-5 h-5 text-black" />
                </div>
                <span className="font-semibold text-xl">AI Meme Coin</span>
              </div>
              <p className="text-neutral-400">The meme coin that builds the future of AI.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Token</h4>
              <ul className="text-neutral-400 space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Buy on DEX
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contract Address
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Chart
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">AI Development</h4>
              <ul className="text-neutral-400 space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Roadmap
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Progress Updates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Investment Reports
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="text-neutral-400 space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Telegram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
            <p className="text-neutral-400">© 2024 AI Meme Coin. Building the future, one trade at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
