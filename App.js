import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';


class App extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      amount: '',
      allData: []
    }
  }

  componentDidMount() {
		const db = firebase.database();
    const rootRef = db.ref('react');
    const speedRef = rootRef.child('moneySpent');
    speedRef.on('value', snap => {
      const tempArray = [...this.state.allData];
      tempArray.push(snap.val());
      this.setState({allData: tempArray})
    });
  }

  newLineItem() {
    const newItem = {
      category: this.state.category,
      amount: this.state.amount
    };
    let tempArray = [...this.state.allData];
    tempArray.push(newItem);
    this.setState({allData: tempArray}, () => console.log(this.state.allData));
  }

  render() {
    const {allData} = this.state;
    const itemList = (
      <div>
				{allData.map((item) =>
          <div style={{display: 'flex'}}>
            <div>{item.category}</div>
            <div>{item.amount}</div>
          </div>
				)}
      </div>
    );
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.category}
          onChange={t => this.setState({category: t.target.value})}/>
        <input
          type="number"
          value={this.state.amount}
          onChange={t => this.setState({amount: t.target.value})}/>
        <button onClick={() => {this.newLineItem()}}>Submit</button>
        <hr/>
        {itemList}
      </div>
    );
  }
}

export default App;
