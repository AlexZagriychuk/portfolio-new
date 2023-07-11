import { create } from "zustand";
import { Page } from "../routes/router";
import { combine } from "zustand/middleware";

export const usePortfolioStore = create(combine(
  {
    activePage: "" as Page // Page.HOME leads to Uncaught TypeError: Cannot read properties of undefined
  },
  (set) => ({
    changeActivePage: (newActivePage: Page) => set({ activePage: newActivePage }),
  })
))