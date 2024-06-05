import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="mt-40 grid grid-cols-1 items-center justify-between gap-5 p-10 px-20 text-white md:grid-cols-3">
      <div>
        <div className="inline-block bg-gradient-to-r from-optional-accent-orange to-optional-accent-purple bg-clip-text text-xl font-bold text-transparent">
          CleverBooks
        </div>
        <p className="text-sm">
          CleverBooks is dedicated to providing innovative inventory management
          solutions to businesses of all sizes.
        </p>
      </div>

      <div className="py-4 md:text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} CleverBook. All rights reserved.
        </p>
      </div>

      <div className="flex flex-col space-x-4 space-y-2 md:items-end">
        <h4 className="text-lg font-semibold">Contact Us</h4>
        <p>
          <b>Address:</b> 123 Inventory Lane, Warehouse City, IN 45678
        </p>
        <p>
          <b>Email:</b> info@cleverbooks.com
        </p>
        <p>
          <b>Phone:</b> (123) 456-7890
        </p>
      </div>
    </footer>
  );
}

export default Footer;
