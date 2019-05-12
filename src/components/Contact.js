import React, { Component } from 'react'
import { Consumer } from '../context';


class Contact extends Component {

  state = {
    showContactInfo: false
  };

  onShowClick = (e) => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  }

  onDeleteClick = (id, dispatch) => {
    dispatch({type: 'DELETE_CONTACT', payload: id});
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