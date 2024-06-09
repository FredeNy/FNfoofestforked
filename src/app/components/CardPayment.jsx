"use client";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import { Bowlby_One } from "next/font/google";
import Link from "next/link";

const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const CardPayment = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <div className="p-6 m-12 rounded-3xl border-2 border-Hotpink bg-Darkblue max-w-5xl mx-auto">
      <h1 className={`text-3xl text-center text-White md:text-4xl mt-2 mb-12 ${BowlbyOne.className}`}>PAYMENT DETAILS</h1>
      <div className="md:flex justify-evenly items-center md:space-x-4">
        <section className="mb-8 md:mb-0">
          <Cards
            number={state.number}
            expiry={state.expiry}
            cvc={state.cvc}
            name={state.name}
            focused={state.focus}
          />
        </section>
        <section className="w-full max-w-md">
          <form className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-1">
              <label className="text-White">Card number<span className="text-Hotpink"> *</span></label>
              <input
                className="p-2 rounded-md bg-White focus:outline-none focus:ring focus:ring-Hotpink"
                type="text"
                name="number"
                placeholder="1111 2222 3333 4444"
                pattern="\d{4}\s\d{4}\s\d{4}\s\d{4}"
                maxLength="16" 
                required
                value={state.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-White">Full Name<span className="text-Hotpink"> *</span></label>
              <input
                className="p-2 rounded-md bg-White focus:outline-none focus:ring focus:ring-Hotpink"
                type="text"
                name="name"
                placeholder="Jane Doe"
                required
                value={state.name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col space-y-1">
                <label className="text-White">Expiration date<span className="text-Hotpink"> *</span></label>
                <input
                  className="p-2 rounded-md bg-White focus:outline-none focus:ring focus:ring-Hotpink"
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  pattern="\d{2}/\d{2}"
                  maxLength="5"
                  required
                  value={state.expiry}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
              <div className="flex flex-col space-y-1 mb-4">
                <label className="text-White">CVC<span className="text-Hotpink"> *</span></label>
                <input
                  className="p-2 rounded-md bg-White focus:outline-none focus:ring focus:ring-Hotpink"
                  type="text"
                  name="cvc"
                  placeholder="123"
                  pattern="\d{3}"
                  maxLength="3"
                  required
                  value={state.cvc}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <Link className="mb-4 text-center text-White p-2 font-bold rounded-full bg-Hotpink hover:bg-Lightpink w-1/2" href={`/booking/orderConfirmation`}>
                COMPLETE PURCHASE
              </Link>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default CardPayment;
