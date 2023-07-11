import { useEffect } from "react"
import { Page } from "../../routes/router"
import { usePortfolioStore } from "../../state/portfolioStore"

export default function Contacts() {
  const changeActivePage = usePortfolioStore((state) => state.changeActivePage)
  useEffect(() => {
    changeActivePage(Page.CONTACTS)
  }, [])

  return (
    <h1 className="text-3xl font-bold underline">Empty Contacts page</h1>
  )
}