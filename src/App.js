import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import CardHolder from './Components/CardHolder/CardHolder';

class App extends Component {
  state = {
    content: [],
  }
  componentDidMount() {
    fetch('/books/all')
      .then((response) => {
        if (!response.ok) {
          console.log('network request failed');
        }
        console.log('#############', response, '##########3');
        return response;
      })

      .then((jsonRes) => {
        const obj = {
          books: [{
            id: 10, author: 'J K Rowling', name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)', rating: 4.45,
          }, {
            id: 20, author: 'J K Rowling', name: 'Harry Potter and the Chamber of Secrets (Harry Potter, #2)', rating: 4.38,
          }, {
            id: 80, author: 'Sidney Sheldon', name: 'If Tomorrow Comes (Tracy Whitney Series, #1)', rating: 4.02,
          }, {
            id: 100, author: 'Sidney Sheldon', name: 'Tell Me Your Dreams', rating: 3.93,
          }, {
            id: 30, author: 'J K Rowling', name: 'Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)', rating: 4.54,
          }, {
            id: 40, author: 'J K Rowling', name: 'Harry Potter and the Goblet of Fire (Harry Potter, #4)', rating: 4.53,
          }, {
            id: 90, author: 'Sidney Sheldon', name: 'Master of the Game', rating: 4.1,
          }, {
            id: 110, author: 'Sidney Sheldon', name: 'The Other Side of Midnight (Midnight #1)', rating: 3.9,
          }, {
            id: 50, author: 'J K Rowling', name: 'Harry Potter and the Order of the Phoenix (Harry Potter, #5)', rating: 4.47,
          }, {
            id: 60, author: 'J K Rowling', name: 'Harry Potter and the Half-Blood Prince (Harry Potter, #6)', rating: 4.54,
          }, {
            id: 70, author: 'J K Rowling', name: 'Harry Potter and the Deathly Hallows (Harry Potter, #7)', rating: 4.62,
          }, {
            id: 120, author: 'Sidney Sheldon', name: 'Rage of Angels', rating: 3.92,
          }],
        };
        this.setState({
          content: obj.books,
        });
        // this.props.save(JSON.stringify(jsonRes));
      });
  }
  render() {
    return (
      <div className="container" >
        <div>
          <SideBar />
          <Header />
          <CardHolder books={this.state.content} />
        </div>
      </div>
    );
  }
}

export default App;
