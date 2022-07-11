const Footer = (props) => {
    <footer>
        <h3>{props.text}</h3>
        <ul>
            {props.listItem.map((item) => {
                <li>{item}</li>
            })}
        </ul>
    </footer>
}

export default Footer;