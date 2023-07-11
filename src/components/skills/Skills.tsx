import { useEffect } from "react"
import { Page } from "../../routes/router"
import { usePortfolioStore } from "../../state/portfolioStore"

export default function Skills() {
  const changeActivePage = usePortfolioStore((state) => state.changeActivePage)
  useEffect(() => {
    changeActivePage(Page.SKILLS)
  }, [])

  return (
    <h1 className="text-3xl font-bold underline">Empty Skills page</h1>
  )
}