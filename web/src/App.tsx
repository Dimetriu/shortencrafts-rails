import React from 'react';
import logo from './logo.svg';
import './App.css';

// const App: React.FC = () => {

//   // const hi = (e: any) => {
//   //   e.preventDefault();

//   //   window.fetch('api/v1')
//   //     .then(res => res.json())
//   //     .then(json => console.log(json))
//   //     .catch(error => console.log(error));
//   // }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {}
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  componentDidMount() {
    window.fetch('api/v1')
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );}
}

export default App;
