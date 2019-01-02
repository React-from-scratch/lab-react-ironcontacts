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

  sortByPopularity = () => {
    const contact = [...this.state.contacts].sort((a, b) => (a.popularity < b.popularity) ? 1 : (a.popularity > b.popularity) ? -1 : 0 )
    this.setState( { contacts: contact })
  }

  deleteContact = (contactIndex) => {
    const contacts = [...this.state.contacts]
    contacts.splice(contactIndex, 1)
    this.setState({contacts: contacts})
    console.log(contacts)
  }

  render () {
    return (
      <div className='App'>
        <h1>Celebrity Contacts</h1>
        <button onClick={this.addNewContact}>Add a random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          <Contacts 
            contacts={this.state.contacts} 
            changed={this.addNewContact} 
            sort={this.sortByName}
            sortbypop={this.sortByPopularity} 
            remove={this.deleteContact}/>
        </table>
      </div>
    )
  }
}

export default App
