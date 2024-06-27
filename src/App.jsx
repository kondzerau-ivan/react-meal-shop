import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";

const currentYear = new Date().getFullYear();
function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="container content">
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/category/:name" component={Category}></Route>
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
