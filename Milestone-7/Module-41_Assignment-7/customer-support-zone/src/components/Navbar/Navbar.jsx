import React from "react";

const Navbar = () => {
  return (
    <div class="navbar shadow-sm bg-[#ffffff]">
      <div className="w-11/12 mx-auto flex items-center justify-between py-2">
        <div class="navbar-start ml-[-15px] md:ml-0">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabindex="-1"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Changelog</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Download</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <a
            class="font-semibold text-lg
           md:font-bold md:text-2xl whitespace-nowrap"
          >
            CS — Ticket System
          </a>
        </div>

        <div class="navbar-end">
          <div className="hidden lg:flex list-none md:gap-8">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Changelog</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Download</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </div>
          <a className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white font-medium md:font-semibold px-3 py-2 md:px-4 md:py-3 rounded-sm md:ml-6">
            <span className="mr-1 md:mr-2">+</span> New Ticket
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
