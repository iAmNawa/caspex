import React, { Component } from 'react';
import List from './components/List';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    url: '',
    title: '',
    elements: []
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ elements: [...this.state.elements, [this.state.url,this.state.title]] })
  }

  render() {
    return (
      <div className="App">
        <form className="form-parent" onSubmit={this.onSubmit}>
            <input
              className="input-child"
              type="text"
              placeholder="URL"
              name="url"
              value={this.state.url}
              onChange={this.onChange}
            />
            <input
              className="input-child"
              type="text"
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          <input type="submit" value="New Post" />
        </form>
          <List listOfImages={this.state.elements} />
      </div>
    );
  }
}

export default App;
