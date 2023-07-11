import { useEffect } from "react"
import { Page } from "../../routes/router"
import { usePortfolioStore } from "../../state/portfolioStore"

export default function Certificates() {
  const changeActivePage = usePortfolioStore((state) => state.changeActivePage)
  useEffect(() => {
    changeActivePage(Page.CERTIFICATES)
  }, [])
  
  return (
    <h1 className="text-3xl font-bold underline">Empty Certificates page</h1>
  )
}