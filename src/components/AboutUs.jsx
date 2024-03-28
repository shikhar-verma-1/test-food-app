import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class AboutUs extends React.Component{

    constructor(props){
        super(props);
    }





    render(){
        return(
            <div>
            <h1>About</h1>
            <h2>This is NR </h2>
            <User name={"Shikhar Verma"}/>

            <UserClass name={"Shikhar Verma Jii"} location={"nagpur"}/>
        </div>

        )
    }
}


export default AboutUs