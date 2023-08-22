import React from "react"
import UserContext from "../utils/UserContext"

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "Random location",
      },
    }; 
  }

  async componentDidMount(){
      const data = await fetch("https://api.github.com/users/akshaymarch7")
      const json = await data.json()
      this.setState({
        userInfo:json
      })
  }
  
  render() {
    return (
      <div>
        <h2>Profile class component</h2>
        {/* <h2>Name :{this.state.userInfo.name}</h2>
        <img src={this.state.userInfo.avatar_url}></img> */}
        <h3>Location : {this.state.userInfo.location}</h3>
        <UserContext.Consumer>
          {
            ({user}) => <h2>{user.name}-{user.email}</h2>
          }
        </UserContext.Consumer>
      </div>
    );
  }
}

export default Profile