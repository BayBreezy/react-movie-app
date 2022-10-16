import Logo from "../assets/tmdb.svg";

export const Footer = () => {
  return (
    <footer className="py-10 mt-10 border-t">
      <h1 className="text-center font-medium text-xl">Flickity</h1>
      <p className="text-center text-sm">&copy; {new Date().getFullYear()}</p>
      <img src={Logo} alt="The Movie Datbase Logo" className="mx-auto max-w-xs mt-5" />
    </footer>
  );
};
