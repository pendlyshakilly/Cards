import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { appActions } from "app/app.slice";

import { Register } from "features/auth/Register/Register";
import { Link } from "react-router-dom";

import Profile from "features/profile/Profile";


function App() {
  const isLoading = useAppSelector((state) => state.app.isLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(appActions.setIsLoading({ isLoading: false }));
    }, 3000);
  }, []);

  //Login test
  //test github

  return (
    <div className="App">
      {isLoading && <h1>Loader...</h1>}
      {<Link to={'/register'}> Register</Link>}
      {<Link to={'/login'}> login</Link>}
      {<Link to={'/forgot-password'}> forgot</Link>}
      {<Link to={'/check-email'}> checkMail</Link>}
      {<Link to={'/create-new-password'}> CreatePass</Link>}
      {/*<Counter />*/}
 {/* <Register/>*/}
      <Profile/>
    </div>
  );
}

export default App;
