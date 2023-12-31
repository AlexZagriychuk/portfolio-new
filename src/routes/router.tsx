import { Navigate, createBrowserRouter } from "react-router-dom";
import Root from "../components/root/Root";
import Home from "../components/home/Home";
import ErrorPage from "../components/error/ErrorPage";
import AboutMe from "../components/about_me/AboutMe";
import Skills from "../components/skills/Skills";
import Portfolio from "../components/portfolio/Portfolio";
import Certificates from "../components/certificates/Certificates";
import Contacts from "../components/contacts/Contacts";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faHouse, faGraduationCap, faUser, faLaptopCode, faCertificate, faEnvelope } from "../icons/icons";

export enum Page {
  HOME = "Home",
  ABOUT_ME = "About Me",
  SKILLS = "Skills",
  PORTFOLIO = "Portfolio",
  CERTIFICATES = "Certificates",
  CONTACTS = "Contacts",
}

export const pages: {name: Page, path: string, element: JSX.Element, icon: IconDefinition}[] = [
  {name: Page.HOME, path: "home", element: <Home />, icon: faHouse},
  {name: Page.ABOUT_ME, path: "about", element: <AboutMe />, icon: faUser},
  {name: Page.SKILLS, path: "skills", element: <Skills />, icon: faGraduationCap},
  {name: Page.PORTFOLIO, path: "portfolio", element: <Portfolio />, icon: faLaptopCode},
  {name: Page.CERTIFICATES, path: "certificates", element: <Certificates />, icon: faCertificate},
  {name: Page.CONTACTS, path: "contacts", element: <Contacts />, icon: faEnvelope},
]

export const router = createBrowserRouter(
  [
    {
      path: '',
      element: <Navigate to='/home' />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: pages.map(page => {
        return {
          path: page.path,
          element: page.element,
        }
      }),
    },
  ]
)