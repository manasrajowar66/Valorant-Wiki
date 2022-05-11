import classes from './Header.module.css';


const Header = () => {

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <h1>VALORANT - WIKI</h1>
            </div>
            <div className={classes.links}>
                <ul>
                    <li>Agents</li>
                    <li>Guns</li>
                    <li>Maps</li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
