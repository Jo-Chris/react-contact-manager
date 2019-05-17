import React, { Component } from 'react'

class AddContact extends Component {

    constructor(props) {
        super(props);

        this.nameInput = React.createRef();
        this.phoneInput = React.createRef();
        this.emailInput = React.createRef();
    }

    onSubmit = (e) => {
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value
        }

        console.log(contact);
    };

    static defaultProps = {
        name: 'Fred Smith',
        email: 'fred@smit.at',
        phone: '223-1-231-312'
    }

  render() {

    const { name, email, phone } = this.props;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label> Name </label>
                    <input 
                        type="text" 
                        name="name"
                        className="form-control corm-control-lg"
                        placeholder="Enter Name..." 
                        defaultValue={name}
                        ref={this.nameInput}/>
                </div>
                <div className="form-group">
                    <label> Email </label>
                    <input 
                        type="email" 
                        name="email"
                        className="form-control corm-control-lg"
                        placeholder="Enter Email..."
                        defaultValue={email} 
                        ref={this.emailInput}/>
                </div>
                <div className="form-group">
                    <label> Phone </label>
                    <input 
                        type="text" 
                        name="phone"
                        className="form-control corm-control-lg"
                        placeholder="Enter Phone..." 
                        defaultValue={phone}
                        ref={this.phoneInput}/>
                </div>

                <input type="submit" value="Add Contract" className="btn btn-light btn-block"/>
            </form>
        </div>
      </div>
    )
  }
}

export default AddContact;