import './App.css';
import React from 'react';

class App extends React.Component {
  state={
    Person :{ fullName:"Roua CHAYEB",
    profession:"Full Stack Web Developper",
    bio:"I am Roua CHAYEB. \n I am a Full Stack JS Web Developper \n.",
    imgSrc:"/im.jpg"  } ,
    show:false ,
    time:0
  };

  componentDidMount() {
        setInterval(() => {
          this.state.show &&
          this.setState({time:this.state.time+1})  
        }, 800)
    }

  buttonswitch=()=>{this.setState({show:!(this.state.show)})}; 

    render(){
      return (
      <div >    
        <button className="button" style={{background:"rgb(50, 165, 140)" }} onClick={this.buttonswitch} >{this.state.show?"Home":"Profile"}</button>
        {this.state.show &&
          <form className="form">
            <div className="div"> <div className="info"> Full name: </div> <div className="descr">{this.state.Person.fullName} </div> </div>
            <div className="div"> <div className="info"> Profession: </div> <div className="descr">{this.state.Person.profession} </div> </div>
            <div className="div"> <div className="info"> Bio: </div> <div className="descr">{this.state.Person.bio} </div> </div>
            <div className="child"><img src={this.state.Person.imgSrc} alt="" className="img"/></div>
            <div  style={{color:"rgb(50, 165, 140)" }} >{this.state.time}</div>
          </form>
        }    
       
      </div>
     );
    }
}

export default App;