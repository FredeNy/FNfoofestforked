"use client"
 
import Link from 'next/link';
import { useState } from 'react';
import { Bowlby_One } from 'next/font/google';

 
 
const BowlbyOne = Bowlby_One({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});
 
/* menuOpen er sat til false, da den først skal åbne når man trykker på kanppen*/
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
 
  /* toggleMenu skifter menuOpen til true eller false  */
 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
 
  return (
    <>
      {/* pink banner */}
 
      <div className="bg-Hotpink py-2">
        <p className="text-xs sm:text-sm 2xl:text-xl text-White text-center font-medium tracking-wider">
          Camping Spots Still Available - Reserve Yours Today!
        </p>
      </div>
 
      {/* nav bar */}
 
      <nav className="sticky top-0 z-50 bg-Darkblue text-White px-2 py-2 2xl:py-5 flex justify-between items-center md:px-6">
        <div>
          <Link
            className={`font-bold text-xl sm:text-2xl 2xl:text-xl ${BowlbyOne.className} hover:text-Hotpink`}
            href="/"
            prefetch={false}
          >
            FOOFEST
          </Link>
          <p className="text-md text-White font-medium">July 3rd - July 10th 2024</p>
        </div>
 
        {/* billede af burger menu symbol - åben*/}
        <button
          className="text-White sm:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
 
        {/* de tre links til højre i web størrelse */}
        {/* skjult (hidden) på små skærme, men synlige på større skærme */}
        <ul className="hidden sm:flex items-center gap-4 md:gap-10">
          <li>
            <Link
              href="/booking"
              prefetch={false}
              className="bg-Hotpink font-bold text-sm md:text-mg 2xl:text-xl rounded-full py-1 px-2 md:px-6 md:py-2 hover:bg-Lightpink"
            >
              BUY TICKETS
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-sm md:text-mg 2xl:text-xl hover:text-Hotpink"
              href="/lineup"
              prefetch={false}
            >
              LINEUP
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-sm md:text-mg 2xl:text-xl hover:text-Hotpink"
              href="/schedule"
              prefetch={false}
            >
              SCHEDULE
            </Link>
          </li>
        </ul>
      </nav>
 
      {/* burger menu */}
      {/* bliver synlig når menuOpen er sat til true */}
      {/* Når menuOpen er true er menuen synlig med translate-x-0. Når mmenuOpen er false bruges translate-x-full og burgermenuen er skjult   */}
 
      <div className={`fixed inset-0 bg-Darkblue text-White transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} z-50 sm:hidden flex flex-col`}>
        <div className="bg-Hotpink py-2">
          <p className="text-xs sm:text-sm 2xl:text-xl text-White text-center font-medium tracking-wider">
            Camping Spots Still Available - Reserve Yours Today!
          </p>
        </div>
        <div className="flex justify-between items-center p-4">
          <div>
            <Link
              className={`font-bold text-xl sm:text-2xl 2xl:text-2xl ${BowlbyOne.className} hover:text-Hotpink`}
              href="/"
              prefetch={false}
            >
              FOOFEST
            </Link>
            <p className="text-md text-White font-medium">July 3rd - July 10th 2024</p>
          </div>
 
          {/* billede af burger menu symbol - luk */}
 
          <button
            className="text-White"
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
 
        {/* burger menu elementer */}
 
        <ul className="flex flex-col items-center h-full space-y-12 overflow-y-auto bg-Navyblue pt-32">
          <li>
            <Link
              href="/booking"
              prefetch={false}
              className=" font-bold text-2xl rounded-full py-2 px-6"
              onClick={toggleMenu}
            >
              BUY TICKETS
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-2xl hover:text-Hotpink"
              href="/lineup"
              prefetch={false}
              onClick={toggleMenu}
            >
              LINEUP
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-2xl hover:text-Hotpink"
              href="/schedule"
              prefetch={false}
              onClick={toggleMenu}
            >
              SCHEDULE
            </Link>
          </li>
        </ul>
 
      </div>
    </>
  );
}