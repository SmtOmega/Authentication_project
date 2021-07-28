import { Link } from "react-router-dom";
import { useUserGlobalContext } from "../store/context";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const { isLoggedIn, logoutHandler } = useUserGlobalContext();

  const logout = () => {
    logoutHandler()
  }

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}

          {isLoggedIn && (
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
