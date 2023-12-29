import Hero from '@/screens/Hero'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-dark text-text ${montserrat.className}`}
    >
    <Hero />
    </main>
  )
}
