import classes from "./Card.module.css";
import { useHistory } from "react-router-dom";

const Card = (props) => {
  const history = useHistory();
  const onClickHandler = () => {
    history.push(props.path);
  };
  return (
    <div className={classes.card}>
      <img src={props.icon} alt="" className={classes.icon} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <button className="btn" onClick={onClickHandler}>
        Click Here
      </button>
    </div>
  );
};

export default Card;
