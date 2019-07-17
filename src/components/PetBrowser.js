import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.PureComponent {

  render() {
    return <div className="ui cards">{this.props.pets.map( eachPet => <Pet key={eachPet.id} pet={eachPet} onAdoptPet={this.props.onAdoptPet} /> )}</div>
  }
}

export default PetBrowser
