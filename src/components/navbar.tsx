import { Github, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

interface NavbarProps {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

const Navbar: React.FC<NavbarProps> = ({ title, links }) => {

    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const location = useLocation();

    const toggleTheme = () => {
      setIsDarkTheme(!isDarkTheme);
      document.documentElement.classList.toggle('dark');
    }

    return (
      <>
      <nav className="navbar bg-slate-50 text-slate-800 dark:bg-slate-800 dark:text-slate-300  p-4 flex justify-between max-w-full xl:px-60">
      <Link to={"/"} className="navbar-brand font-bold p-1 flex gap-2 text-blue-300">
      <img src="/public/uwu.webp" width={48} height={48} className="mx-auto" alt="logo-react" />
        {title}
      </Link>
      <ul className="navbar-nav flex gap-3">
        {links.map((link, index) => (
          <li key={index} className="nav-item p-1">
            <NavLink to={link.url} className={`nav-link font-medium rounded-full p-2 hover:bg-slate-300 dark:hover:bg-slate-100 dark:hover:text-slate-800 ${location.pathname === link.url ? 'bg-slate-300 hover:bg-slate-400 dark:hover:bg-slate-100 dark:hover:text-slate-800 dark:bg-slate-700' : ''} `} >
              {link.text}
            </NavLink>
          </li>
        ))}
         <div className="dark-mode-toggle hover:bg-slate-300 dark:hover:bg-slate-100 dark:hover:text-slate-800 rounded-full p-1" onClick={toggleTheme}>
          {isDarkTheme ? <Sun /> : <Moon />}
        </div>

        <a href="https://github.com/yulidarmaulana" className="nav-link hover:bg-slate-300 dark:hover:bg-slate-100 dark:hover:text-slate-800 rounded-full p-1" target="_blank">
          <Github />
        </a>
      </ul>
    </nav>
    </>

    )
}

export default Navbar