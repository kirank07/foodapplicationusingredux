import React from 'react'
import User from "./User";
import UserClass from "./UserClass"

class About extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    //console.log("Parent component DidMount");
  }

  render(){
    //console.log("Parent render");
    return (
          <div className='bg-white'>
            <div className='justify-items-center'>
              <h1>About us</h1>
            </div>
            <div className='flex'>
            <User name={"Kiran Khade"} location={"Pune"} contact={"@kirankhade07"} />
            <UserClass name={"Kiran"} location={"Pune"} contact={"@kirank07"} />
            </div>
          </div>
        );
  }
}

// const About = () => {
  
//   return (
//     <div>About
//       <h1>User Details</h1>
//       {/* <User name={"Kiran Khade"} location={"Pune"} contact={"@kirankhade07"} /> */}
//       <UserClass name={"Kiran K"} location={"Pune"} contact={"@kirank07"} />
//     </div>
//   );
// };

export default About;