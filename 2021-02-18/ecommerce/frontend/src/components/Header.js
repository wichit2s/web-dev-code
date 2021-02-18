import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const userSignin = useSelector(state => state.userSignin);
  const { user } = userSignin;
  return (
    <header className="header">
      <div className="brand">
        <button>
          &#9776;
        </button>
        <Link to="/">amazona</Link>
      </div>
      <div className="header-links">
        <a href="cart.html">Cart</a>
        { user?  <Link to="/profile"> {user.name} </Link> : <Link to="/signin">Sign In</Link>
        }
      </div>
    </header>
  );
}

export default Header;
