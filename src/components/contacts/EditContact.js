import React, { Component } from 'react'
import { Consumer } from "../../context";
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class EditContact extends Component {

    state =  {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

        const {name, email, phone } = res.data;

        this.setState({
            name,
            email,
            phone
        })

        console.log(res);
    }

    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        
        const { name, email, phone } = this.state;
        //Check for errors
        if(name === ''){
            this.setState({
                errors: {name: 'Name is undefined!'}
            });
            return;
        }
        if(phone === ''){
            this.setState({
                errors: {phone: 'Phone is undefined!'}
            });
            return;
        }
        if(email === ''){
            this.setState({
                errors: {email: 'Email is undefined!'}
            });
            return;
        }

        const { id } = this.props.match.params;

        let updContact = {
            name,
            phone,
            email 
        }

        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updContact)

        dispatch({type: 'UPDATE_CONTACT', payload: res.data});

        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });

        //redirect
        this.props.history.push('/');
    }

  render() {
    const { name, email, phone, errors} = this.state;
    
    return (
        <Consumer>
            {value => {
                const { dispatch } = value;
                return (
                    <div className="card mb-3">
                        <div className="card-header">Edit Contact</div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                
                                <TextInputGroup 
                                    label="Name"
                                    name="name"
                                    placeholder="Enter Name..."
                                    value={name}
                                    onChange={this.onChange}
                                    errors={errors.name}
                                />
                                <TextInputGroup 
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter Email..."
                                    value={email}
                                    onChange={this.onChange}
                                    errors={errors.email}
                                />
                                <TextInputGroup 
                                    label="Phone"
                                    name="phone"
                                    placeholder="Enter Phone..."
                                    value={phone}
                                    onChange={this.onChange}
                                    errors={errors.phone}
                                />

                                <input type="submit" value="Update Contract" className="btn btn-light btn-block"/>
                            </form>
                        </div>
                    </div>
                )
            }}
        </Consumer>
    )
  }
}

export default EditContact;