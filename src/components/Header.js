import "./Header.css";
import Link from "./Link.js";

function Header({ logo }) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Link url="htttps://reactjs.org" title="Learn React" />
    </header>
  );
}

export default Header;
