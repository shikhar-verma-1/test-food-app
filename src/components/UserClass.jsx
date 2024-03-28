import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            
            userInfo : {
                name: "dname",
                location : "dlocation",
            }
        }

    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/shikhar-verma-1")
        const json = await data.json();
        this.setState({
            userInfo : json,
        })
    }

    render(){

        
        

        return(
            <div className="user-card">
                <h2>Name : {this.state.userInfo.name}</h2>
                <h3>Location : {this.state.userInfo.id}</h3>
                <h4>Contact : </h4>
            </div>
        )
    }
}

export default UserClass;