import React from 'react'

class Pet extends React.Component {
  

  isAdopted = () =>{
    if (this.props.pet.isAdopted === false){
      return "ui disabled button"
    }else{return "ui primary button" }
  }
  isNotAdopted = () =>{
    if (this.props.pet.isAdopted === false){
      return "ui primary button"
    }else{return "ui disabled button"}
  }
  
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {(this.props.pet.gender === 'female'? '♀' : '♂') + this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className={this.isAdopted()}>Already adopted</button>
          <button className={this.isNotAdopted()}  onClick={()=>this.props.adoption(this.props.pet.id)}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
