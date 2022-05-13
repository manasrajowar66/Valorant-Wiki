import classes from "./SingleAgent.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import agentBackground from "../../assets/agent-background.mp4";
import AgentAbilities from "./AgentAbilities";
import alternateBG from "../../assets/valorant-blank-bg2.jpg";

const SingleAgent = () => {
  const { agentUuid } = useParams();
  const [agentDetails, setAgentDetails] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://valorant-api.com/v1/agents/${agentUuid}`
      );
      const data = await res.json();
      console.log(data.data);
      setAgentDetails(data.data);
    };
    fetchData();
  }, [agentUuid]);
  return (
    <div className={classes["agent-container"]}>
      <div className={classes.video}>
        <video autoPlay loop muted>
          <source src={agentBackground} type="video/mp4" />
        </video>
      </div>
      <div
        className={classes["alternate-background"]}
        style={{ backgroundImage: `url(${alternateBG})` }}
      ></div>
      <div className={classes["agent-details"]}>
        <div
          className={classes.images}
          style={{
            backgroundImage: `url(${agentDetails && agentDetails.background})`,
          }}
        >
          <img
            src={
              agentDetails &&
              (agentDetails.fullPortraitV2
                ? agentDetails.fullPortraitV2
                : agentDetails.fullPortrait)
            }
            alt="agent"
          />
        </div>
        <div className={classes.details}>
          <div className={classes.role}>
            <h5>// Role</h5>
            <h1>
              {agentDetails && agentDetails.role.displayName}
              <img src={agentDetails && agentDetails.role.displayIcon} />
            </h1>
          </div>
          <div className={classes.description}>
            <h5>// Biography</h5>
            <p>{agentDetails && agentDetails.description}</p>
          </div>
          <div className={classes.underline}></div>
        </div>
      </div>
      {agentDetails && <AgentAbilities abilities={agentDetails.abilities} />}
    </div>
  );
};

export default SingleAgent;
