import React from 'react'
import POPOSSpace from '../POPOSSpace/POPOSSpace'
import './POPOSlist.css'
import data from '../../sfpopos-data.json'

function POPOSList() {
  //Creates array of components
  //Deconstructs the json object toobject to -> title, address, images
  const spaces = data.map(({ title, address, images, hours }, i) => {
    return (
      <POPOSSpace
        id={i} //each instance of this component uses the index as an id
        key={title}
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
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
