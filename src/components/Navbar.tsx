import { Link } from "react-router-dom";
import Logo from "/flickity-icon.png";
import { SearchModal } from "./SearchModal";

export const Navbar = () => {
  return (
    <header className="bg-white/90 backdrop-blur border-b border-gray-100 sticky top-0 z-10">
      <div className="flex items-center justify-between lg:h-20 h-14 max-w-6xl mx-auto px-3 lg:px-0">
        <Link className="text-2xl font-bold flex items-center space-x-3" to="/">
          <img src={Logo} alt="Flickity Logo" className="lg:w-10 w-6 lg:h-10 h-6 object-contain" />
          <span className="hidden lg:inline-block">Flickity</span>
        </Link>
        <SearchModal />
      </div>
    </header>
  );
};
