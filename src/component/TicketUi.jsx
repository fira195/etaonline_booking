import React from "react";

const FlightTicket = ({ airlineLogo, departure, arrival, duration, price }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex items-center justify-between border border-gray-200">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12">
          <img src={airlineLogo} alt="Airline Logo" className="w-full h-full object-contain" />
        </div>
        <div>
          <p className="text-gray-600 text-sm">{departure} ➝ {arrival}</p>
          <p className="text-lg font-semibold">{duration}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-xl font-bold">${price}</p>
        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">Select</button>
      </div>
    </div>
  );
};

const TicketList = () => {
  const tickets = [
    { airlineLogo: "/images/airline1.png", departure: "12:30 am", arrival: "1:30 pm", duration: "7h 10m", price: "9,165" },
    { airlineLogo: "/images/airline2.png", departure: "8:00 pm", arrival: "10:15 pm", duration: "8h 30m", price: "10,780" },
    { airlineLogo: "/images/airline3.png", departure: "2:30 pm", arrival: "5:25 pm", duration: "8h 55m", price: "9,967" },
    { airlineLogo: "/images/airline4.png", departure: "6:30 pm", arrival: "9:10 pm", duration: "8h 40m", price: "11,112" },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {tickets.map((ticket, index) => (
        <FlightTicket key={index} {...ticket} />
      ))}
    </div>
  );
};

export default TicketList;
