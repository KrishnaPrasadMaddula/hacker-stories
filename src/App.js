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


const dennis = new Developer('Dennis', 'Wieruch');




function getTitle(title) {
  return title;
}

const App = () => {

  const stories = [
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

  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || 'React' );

    React.useEffect(() => {
      localStorage.setItem('search', searchTerm);
      
    }, [searchTerm]);

  const handleSearch = event =>{
    console.log("From App: ", event.target.value)
    setSearchTerm(event.target.value);
  }

  const searchedStories = stories.filter(story => story.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="App">
      <h1>My Hacker Stories</h1>
      
<hr />
<Search onSearch={handleSearch} searchTerm = {searchTerm}/>
<List list={searchedStories} />

{/* <List/>

<List/> */}

    </div>
  );
};




const List = ({list}) => 
   list.map( item => <Item key={item.objectID} item={item}/>);
    
    

   const Item = ({item}) => (

    <div>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </div>

   );


const Search = ({onSearch ,searchTerm }) => {
  

  

return (
  <div>
  <label htmlFor="search">Search: </label>
      <input id="search" type="text" value={searchTerm} onChange={onSearch}/>
      <p > 
        Searching for <strong>{searchTerm}</strong>
      </p>
<hr />
</div>
);
};

export default App;
