import React, { Component } from 'react'
import './App.css'
import contacts from './contacts.json'
import Contacts from './Components/Contacts/Contacts'

class App extends Component {

  state = {
    contacts: contacts.slice(0,5)
  }

  render () {
    console.log(this.state.contacts)

    return (
      <div className='App'>
      <h1>Celebrity Contacts</h1>
        <Contacts contacts={this.state.contacts} />
      </div>
    )
  }
}

export default App
