const Title = () => (
  <img
    className="logo"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkbrxibqugzFUf2AuWEk7kCHIPEX0GsR8ctw&usqp=CAU"
    alt="logo"
  ></img>
);

 const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <nav className="nav-items">
        <ul>
          <li>help</li>
          <li>About</li>
          <li>Contact</li>
          <li>cart</li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderComponent;

