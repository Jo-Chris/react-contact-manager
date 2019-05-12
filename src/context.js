import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT': 
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 0,
                name: 'Martina Schrimpflinger',
                email: 'martina.schripflinger@aon.at',
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
        ],

        dispatch: action => this.setState(state => reducer(state, action))
        
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

//so in other components just use <Consumer> for accessing the Context!
export const Consumer = Context.Consumer;