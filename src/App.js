import logo from './logo.svg';
import './App.css';
import React from 'react';

class Developer{
  // firstName;
  // lastName;

  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName(){
    return this.firstName+ ' ' +this.lastName;
  }
}  

const robin = new Developer('Robin', 'Wieruch');

console.log(robin.getName());

const dennis = new Developer('Dennis', 'Wieruch');

console.log(dennis.getName());

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  },
];

function getTitle(title) {
  return title;
}

const App = () => {

const handleChange = event =>{
console.log(event.target.value);
}

  return (
    <div className="App">
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange}/>
<hr />

<List/>

<List/>

<List/>

    </div>
  );
};




const List = () => 
   list.map( item => (
    
      <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </div>
   
   ));




export default App;
