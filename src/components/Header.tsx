import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="text-white flex items-center">
      <h2 className="lg:text-4xl text-2xl font-bold">Eduardo Gerhardt</h2>
      <button
        className="ml-auto lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)} 
        aria-label="Menu"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
      
      <nav
        className={`${menuOpen
            ? "absolute top-20 left-0 w-full bg-black flex flex-col gap-3 p-6"
            : "hidden lg:flex ml-auto gap-5"
          }`}
      >
          <a href="/" className="hover:text-blue-500">About</a>
          <a href="/chat" className="hover:text-blue-500">Ask to AI</a>
          <a href="/projects" className="hover:text-blue-500 pointer-events-none">Projects</a>
          <a href="/setup" className="hover:text-blue-500 pointer-events-none">Setup</a>
          <a href="/contact" className="hover:text-blue-500">Contact</a>
        </nav>
    </header>
  );
};

export default Header;
