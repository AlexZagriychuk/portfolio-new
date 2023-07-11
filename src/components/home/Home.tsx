import { useEffect } from "react"
import { Page } from "../../routes/router"
import { usePortfolioStore } from "../../state/portfolioStore"

export default function Home() {
  const changeActivePage = usePortfolioStore((state) => state.changeActivePage)
  useEffect(() => {
    changeActivePage(Page.HOME)
  }, [])

  return (
    <h1 className="text-3xl font-bold underline">Empty Home page</h1>
  )
}