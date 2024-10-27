import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Send, Users } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text animate-gradient">
            Memory Relay
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Share meaningful memories and express gratitude to the people who matter most in your life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Send className="w-12 h-12 mb-4 text-primary" />
            <h2 className="text-xl font-semibold mb-2">Send Messages</h2>
            <p className="text-muted-foreground">
              Share your thoughts and feelings with personalized messages
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Heart className="w-12 h-12 mb-4 text-primary" />
            <h2 className="text-xl font-semibold mb-2">Express Gratitude</h2>
            <p className="text-muted-foreground">
              Let others know how much they mean to you
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Users className="w-12 h-12 mb-4 text-primary" />
            <h2 className="text-xl font-semibold mb-2">Connect Groups</h2>
            <p className="text-muted-foreground">
              Create and join groups to share memories together
            </p>
          </Card>
        </div>

        <div className="text-center">
          <Link href="/login">
            <Button size="lg" className="mr-4">
              Get Started
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}