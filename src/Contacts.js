import React from 'react'
import ContactCard from './ContactCard.js'


class Contacts  extends React.Component {

    renderContacts =() => {
        return this.props.contacts.map(contactObj => {
            return <ContactCard contact={contactObj} deleteContact={this.props.deleteContact}/>
        })
    }

    render(){
      return (
       <div>
           Contact Div
         {this.renderContacts()}
       </div>
      )
    }
   }
   
   export default Contacts