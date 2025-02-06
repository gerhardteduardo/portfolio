const Header = () => {
  return (
    <header className="text-white flex bg-gr">
      <h2 className="text-4xl pointer-events-none">Eduardo Gerhardt</h2>
      <div className="ml-auto flex items-center">
        <nav className="flex gap-5">
          <a href="/" className="hover:text-blue-500">About</a>
          <a href="/projects" className="hover:text-blue-500 pointer-events-none">Projects</a>
          <a href="/setup" className="hover:text-blue-500 pointer-events-none">Setup</a>
          <a href="/contact" className="hover:text-blue-500 pointer-events-none">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
