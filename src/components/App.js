import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  adoptPet = (id)=>{
    this.setState({
      pets: this.state.pets.map(pet =>{
        
        if(pet.id === id){
          return {...pet, isAdopted: true}
        }else{return pet}
      })
    })
  }

  handleChange = (value)=>{
    this.setState({
      filters:{
        type: value}
    })
  }
  getPets = ()=>{
    if (this.state.filters.type === 'all'){
    fetch(`/api/pets`)
    .then(rsp => rsp.json())
    .then(result =>{
      this.setState({
        pets: result
      })
    })
    }else{fetch(`/api/pets?type=${this.state.filters.type}`)
    .then(rsp => rsp.json())
    .then(result =>{
      this.setState({
        pets: result
      })
    })

    }
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleChange} onFindPetsClick={this.getPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
