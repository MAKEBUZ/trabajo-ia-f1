import Image from "next/image"
import { Menu, ChevronRight } from "lucide-react"
import Link from "next/link"
import NewsCard from "./components/news-card"
import StandingsTable from "./components/standings-table"
import PromotionCard from "./components/promotion-card"
import PollSection from "./components/poll-section"
import Footer from "./components/footer"
import TrackMap from "./components/track-map"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 md:p-6">
        <button className="text-white">
          <Menu className="h-6 w-6" />
        </button>
        <div className="absolute right-4 md:right-6">
          <Image src="/f1-logo.png" alt="Formula 1 Logo" width={60} height={30} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] w-full bg-[url('/hero-bg.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex h-full flex-col justify-center p-8 md:p-16">
          <h1 className="text-5xl font-bold md:text-7xl">
            2015
            <br />
            FORMULA 1
          </h1>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">SELL CANADA GRAND PRIX</h2>
          <p className="mt-2 text-red-500">TAKE ADVANTAGE OF EARLY BIRD PRICING</p>
          <p className="mt-4 text-2xl">Tickets Now On Sale</p>
          <Link
            href="#tickets"
            className="mt-6 flex w-fit items-center rounded-full bg-red-600 px-6 py-2 font-bold text-white hover:bg-red-700"
          >
            FIND TICKETS <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="absolute right-6 top-1/2 flex -translate-y-1/2 flex-col gap-2">
          <div className="h-3 w-3 rounded-full bg-gray-500"></div>
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-gray-500"></div>
          <div className="h-3 w-3 rounded-full bg-gray-500"></div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3 md:p-8">
        <Link
          href="#season"
          className="flex items-center justify-between rounded bg-red-600 p-4 text-white hover:bg-red-700"
        >
          <div>
            <h3 className="text-xl font-bold">SEASON</h3>
            <p className="text-sm">View More Information</p>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white">
            <ChevronRight className="h-4 w-4" />
          </div>
        </Link>
        <Link
          href="#team"
          className="flex items-center justify-between rounded bg-gray-800 p-4 text-white hover:bg-gray-700"
        >
          <div>
            <h3 className="text-xl font-bold">TEAM</h3>
            <p className="text-sm">View More Information</p>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white">
            <ChevronRight className="h-4 w-4" />
          </div>
        </Link>
        <Link
          href="#drivers"
          className="flex items-center justify-between rounded bg-gray-800 p-4 text-white hover:bg-gray-700"
        >
          <div>
            <h3 className="text-xl font-bold">DRIVERS</h3>
            <p className="text-sm">View More Information</p>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white">
            <ChevronRight className="h-4 w-4" />
          </div>
        </Link>
      </section>

      {/* Current Race Section */}
      <section className="flex flex-col items-center justify-between gap-8 p-4 md:flex-row md:p-8">
        <div className="flex-1">
          <h3 className="text-xl font-bold">Australia Melbourne Grand Prix</h3>
          <p className="text-3xl font-bold text-red-500">Practice 1: 11D:15H:26M</p>
        </div>
        <div className="flex-1">
          <TrackMap />
        </div>
      </section>

      {/* News Section */}
      <section className="p-4 md:p-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold">NEWS</h2>
          <div className="flex gap-1">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-gray-500"></div>
            <div className="h-3 w-3 rounded-full bg-gray-500"></div>
            <div className="h-3 w-3 rounded-full bg-gray-500"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <NewsCard
            date="15 MAR"
            title="MERCEDES TO UNVEIL 2015 CAR"
            time="17 DAYS AGO"
            content="For the first time in six seasons, Fernando Alonso will no longer be car in the..."
            imageUrl="/news1.png"
          />
          <NewsCard
            date="14 MAR"
            title="NEW TEAM: MCLAREN HONDA!"
            time="17 DAYS AGO"
            content="The new machine, once again to be raced by Valtteri Bottas and Felipe Massa..."
            imageUrl="/news2.png"
          />
          <NewsCard
            date="13 MAR"
            title="ALONSO MCLAREN IS BACK"
            time="17 DAYS AGO"
            content="Unlike last winter, which saw the teams coping with an unprecedented..."
            imageUrl="/news3.png"
          />
          <NewsCard
            date="11 MAR"
            title="FERRARI BIG DISPUTE"
            time="17 DAYS AGO"
            content="The layout phase of the new car was com- pleted by the annual summer..."
            imageUrl="/news4.png"
          />
        </div>
      </section>

      {/* Standings Section */}
      <section className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 md:p-8">
        <div>
          <h2 className="mb-4 text-2xl font-bold">2015 DRIVER STANDINGS</h2>
          <StandingsTable
            type="driver"
            data={[
              { position: 1, name: "Lewis Hamilton", team: "Mercedes Petronas AMG", points: 384 },
              { position: 2, name: "Fernando Alonso", team: "MCLAREN Honda", points: 382 },
              { position: 3, name: "Sebastian Vettel", team: "Red Bull Racing - Renault", points: 238 },
              { position: 4, name: "Felipe Massa", team: "Ferrari", points: 186 },
              { position: 5, name: "Jenson Button", team: "MCLAREN Honda", points: 154 },
            ]}
          />
          <Link href="#all-drivers" className="mt-4 flex items-center text-sm text-gray-400 hover:text-white">
            View All Stats <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-bold">2015 TEAM STANDINGS</h2>
          <StandingsTable
            type="team"
            data={[
              { position: 1, team: "Mercedes Petronas AMG", points: 701 },
              { position: 2, team: "MCLAREN Honda", points: 678 },
              { position: 3, team: "Red Bull Racing - Renault", points: 300 },
              { position: 4, team: "Ferrari", points: 216 },
              { position: 5, team: "Williams", points: 181 },
            ]}
          />
          <Link href="#all-teams" className="mt-4 flex items-center text-sm text-gray-400 hover:text-white">
            View All Stats <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Promotion Cards */}
      <section className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 md:p-8">
        <PromotionCard
          title="Formula 1® Tickets"
          subtitle="2015 FIA FORMULA ONE WORLD CHAMPIONSHIP"
          imageUrl="/tickets-promo.png"
        />
        <PromotionCard
          title="Formula 1® Live Timing"
          subtitle="FORMULA1.COM'S EXCLUSIVE LIVE TIMING SYSTEM STREAM"
          imageUrl="/timing-promo.png"
        />
      </section>

      {/* Poll Section */}
      <PollSection />

      {/* Championship Section */}
      <section className="bg-black p-4 md:p-8">
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:items-center">
          <div className="flex-1 flex justify-center">
            <Image
              src="/championship-promo.png"
              alt="Championship Promotion"
              width={500}
              height={300}
              className="rounded object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left">
            <h2 className="text-3xl font-bold text-cyan-400">
              2015 FIA FORMULA ONE
              <br />
              WORLD
              <br />
              CHAMPIONSHIP
            </h2>
            <p className="mt-4 text-xl font-bold">TICKETS NOW ON SALE</p>
            <Link
              href="#buy"
              className="mt-6 flex w-fit items-center rounded-full bg-red-600 px-6 py-2 font-bold text-white hover:bg-red-700"
            >
              BUY NOW <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
