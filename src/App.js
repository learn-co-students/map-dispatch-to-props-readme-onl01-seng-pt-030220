import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick = event => {
    this.props.addItem()//this.props.store.dispatch(addItem());
  }

  render() {
    
    return (
      <div className="App">
        <button onClick={this.handleOnClick}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

/*
const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

this equals {state => ({items: state.items})}
*/

/*
const mapDispatchToProps = dispatch => {
  return {
    addItem: () => {
      dispatch(addItem())
    }
  };
};

this equald {addItem} in ES6*/

export default connect(state => ({items: state.items}), {addItem})(App);
