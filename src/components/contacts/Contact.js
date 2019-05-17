import React, { Component } from 'react'
import { Consumer } from '../../context';
import axios from 'axios';
import {Link} from 'react-router-dom'

class Contact extends Component {

  state = {
    showContactInfo: false
  };

  onShowClick = (e) => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  }

  //only due to jsonplaceholders.. cant do a request for a person that is created
  onDeleteClick = async (id, dispatch) => {
    try{
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({type: 'DELETE_CONTACT', payload: id})
    }catch(e) {
      dispatch({type: 'DELETE_CONTACT', payload: id})
    }
  }


  render() {

    const {id, name, email, phone} = this.props.contact;
    const {showContactInfo} = this.state
    
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          
          return (
            <div className="card card-body mb-3">
              <h4>{name} 
                <i 
                  onClick={this.onShowClick} 
                  className="fas fa-sort-down ml-3"
                  style={{cursor: 'pointer'}}>
                </i>
                
                <i className="fas fa-times" 
                  style={{cursor: 'pointer', float: 'right', color: 'red'}}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}>
                </i>
                
                <Link to={`contact/edit/${id}`}>
                  <i className="fas fa-pencil-alt mr-2"
                     style={{pointer: 'cursor', float: 'right', color: 'black'}}>

                  </i>
                </Link>
          
              </h4>
              {showContactInfo ?
              <ul className="list-group">
                  <li className="list-group-item mb-1">{email}</li>
                  <li className="list-group-item">{phone}</li>
              </ul>
              : null }
            </div>
          )
        }}
      </Consumer>
    );
  }
}

export default Contact;