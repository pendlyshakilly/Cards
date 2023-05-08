import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { Link, useNavigate } from "react-router-dom";
import { authThunks } from "features/auth/auth.slice";


function App() {

  const isLoading = useAppSelector((state) => state.app.isLoading);
    const navigate = useNavigate()
  const dispatch = useAppDispatch();

  useEffect(() => {
   dispatch(authThunks.authMeAPI()).then(()=>{
   return   navigate('/profile')
   },)

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
      {<Link to={'/profile'}> Profile</Link>}
      {/*<Counter />*/}
 {/* <Register/>*/}

    </div>
  );
}



export default App;
