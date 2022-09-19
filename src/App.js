import React from 'react';


const title = 'siiiu';

const welcome = {
  greeting: title,
  title: 'React',
};

function getTitle(title) {
  return title;
}

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  return (
    <div>

      {/* <h1>Hello func {getTitle(title)}</h1>

      <hi>{welcome.greeting}{welcome.title}</hi>
      <h1>Hello {title}</h1> */}

      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
      {list.map(function (item) {
        return <div>{item.title}</div>;
      })}
      <hr />
      {/* {list.map(function (item) {
        return (
          <div key={item.objectID}>
            {item.title} + "1"
          </div>
        );
      })} */}
      {list.map(function (item) {
        return (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>
        );
      })}

    </div >
  );
}
export default App;