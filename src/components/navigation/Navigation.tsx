import { Link } from "react-router-dom";
import { usePortfolioStore } from "../../state/portfolioStore";
import { pages } from "../../routes/router";

export default function Navigation() {
  const activePage = usePortfolioStore((state) => state.activePage)

  return (
    <nav className="basis-56 grow-0 bg-slate-700">
      <img src="/my_photo.jpg" alt="my photo" />

      <ul className="content-center text-center uppercase">
        {pages.map(page => {return <li key={page.name} className="p-2 border-b border-gray-800">
          <Link 
            className={(page.name === activePage ? "text-slate-50 font-bold hover:text-slate-50" : "text-slate-400 hover:text-slate-300")}
            to={page.path}
          >{page.name}</Link>          
        </li>})}
      </ul>
    </nav>
  )
}