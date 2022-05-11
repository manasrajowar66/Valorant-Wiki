import "./App.css";
import Header from "./components/Layout/Header";
import Home from "./components/Home";
import Footer from "./components/Layout/Footer";
import { Switch, Route } from "react-router-dom";
import Agents from "./components/Agents/Agents";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/agents" exact component={Agents} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
