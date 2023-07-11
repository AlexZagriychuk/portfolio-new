import { useEffect } from "react"
import { Page } from "../../routes/router"
import { usePortfolioStore } from "../../state/portfolioStore"

export default function Portfolio() {
  const changeActivePage = usePortfolioStore((state) => state.changeActivePage)
  useEffect(() => {
    changeActivePage(Page.PORTFOLIO)
  }, [])

  return (
    <h1 className="text-3xl font-bold underline">Empty Portfolio page</h1>
  )
}