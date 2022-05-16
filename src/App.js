import "./App.css";
import Header from "./components/Layout/Header";
import Home from "./components/Home";
import Footer from "./components/Layout/Footer";
import { Switch, Route } from "react-router-dom";
import Agents from "./components/Agents/Agents";
import NotFound from "./pages/NotFound";
import Weapons from "./components/Weapons/Weapons";
import SingleAgent from "./components/Agents/SingleAgent";
import SingleWeapon from "./components/Weapons/SingleWeapon";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/agents" exact component={Agents} />
        <Route path="/weapons" exact component={Weapons} />
        <Route path="/agents/:agentUuid" exact component={SingleAgent} />
        <Route path="/weapons/:weaponUuid" exact component={SingleWeapon} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
