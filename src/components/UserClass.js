import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            userInfo:{
                name:"dummy",
                location:"default"
            }
        };

    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/vk1018");
        const json = await data.json();

        console.log(json);

        this.setState({
            userInfo:json,
        });

        this.timer=setInterval(()=>{
        console.log("Namstae React");
        },1000);

    }
    componentWillUnmount(){
     clearInterval(this.timer);
    }

    render()
    {
        const{name,location,avatar_url}=this.state.userInfo;
        
        return(
         <div className="user-card">
            <img src={avatar_url}/>
           <h1 className="heading">Name:{name}</h1>
            <h1 className="location">Location:{location}</h1>
            <h1 className="contact">Contact:vamsikrishnasanapala@gmail.com</h1>
         </div>
        );
    }
}
export default UserClass;