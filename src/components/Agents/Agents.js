import { useEffect, useState } from "react";
import classes from "./Agents.module.css";
import AgentCard from "./AgentCard";

const Agents = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      const res = await fetch("https://valorant-api.com/v1/agents");
      const data = await res.json();
      setAgents(() => data.data.filter((d) => d.isPlayableCharacter));
    };
    fetchAgents();
  }, []);

  console.log(agents);

  return (
    <div className={classes["agents-container"]}>
      <div className={classes.title}>
        <h1>Agents</h1>
        <div></div>
      </div>
      <div className={classes.agents}>
        {agents.map((agent) => {
          return (
            <AgentCard
              img={agent.bustPortrait}
              name={agent.displayName}
              key={agent.uuid}
              uuid={agent.uuid}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Agents;
