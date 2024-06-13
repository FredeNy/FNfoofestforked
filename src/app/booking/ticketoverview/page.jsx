"use client"; // Angiver at dette komponent er en client-side komponent
import { useState } from 'react'; // Importerer useState-hook til håndtering af komponenttilstand
import { Bowlby_One } from "next/font/google"; // Importerer en Google-font
import Ticket from "@/app/components/Tickets/Ticket"; // Importerer Ticket-komponenten
import RemoveTicket from '@/app/components/RemoveTicket'; // Importerer RemoveTicket-komponenten
import AddButton from '@/app/components/AddButton'; // Importerer AddButton-komponenten
import ChooseTicket from '@/app/components/ChooseTicket'; // Importerer ChooseTicket-komponenten

const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Home() {
  // Definerer state hooks til billet tælling
  const [ticketcount1, setTicketcount1] = useState(0);
  const [ticketcount2, setTicketcount2] = useState(0);

  // Håndterer ændring af første billet tælling
  const handleTicketChange = (count) => {
    setTicketcount1(count);
  };

  // Håndterer fjernelse af første billet
  const handleRemoveTicket = () => {
    if (ticketcount1 > 0) {
      setTicketcount1(prevCount => prevCount - 1);
    }
  };

  // Håndterer ændring af anden billet tælling
  const handleTicketChange2 = (count) => {
    setTicketcount2(count);
  };

  // Håndterer fjernelse af anden billet
  const handleRemoveTicket2 = () => {
    if (ticketcount2 > 0) {
      setTicketcount2(prevCount => prevCount - 1);
    }
  };

  // Returnerer JSX til at rendere komponenten
  return (
    <>
    <form action='/booking/campingArea'>
    <div className="text-White bg-Darkblue p-4 sm:p-6 md:p-12 lg:p-16 m-4 sm:m-4 md:m-12 lg:mx-60 rounded-3xl border-2 border-Hotpink">
      <h1 className={` ${BowlbyOne.className} text-White text-3xl md:text-4xl mb-2 sm:mb-6 md:mb-8`}>TICKETS</h1>
        <div className="grid md:flex place-content-between">
    
          <div>
            <h2 className='mt-8 mb-6 sm:text-base text-xl xl:text-2xl font-bold md:mt-0 text-White'>CHOOSE YOUR TICKETS</h2>
            <div className='grid mb-6 2xl:flex 2xl:gap-24'> 
              <div className='text-White'>
                <h2 className="text-xl text-White"><span className='text-Hotpink font-bold'>FOO</span> TICKET</h2>
                <p>799 DKK</p>
              </div>
              <div className='flex flex-row gap-3 h-6 items-center mt-4'>
                <RemoveTicket onRemoveButtonClick={handleRemoveTicket} /> 
                <input 
                name="ticketcount1" 
                className='border-solid border-2 border-Hotpink rounded-full w-32 bg-White p-2' 
                value={ticketcount1} />
                <AddButton onButtonClick={() => handleTicketChange(ticketcount1 + 1)} />
              </div>
            </div>

            <br />
            <div className='grid 2xl:flex 2xl:gap-28'>
              <div>
                <h2 className='text-White text-xl'><span className='font-bold text-Hotpink'>VIP</span> TICKET</h2>
                <p className='text-White text-base'>1299 DKK</p>
              </div>

              <div className='flex flex-row gap-3 h-6 items-center mt-4'>
                <RemoveTicket onRemoveButtonClick={handleRemoveTicket2} /> 
                <input 
                name="ticketcount2" 
                className='border-solid border-2 border-Hotpink rounded-full w-32 bg-White p-2' 
                value={ticketcount2} />
                <AddButton onButtonClick={() => handleTicketChange2(ticketcount2 + 1)} />
              </div>
            </div>
          </div>

          <div className='grid gap-5 mt-16 md:mt-0'>
          <div>
            <Ticket 
            ticketcount1={ticketcount1} 
            handleTicketChange={handleTicketChange} 
            handleRemoveTicket={handleRemoveTicket} 
            ticketPrice={799}
             ticketcount2={ticketcount2} 
             handleTicketChange2={handleTicketChange2} 
             handleRemoveTicket2={handleRemoveTicket2} 
             ticketPrice2={1299} />
          </div>
          <div className='mt-2 mb-4'>
            <ChooseTicket />
          </div>
          </div>
        </div>
    </div>
    </form>
    </>
  );
}







