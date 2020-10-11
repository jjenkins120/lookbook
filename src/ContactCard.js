import React from 'react'

class ContactCard extends React.Component {

  constructor(){
    super()
    this.state = {
      isImportant: false 
    }
  }

  handleClick = () => {
    this.setState({
      isImportant: !this.state.isImportant
    })
  }

  renderImportantStyle = () => {
    return this.state.isImportant ? this.renderRedStyle() : this.renderWhiteStyle()
  }

  renderRedStyle= () => {
   return <p style={{color: "red"}}>{this.props.contact.name}</p>
  }

  renderWhiteStyle = () => {
    return <p>{this.props.contact.name}</p>
  }

  handleDelClick = () => {
    this.props.deleteContact(this.props.contact.id)
  }
 render(){
   return (
   <div>
      {this.renderImportantStyle()}
      <p>{this.props.contact.email}</p>
      <p>{this.props.contact.number}</p>
      <p>{this.props.contact.linkedIn}</p>
      <button onClick={this.handleClick}>Important Contact</button>
      <button onClick={this.handleDelClick}>Delete Contact</button>  
   </div>
   )
 }
}

export default ContactCard
