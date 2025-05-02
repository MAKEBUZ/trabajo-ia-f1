import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white">
      <div className="grid grid-cols-2 gap-8 p-8 md:grid-cols-5">
        <div>
          <h3 className="mb-4 font-bold uppercase">News</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                Headlines
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Technical
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Interview
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold uppercase">Races</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                In Detail
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                2015 Calendar
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Countdown
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold uppercase">Result</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                Season
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Team
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Driver
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold uppercase">Teams & Drivers</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                Teams
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Drivers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Hall Of Fame
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold uppercase">Inside F1</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                Rules & Regulations
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Understanding F1 Racing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Safety
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                The F1 Brand
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Glossary
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between border-t border-red-700 p-4 md:flex-row">
        <div className="flex flex-wrap gap-4 text-xs">
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline">
            Legal Notices
          </Link>
          <Link href="#" className="hover:underline">
            Guidelines
          </Link>
          <Link href="#" className="hover:underline">
            Contacts
          </Link>
          <Link href="#" className="hover:underline">
            My Details
          </Link>
          <span>© 2013-2015 Formula One World Championship Limited</span>
        </div>
        <div className="mt-4 flex gap-4 md:mt-0">
          <Link href="#" className="hover:opacity-80">
            Facebook
          </Link>
          <Link href="#" className="hover:opacity-80">
            Twitter
          </Link>
          <Link href="#" className="hover:opacity-80">
            Instagram
          </Link>
          <Link href="#" className="hover:opacity-80">
            YouTube
          </Link>
          <Link href="#" className="hover:opacity-80">
            Google+
          </Link>
        </div>
      </div>
    </footer>
  )
}
