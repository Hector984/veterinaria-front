import logo from "./../assets/logo.svg";
import { use, useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-600 flex justify-between items-center">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center">
          <img src={logo} alt="Logo veterinaria" className="h-20" />
          <h4 className="text-white">Pet Care</h4>
        </div>

        <div>
          <button
            onClick={handleClick}
            type="button"
            className="text-white block hover:cursor-pointer sm:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              {!isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} px-6 pb-4 sm:pb-0 sm:block`}>
        <a href="#" className="block px-2 rounded hover:bg-gray-500 hover:text-white sm:inline">Inicio</a>
        <a href="#" className="block px-2 rounded hover:bg-gray-500 hover:text-white sm:inline">Pacientes</a>
        <a href="#" className="block px-2 rounded hover:bg-gray-500 hover:text-white sm:inline">Calendario</a>
        <a href="#" className="block px-2 rounded hover:bg-gray-500 hover:text-white sm:inline">Ajustes</a>
        <a href="#" className="block px-2 rounded hover:bg-gray-500 hover:text-white sm:inline">Salir</a>
      </div>
    </header>
  );
};

export default NavBar;
