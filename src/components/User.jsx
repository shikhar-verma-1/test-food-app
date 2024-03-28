import { useState } from "react";

const User = (props) => {
    const[count] = useState(0);
    const[count2] = useState(1);
    return(
        <div className="user-card">
            <h2>Name : {props.name}</h2>
            <h3>Location : Nagpur</h3>
            <h1>Count = {count}</h1>
            <h1>Count 2 = {count2}</h1>
            <h4>Contact : @shikhar-verma-1</h4>
        </div>
    )
}

export default User;