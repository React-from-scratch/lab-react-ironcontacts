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
    let newContact = contacts[Math.floor(Math.random() * 190) + 1]
    allContacts.forEach( e => {
      if(newContact.name === e.name) {
        newContact = contacts[Math.floor(Math.random() * 190) + 1]
      }
    })
    const contactList = allContacts.concat(newContact)
    this.setState( { contacts: contactList })
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
  }

  render () {
    return (
      <div className='App'>
        <div className='header'>
          <h1>Celebrity Contacts</h1>
        </div>
        <button onClick={this.addNewContact}>Add a random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          <tbody>
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
          </tbody>
        </table>
      </div>
    )
  }
}

export default App
