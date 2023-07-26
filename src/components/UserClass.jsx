import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            usersInfo:{
                login:"Test07"
            }
        };
        
    }
    async componentDidMount(){
        //API call
        // const data = await fetch("https://api.github.com/users/kirank07");
        // const json = await data.json();
        // console.log(json);
        // this.setState({
        //     usersInfo:json,
        // });
        this.timer = setInterval(()=>{
            //console.log("Interval started ... ");
        },1000);
    }

    componentDidUpdate(){
        //console.log("Component Did Update");
    }

    componentWillUnmount(){
       // console.log("Component Will Unmount");
        clearInterval(this.timer);
    }
    render(){
        //const {name,location,contact} = this.props;
        const { login,avatar_url } = this.state.usersInfo;
        return(
            <div className="m-4 p-4 w-64 rounded-md bg-white-200 hover:bg-white shadow-lg">
                <img src={avatar_url} alt={login} />
                <h3>Login:{login}</h3>

            </div>
        );
    }
}

export default UserClass;