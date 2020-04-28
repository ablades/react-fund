import React from 'react'
import POPOSSpace from './POPOSSpace'
import './POPOSlist.css'
import data from './sfpopos-data.json'

function POPOSList() {
  //Creates array of components
  //Deconstructs the json object toobject to -> title, address, images
  const spaces = data.map(( { title, address, images } ) => {
    return (
      <POPOSSpace
        key={title} // The title could be a key
        name={title}
        address={address}
        image={images[0]}
      />
    )
  })

  //Returns the components in one div
  return (
    <div className="POPOSList">
      { spaces }
    </div>
  )
}

export default POPOSList
