import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>
          me gusta el te
        </h1>
        <div>
          <ul className='ul'>a</ul>
          <ul className='ul'>a</ul>
          <ul className='ul'>a</ul>
          <ul className='ul'>a</ul>
          <ul className='ul'>a</ul>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          hir a react.com
        </a>
      </header>
    </div>
  );
}

export default App;
