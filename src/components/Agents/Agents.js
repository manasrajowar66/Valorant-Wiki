import { useEffect } from "react";

const Agents = () => {
  useEffect(() => {
    const fetchAgents = async () => {
      const res = await fetch("https://valorant-api.com/v1/agents");
      const data = await res.json();
      console.log(data.data);
    };
    fetchAgents();
  }, []);
  return <div>Agents</div>;
};

export default Agents;
