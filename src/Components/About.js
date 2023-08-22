import {Outlet} from "react-router-dom"
import ProfileClassComp from "./ProfileClass"
import {Component} from "react"
class About extends Component{
    constructor(props){
        super(props)
        
    }

    async componentDidMount(){
        
    }

    render(){
        return (
          <>
            <div>About us</div>

            <Outlet />
            <h2>This page give description about the author and site</h2>
            <ProfileClassComp name={"First person"} />
          </>
        );
    }
}
export default About;