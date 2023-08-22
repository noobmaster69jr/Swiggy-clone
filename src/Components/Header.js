import react, {useState, useContext} from "react"
import {Link} from "react-router-dom"
import UserContext from "../utils/UserContext"
import {useSelector} from "react-redux"
const loggedInUser =() =>{
  //make api call for authentication
  return true; //lets assume the return value
}
const Title = () => (
  <a href="/">
    <img
      className="h-28 p-2" data-testid="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkbrxibqugzFUf2AuWEk7kCHIPEX0GsR8ctw&usqp=CAU"
      alt="logo"
    ></img>
  </a>
);

 const HeaderComponent = () => {
  const [title, setTitle] = useState("Food walla")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
 const {user} = useContext(UserContext)
 const cartItems = useSelector(store => store.cart.items)


  return (
    <div className="flex justify-between bg-pink-50">
      <Title />
      {/* <h1>{title}</h1> */}

      <nav className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>

          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">
            <Link to="/cart" data-testid="cart">
              Cart-{cartItems.length} items
            </Link>
          </li>
        </ul>
      </nav>
      <span>{user.name}</span>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default HeaderComponent;

