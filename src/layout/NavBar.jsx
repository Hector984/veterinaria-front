import Notification from "../assets/icons/Notification";

const NavBar = ({openAside, open}) => {

  return (
    <header className="bg-gray-50 flex justify-between items-center sticky top-0 px-4 py-10">
      <div className="flex items-center justify-between ">
        <div>
          <button
            onClick={() => openAside()}
            type="button"
            className="block hover:cursor-pointer sm:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              {!open ? (
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
      <Notification />

      {/* <div className={`${open ? "block" : "hidden"} px-6 pb-4 sm:pb-0 sm:block`}>
        <a href="#" className="block px-2 rounded hover:bg-gray-500 hover:text-white sm:inline">Inicio</a>
        <a href="#" className="block px-2 rounded hover:bg-gray-500 hover:text-white sm:inline">Pacientes</a>
        <a href="#" className="block px-2 rounded hover:bg-gray-500 hover:text-white sm:inline">Calendario</a>
        <a href="#" className="block px-2 rounded hover:bg-gray-500 hover:text-white sm:inline">Ajustes</a>
        <a href="#" className="block px-2 rounded hover:bg-gray-500 hover:text-white sm:inline">Salir</a>
      </div> */}
    </header>
  );
};

export default NavBar;
