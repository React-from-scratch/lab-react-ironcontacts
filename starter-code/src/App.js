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

  sortByName = () => {
    const contact = [...this.state.contacts].sort((a, b) => (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0 )
    this.setState( { contacts: contact })
  }

  render () {
    return (
      <div className='App'>
        <h1>Celebrity Contacts</h1>
        <button onClick={this.addNewContact}>Add a random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          <Contacts 
            contacts={this.state.contacts} 
            changed={this.addNewContact} 
            sorted={this.sortByName} />
        </table>
      </div>
    )
  }
}

export default App
