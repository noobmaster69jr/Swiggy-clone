import {useState} from "react"
const ProfileFunction = (props) =>{
    const [count, setCount] = useState(0);
   
    return (
        <div>
            <h2>Profile Function Component </h2>
            <h2>Name : {props.name} </h2>
            <h3>count: {count}</h3>
            <button onClick={()=>setCount(1)}>Click</button>
            </div>
    )
}
export default ProfileFunction