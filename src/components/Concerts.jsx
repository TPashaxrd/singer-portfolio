import React from 'react';

const Concerts = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-6 md:p-36 bg-black">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl md:text-7xl font-bold text-white text-center mb-16">CONCERTS</h1>

        {[
          { date: '18.01.2025', time: '21:00', venue: 'X Club' },
          { date: '18.01.2025', time: '21:00', venue: 'X Club' },
        ].map((concert, index) => (
          <div
            key={index}
            className="p-6 mb-8 rounded-lg bg-gray-900 shadow-lg flex flex-col md:flex-row justify-between items-center"
            style={{ boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.5)' }}
          >
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-2xl font-semibold text-white">{concert.date}</p>
              <p className="text-lg text-gray-400">{concert.time} - {concert.venue}</p>
            </div>
            <a
              href="https://google.com"
              className="px-10 py-3 text-xl font-bold text-white bg-black rounded-full shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none"
              style={{ fontFamily: 'Roboto Mono, monospace' }}
            >
              BUY
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Concerts;
