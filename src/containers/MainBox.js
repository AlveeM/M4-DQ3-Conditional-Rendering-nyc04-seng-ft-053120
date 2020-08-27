import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon } from '../components/Pages.js'

class MainBox extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedItem: 'profile'
    }
  }

  getPage = () => {
    switch (this.state.selectedItem) {
      case 'profile':
        return <Profile />
      case 'photo':
        return <Photos />
      case 'cocktail':
        return <Cocktails />
      case 'pokemon':
        return <Pokemon />
      default:
        return;
    }
  }

  changeSelectedItem = (newItem) => {
    this.setState({ selectedItem: newItem })
  }

  render() {
    
    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

   const detailsToDisplay = this.getPage()
   // const detailsToDisplay = <Profile />

    return (
      <div>
        <MenuBar 
          changeSelectedItem={this.changeSelectedItem} 
          selectedItem={this.state.selectedItem} />
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
