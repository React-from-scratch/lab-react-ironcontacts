import React from 'react'
import Contact from './Contact'

const Contacts = (props) => {
  return props.contacts.map((e, index) => {
    return <Contact
      picture={e.pictureUrl}
      name={e.name}
      popularity={e.popularity}
      key={index}
      changed={() => props.changed()}
      sort={() => props.sort()}
      sortbypop={() => props.sortbypop()}
      remove={() => props.remove(index)}
    />
  })
}

export default Contacts
