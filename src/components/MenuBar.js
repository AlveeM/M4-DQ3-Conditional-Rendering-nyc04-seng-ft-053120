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

  return (
    <div className="ui four item menu">
      <a 
        className={`item ${props.selectedItem === 'profile' ? 'active' : ''}`}
        id="profile"
        onClick={handleOnClick} >
        <i className="user large icon" id="profile"/>
      </a>

      <a 
        className={`item ${props.selectedItem === 'photo' ? 'active' : ''}`}
        id="photo"
        onClick={handleOnClick} >
        <i className="photo large icon" id="photo" />
      </a>

      <a className={`item ${props.selectedItem === 'cocktail' ? 'active' : ''}`} 
        id="cocktail" 
        onClick={handleOnClick}>
        <i className="cocktail large icon" id="cocktail" />
      </a>

      <a className={`item ${props.selectedItem === 'pokemon' ? 'active' : ''}`} 
        onClick={handleOnClick}
        id="pokemon"> 
        <i className=" themeisle large icon" id="pokemon" />
      </a>
    </div>
  )

}

export default MenuBar
