"use client"
import { Bowlby_One } from "next/font/google";
import { useState, useEffect } from 'react';
import GuestForm from "@/app/components/GuestForm";
import InformationBasket from "@/app/components/Tickets/InformationBasket";
import { useRouter } from 'next/navigation';

const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Formpage() {
  const [timeLeft, setTimeLeft] = useState(300); // 300 seconds = 5 minutes
  const router = useRouter();

  useEffect(() => {
    if (timeLeft <= 0) {
      alert("Sorry your reservation has been lost, because the time has expired");
      router.push("/booking/ticketoverview");
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, router]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <main>
      <div className="text-White bg-Darkblue p-4 sm:p-6 md:p-12 lg:p-16 m-4 sm:m-4 md:m-12 lg:mx-44 rounded-3xl border-2 border-Hotpink">
        <h1 className={`text-White text-3xl md:text-4xl mb-6 sm:mb-6 md:mb-8  ${BowlbyOne.className}`}>
          INFORMATION
        </h1>
        <div className="text-White sm:text-center font-semibold mb-12 text-lg border-b-2 border-Hotpink">
          <p>Time left to complete your purchase: {formatTime(timeLeft)}</p>
        </div>
        {/* ordre er skjult på desktop viewport men vist ved mobil viewport */}
        <details className="md:hidden">
          <summary className="mb-5">
            <span className="font-semibold text-xl hover:text-Hotpink">View your order</span>
          </summary>
          <div className="w-full md:flex">
            <div className="w-full max-w-md mb-6">
              <InformationBasket />
            </div>
          </div>
        </details>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          <div className="w-full">
            <div className="w-full mb-6 md:mb-4 lg:mb-2">
              <GuestForm />
            </div>
          </div>

          {/* Ordre bliver skjult kun ved mobil viewport */}
          <div className="hidden md:hidden-none w-full md:flex">
            <div className="w-full max-w-md mb-6">
              <InformationBasket />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
