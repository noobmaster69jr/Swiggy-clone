import react, {useState} from "react"
import {Link} from "react-router-dom"
const loggedInUser =() =>{
  //make api call for authentication
  return true; //lets assume the return value
}
const Title = () => (
  <img
    className="logo"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkbrxibqugzFUf2AuWEk7kCHIPEX0GsR8ctw&usqp=CAU"
    alt="logo"
  ></img>
);

 const HeaderComponent = () => {
  const [title, setTitle] = useState("Food walla")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="header">
      <Title />
      <h1>{title}</h1>
      <button onClick={() => setTitle("New Food app")}>Change title</button>
      <nav className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about">
            About
          </Link>
          </li>

          <li><Link to="/contact">Contact</Link></li>
          <li>cart</li>
        </ul>
      </nav>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default HeaderComponent;

