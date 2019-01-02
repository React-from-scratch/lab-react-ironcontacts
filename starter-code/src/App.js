import React, { Component } from 'react'
import './App.css'
import contacts from './contacts.json'
import Contacts from './Components/Contacts/Contacts'

class App extends Component {

  state = {
    contacts: contacts.slice(0,5)
  }

  addNewContact = () => {
    const allContacts = [...this.state.contacts]
    const newContacts = allContacts.concat(contacts[Math.floor(Math.random() * 190) + 1])
    this.setState( { contacts: newContacts })
  }

  render () {
    return (
      <div className='App'>
        <h1>Celebrity Contacts</h1>
        <button onClick={this.addNewContact}>Add a random Contact</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          <Contacts 
            contacts={this.state.contacts} 
            changed={this.addNewContact}/>
        </table>
      </div>
    )
  }
}

export default App
