const Header = () => {
    return (
      <header>
          <h3>{headerText}</h3>
          <ul>
            {headerItems.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </header>
    )
  }
  
  export default Header;