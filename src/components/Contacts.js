import React, { Component } from 'react'
import Contact from './Contact';
import { Consumer } from '../context';

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