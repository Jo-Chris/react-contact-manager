import React, { Component } from 'react'
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {

  deleteContact = (id) => {
      const { contacts } = this.state;

      let newContacts = [];
      newContacts = contacts.filter((el) => el.id !== id);

      this.setState({
        contacts: newContacts
      });
    }

  render() {
    return(
      <Consumer>
        {value => { 
          const { contacts } = value;

          return (
            <React.Fragment>
              <h1 className="display-4 mb-2"> 
              <span className="text-danger">Contact</span> List</h1>
              
              {contacts.map((ct) => (
                <Contact 
                  key={ct.id}
                  contact={ct}
                />
              ))} 
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;