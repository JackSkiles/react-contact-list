import React from 'react';
import './App.css';
import Contact from './components/Contact'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      contact:[
        {
          name: 'Robert Paulson',
          email: 'Bob@fC.com',
          phone: '332-454-2879',
          address: '420 Paper',
          city: 'St. Wilmington',
          state: 'DE',
          zip: '19886'
        },
        {
          name: 'Robert Paulson',
          email: 'Bob@fC.com',
          phone: '332-454-2879',
          address: '420 Paper',
          city: 'St. Wilmington',
          state: 'DE',
          zip: '19886'
        }
      ],
      
      name: 'Name',
      email: 'Email',
      phone: 'Phone Number',
      address: 'Address',
      city: 'City',
      state: 'State',
      zip: 'Zip Code',
      removed: []
    }
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value.toString()}); 
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const newName = {name: this.state.name, email: this.state.email, phone: this.state.phone,
                    address: this.state.address, city: this.state.city, state: this.state.state,
                    zip: this.state.zip}
    console.log(newName);
    let newContact = [...this.state.contact, newName];
    this.setState({contact: newContact}, () => {
      console.log(this.state.contact)
    })
  }
  remove = (indexToRemove) => {
    console.log("Hello")
    const removed = this.state.contact.filter((contact, index) => {
      return index != indexToRemove;
    })
    this.setState({contact: removed}, () => {
      console.log(removed);
    })
  }
  render(){
      return (
        <div className="App">
          <header className="App-header">
            <h1>Contact list</h1>
          </header>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input type="text" name='name' value={this.state.name} onChange={this.handleChange}></input>
              <input type="email" name="email" value={this.state.email} onChange={this.handleChange}></input>
              <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange}></input>
              <input type="text" name="address" value={this.state.address} onChange={this.handleChange}></input>
              <input type="text" name="city" value={this.state.city} onChange={this.handleChange}></input>
              <input type="text" name="state" value={this.state.state} onChange={this.handleChange}></input>
              <input type="text" name="zip" value={this.state.zip} onChange={this.handleChange}></input>
              <button type="submit">Add Contact</button>
            </form>
          </div>
          <div>
            <div>
              {this.state.contact.map((contacts, index) => {
                return <Contact name={contacts.name} email={contacts.email} 
                phone={contacts.phone} address={contacts.address} 
                city={contacts.city} state={contacts.state}
                zip={contacts.zip} key={index} remove={() => this.remove(index)}/>
              })}
            </div>
            
          </div>
        </div>
      );
    }
  }

export default App;
