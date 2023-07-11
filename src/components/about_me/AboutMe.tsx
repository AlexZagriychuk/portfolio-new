import { useEffect } from "react"
import { Page } from "../../routes/router"
import { usePortfolioStore } from "../../state/portfolioStore"

export default function AboutMe() {
  const changeActivePage = usePortfolioStore((state) => state.changeActivePage)
  useEffect(() => {
    changeActivePage(Page.ABOUT_ME)
  }, [])

  return (
    <h1 className="text-3xl font-bold underline">Empty About Me page</h1>
  )
}