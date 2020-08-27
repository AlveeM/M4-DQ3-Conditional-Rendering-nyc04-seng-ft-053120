import React from 'react'

// props = {
//   changeSelectedItem: (newItem) => {
//     this.setState({ selectedItem: newItem })
//   },
//   selectedItem: 'profile',
// }

const MenuBar = (props) => {

  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  const handleOnClick = (e) => {
    const newItem = e.target.id;
    props.changeSelectedItem(newItem);
  }

  const setActive = (itemName) => {
    return props.selectedItem === itemName ? 'active' : ''
  }

  return (
    <div className="ui four item menu">
      <a 
        // className={`item ${props.selectedItem === 'profile' ? 'active' : ''}`}
        className={`item ${setActive('profile')}`}
        id="profile"
        onClick={handleOnClick} >
        <i className="user large icon" id="profile"/>
      </a>

      <a 
        // className={`item ${props.selectedItem === 'photo' ? 'active' : ''}`}
        className={`item ${setActive('photo')}`}
        id="photo"
        onClick={handleOnClick} >
        <i className="photo large icon" id="photo" />
      </a>

      <a 
        // className={`item ${props.selectedItem === 'cocktail' ? 'active' : ''}`} 
        className={`item ${setActive('cocktail')}`}
        id="cocktail" 
        onClick={handleOnClick}>
        <i className="cocktail large icon" id="cocktail" />
      </a>

      <a 
        // className={`item ${props.selectedItem === 'pokemon' ? 'active' : ''}`} 
        className={`item ${setActive('pokemon')}`}
        onClick={handleOnClick}
        id="pokemon"> 
        <i className=" themeisle large icon" id="pokemon" />
      </a>
    </div>
  )

}

export default MenuBar
