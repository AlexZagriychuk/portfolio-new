import { Link } from "react-router-dom";
import { usePortfolioStore } from "../../state/portfolioStore";
import { pages } from "../../routes/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navigation() {
  const activePage = usePortfolioStore((state) => state.activePage)

  return (
    <nav className="basis-56 grow-0 bg-slate-700 flex-col justify-center items-center align-middle">
      <img src="/my_photo.jpg" alt="my photo" />
      <div className="p-2 bg-cyan-600 font-mono text-lg font-bold text-slate-100 text-center">Alexander Zagriychuk</div>

      <ul>
        {pages.map(page => {return <li key={page.name}>
          <Link 
            to={page.path}
            className={"relative first-of-type:border-t border-b border-gray-800 p-2 pl-16 block w-full "  + (page.name === activePage ? "text-slate-50 font-bold hover:text-slate-50" : "text-slate-400 hover:text-slate-300")}
          >
            <FontAwesomeIcon className="absolute w-6 text-lg top-1/2 left-7 transform -translate-y-1/2 text-cyan-400 mr-3" icon={page.icon} />
            {page.name}
          </Link>          
        </li>})}
      </ul>
    </nav>
  )
}