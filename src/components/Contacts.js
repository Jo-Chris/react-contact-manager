import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
    constructor() {
        super();
        this.state = {
            contacts: [
                {
                    id: 0,
                    name: 'Martina Schrimpflinger',
                    email: 'marta-schripfl@aon.at',
                    phone: '555-555-555'
                },
                {
                    id: 1,
                    name: 'Christof Jori',
                    email: 'cjori49@gmail.com',
                    phone: '0650/6256966'
                },
                {
                    id: 2,
                    name: 'Martin Seisl',
                    email: 'mseisl@privat.at',
                    phone: '0664/23154215'
                },
            ]
        }
    }
  render() {
      const { contacts } = this.state;
    return (
      <div> 
      {contacts.map((ct) => (
        <Contact 
          key={ct.id}
          name={ct.name} 
          email={ct.email} 
          phone={ct.phone}
        />
       ))} 
      </div>
    );
  }
}

export default Contacts;