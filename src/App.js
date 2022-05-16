import "./App.css";
import Header from "./components/Layout/Header";
import Home from "./components/Home";
import Footer from "./components/Layout/Footer";
import { Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import AgentPage from './pages/AgentsPage';
import WeaponsPage from './pages/WeaponsPage';
import SingleAgentPage from './pages/SingleAgentPage';
import SingleWeaponPage from './pages/SingleWeaponPage';
import MapsPage from "./pages/MapsPage";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/agents" exact component={AgentPage} />
        <Route path="/weapons" exact component={WeaponsPage} />
        <Route path="/maps" exact component={MapsPage} />
        <Route path="/agents/:agentUuid" exact component={SingleAgentPage} />
        <Route path="/weapons/:weaponUuid" exact component={SingleWeaponPage} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
