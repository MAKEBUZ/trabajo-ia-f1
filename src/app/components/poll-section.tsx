"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function PollSection() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  return (
    <section className="bg-black p-4 md:p-8">
      <h2 className="mb-6 text-2xl font-bold">THE BIG QUESTION</h2>
      <div className="mb-4">
        <p className="mb-4 text-lg">
          Do you think Ferrari will achieve their declared target of at least two Grand Prix wins in 2015?
        </p>
        <div className="space-y-3">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="poll"
              value="yes"
              checked={selectedOption === "yes"}
              onChange={() => setSelectedOption("yes")}
              className="h-4 w-4 accent-red-500"
            />
            <span>Yes of course!</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="poll"
              value="no"
              checked={selectedOption === "no"}
              onChange={() => setSelectedOption("no")}
              className="h-4 w-4 accent-red-500"
            />
            <span>No I do not think</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="poll"
              value="maybe"
              checked={selectedOption === "maybe"}
              onChange={() => setSelectedOption("maybe")}
              className="h-4 w-4 accent-red-500"
            />
            <span>Too soon to say</span>
          </label>
        </div>
      </div>
      <button
        className="flex items-center rounded-full bg-red-600 px-6 py-2 font-bold text-white hover:bg-red-700 disabled:opacity-50"
        disabled={!selectedOption}
      >
        SEND <ArrowRight className="ml-1 h-4 w-4" />
      </button>
    </section>
  )
}
