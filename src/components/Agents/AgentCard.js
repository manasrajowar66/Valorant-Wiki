import classes from "./AgentCard.module.css";
import { useHistory } from "react-router-dom";

const AgentCard = (props) => {
  const history = useHistory();

  const onClickHandler = () => {
    history.push(`/agents/${props.uuid}`);
  };

  return (
    <div className={classes["agent-card"]}>
      <div className={classes["card-details"]}>
        <h4>{props.name}</h4>
        <img src={props.img} alt="" />
      </div>
      <button className={`btn`} onClick={onClickHandler}>
        Know More
      </button>
    </div>
  );
};

export default AgentCard;
