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

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.petFilter} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet = {this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  petFilter = (e) =>{
    this.setState({
      filters: {...this.state.filters,type:e.target.value}
    })
  }

  findPets = () =>{
    let petType = this.state.filters.type

    if(petType === 'all'){
      fetch('/api/pets')
      .then(response => response.json())
      .then(pets => this.setState({pets: pets}))
    }else{
      fetch(`/api/pets?type=${petType}`)
      .then(response => response.json())
      .then(pets => this.setState({pets: pets}))
    }
  }

  onAdoptPet = (id)=>{
    this.setState({
      pets: this.state.pets.map( pet => {
        if(pet.id === id){
          return {...pet, isAdopted:true}
        }else{
          return pet
        }
      })
    })
  }
}

export default App
