import {Link} from 'react-router-dom';

const Header = () => {
    return (
      <header>
        <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group" />
        <h1>Sup de vinci</h1>
  
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contacts</Link></li>
            <li><Link to="/CGV">CGV</Link></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;