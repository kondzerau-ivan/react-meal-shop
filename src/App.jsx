import { Navbar, Footer } from "flowbite-react";
import {BsGithub} from "react-icons/bs"
import Main from "./components/Main";

const currentYear = new Date().getFullYear();
function App() {
  return (
    <>
      <Navbar className="max-w-screen-xl mx-auto p-4">
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            React Meal Shop
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <Main />
      <Footer className="max-w-screen-xl mx-auto p-4 fixed bottom-0 left-1/2 transform -translate-x-1/2">
        <Footer.Copyright href="https://github.com/kondzerau-ivan" by=" Ivan Kondzerau" year={currentYear} />
        <Footer.Icon href="https://github.com/kondzerau-ivan/react-meal-shop" icon={BsGithub} target="_blank" />
      </Footer>
    </>
  );
}

export default App;
