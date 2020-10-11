import React from 'react';
import './App.css';
import Form from './Form'
import Contacts from './Contacts'


class App  extends React.Component {

  constructor(){
    super()
    this.state = {
      contacts: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/contacts')
    .then(resp => resp.json())
    .then(contactsArr => {
      this.setState({
        contacts: contactsArr
      })
    })
  }

  addContacts = (v1,v2,v3,v4) => {
    console.log("hit the addContacts function")
    const newContact = {
      name: v1, 
      email: v2, 
      number: v3, 
      linkedIn: v4
    }
    
    const reqObj = {
      method: 'POST', 
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newContact)
    }
    console.log(newContact)
    fetch('http://localhost:3000/contacts', reqObj)
    .then(resp => resp.json())
    .then(contact => {
      console.log(contact)
      const newContactsArr = [...this.state.contacts,contact]
      this.setState({
        contacts: newContactsArr
      })
    })
  }

    deleteContact = (id) => {
      const reqObj = {
        method: 'DELETE'
      }
      fetch(`http://localhost:3000/contacts/${id}`, reqObj)
      .then(resp => resp.json())
      .then(() => {
        alert("contact deleted")
      })
    }


 render(){
   return (
    <div className="App">
      <header className="App-header">
       <Form addContacts={this.addContacts}/>
       <Contacts contacts={this.state.contacts} deleteContact={this.deleteContact}/>
      </header>
    </div>
   )
 }
}

export default App
