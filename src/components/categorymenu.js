import React from 'react';
import Entertainment from '../images/entertainment.png';
import Science from '../images/science.png';
import Technology from '../images/technology.png';
import Health from '../images/health.png';
import Business from '../images/business.png';
import Sports from '../images/sports.png';
import General from '../images/general.png';
class CategoryMenu extends React.Component{
    handleclick =(category)=>{
        this.props.handleClick(category)
    }
    render(){

    return(
            <div className="ui container">
                <div className="ui inverted fixed top seven item large menu">
            
                        <a onClick={()=>{this.handleclick("entertainment")}} className="item">
                        <img alt="..." src={Entertainment} className="avatar rounded image"/>
                        </a>
                        <a onClick={()=>{this.handleclick("general")}} className="item">
                        <img alt="..." src={General} className="avatar rounded image"/>
                        </a>
                        <a onClick={()=>{this.handleclick("sports")}} className="item">
                        <img alt="..." src={Sports} className="avatar rounded image"/>
                        
                        </a>
                        <a onClick={()=>{this.handleclick("science")}} className="item">
                        <img alt="..." src={Science} className="avatar rounded image"/>
                        </a>
                        <a onClick={()=>{this.handleclick("technology")}} className="item">
                        <img alt="..." src={Technology} className="avatar rounded image"/>
                        </a>
                        <a onClick={()=>{this.handleclick("health")}} className="item">
                        <img alt="..." src={Health} className="avatar rounded image"/>
                        </a>
                        <a onClick={()=>{this.handleclick("business")}} className="item">
                        <img alt="..." src={Business} className="avatar rounded image"/>
                        </a>
                        </div>         
                    </div>
    
        )
    }
}

export default CategoryMenu;