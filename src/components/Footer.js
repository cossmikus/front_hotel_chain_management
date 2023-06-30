import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-200 text-center text-white dark:bg-gray-800 dark:text-neutral-200">
      <div className="container p-6">
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          <div className="mb-6 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
              className="w-full rounded-md shadow-lg"
              alt="City 113"
            />
          </div>
          <div className="mb-6 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/111.webp"
              className="w-full rounded-md shadow-lg"
              alt="City 111"
            />
          </div>
          <div className="mb-6 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/112.webp"
              className="w-full rounded-md shadow-lg"
              alt="City 112"
            />
          </div>
          <div className="mb-6 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/114.webp"
              className="w-full rounded-md shadow-lg"
              alt="City 114"
            />
          </div>
          <div className="mb-6 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/115.webp"
              className="w-full rounded-md shadow-lg"
              alt="City 115"
            />
          </div>
          <div className="mb-6 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/116.webp"
              className="w-full rounded-md shadow-lg"
              alt="City 116"
            />
          </div>
        </div>
      </div>

      <div className="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-gray-800 dark:text-neutral-200">
        © 2023 Copyright:
        <a
          className="dark:text-neutral-400"
          href="https://tailwind-elements.com/"
        >
          Hotel Reservation
        </a>
      </div>
    </footer>
  );
};

export default Footer;
