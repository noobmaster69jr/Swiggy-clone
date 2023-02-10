import React from "react"
import ReactDOM from "react-dom/client"
import  HeaderComponent from "./Components/Header.js"
import Body from "./Components/Body"
import Footer from "./Components/footer"
import { IMG_CDN_Link } from "./Constants.js"

 
  const AppLayout = () =>{
    return (
      <>
        <HeaderComponent />
        <Body />
        <Footer />
      </>
    );
  }
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)