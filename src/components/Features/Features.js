import classes from './Features.module.css';
import { data } from './features-data';
import Card from './Card';

const Features = () => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <h1>Features</h1>
                <div></div>
            </div>
            <div className={classes.features}>
                {data.map(d => {
                    return (
                        <Card key={d.title} title={d.title} description={d.description} icon={d.icon} />
                    )
                })}
            </div>
        </div>
    )
}

export default Features;