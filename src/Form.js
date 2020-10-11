import React from 'react'

class Form extends React.Component {

  constructor(){
    super()
    this.state = {
      value1: "",
      value2: "",
      value3: "",
      value4: ""
    }
  }

  handleOnChange1 = (e) => {
    this.setState({
      value1: e.target.value
    })
  }
  handleOnChange2 = (e) => {
    this.setState({
      value2: e.target.value
    })
  }
  handleOnChange3 = (e) => {
    this.setState({
      value3: e.target.value
    })
  }
  handleOnChange4 = (e) => {
    this.setState({
      value4: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("hit the handle submit")
    this.props.addContacts(this.state.value1,this.state.value2,this.state.value3,this.state.value4)
  }


  render(){
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        Name
        <input type="text" onChange={this.handleOnChange1} />
        Email
        <input type="text" onChange={this.handleOnChange2} />
        Phone Number
        <input type="text" onChange={this.handleOnChange3} />
        LinkedIn
        <input type="text" onChange={this.handleOnChange4} />
        <input type="submit"/>
        </form>
    </div>
    )
  }
}

export default Form 

