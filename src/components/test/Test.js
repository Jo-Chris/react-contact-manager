import React, { Component } from 'react'
import { deprecate } from 'util';

class Test extends Component {

    state = {
        title: '',
        body: ''
    }

 //do fetch calls, http requests etc. putting into component state
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(data => this.setState({
        title: data.title,
        body: data.body
    }));
     
  }
 /* 
  //runs before did mount!
  //DEPRECATED
  componentWillMount() {
      console.log('will mount...')
  }

  componentDidUpdate() {
      console.log('updated!');
  }

  //DEPRECATED
  componentWillUpdate() {
        console.log(' will updated ...');
  }
  
  //DEPRECATED
  componentWillReceiveProps(nextProps, nextState){
    console.log(' will receive props ...');
  }

  //alternative zu willReceiveProps
  static getDerivedStateFromProps(nextProps, prevState){
    return null;
  }

  //fires before the dom updates
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log(' getSnapshotBeforeUpdate');
  }
 */



  render() {
      const {title, body} = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    )
  }
}

export default Test;