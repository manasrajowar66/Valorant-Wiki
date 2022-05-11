import classes from './Card.module.css';

const Card = (props) => {
    return (
        <div className={classes.card}>
            <img src={props.icon} alt="" className={classes.icon} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}


export default Card;