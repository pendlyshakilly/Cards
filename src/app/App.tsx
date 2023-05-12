import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { Link, Navigate } from "react-router-dom";
import { authThunks } from "features/auth/auth.slice";
import { Routing } from "common/components/routing/Routing";
import { HeaderBar } from "common/components/HeaderBar/HeaderBar";


function App() {
  const isLoading = useAppSelector((state) => state.app.isLoading);
  // const navigate = useNavigate()
  const dispatch = useAppDispatch();
  //
  // useEffect(() => {
  //  dispatch(authThunks.authMeAPI()).then(()=>{
  //  return   navigate('/profile')
  //  },)
  //
  // }, []);
  useEffect(() => {
    dispatch(authThunks.authMeAPI()).then((res) => {
     return <Navigate to={'/profile'}/>
    });
  }, []);


  return (
    <div className="App">
      <HeaderBar/>
        <Routing/>
      {isLoading && <h1>Loader...</h1>}
      {<Link to={'/register'}> Register</Link>}
      {<Link to={'/login'}> login</Link>}
      {<Link to={'/forgot-password'}> forgot</Link>}
      {<Link to={'/check-email'}> checkMail</Link>}
      {<Link to={'/create-new-password'}> CreatePass</Link>}
      {<Link to={'/profile'}> Profile</Link>}
        {<Link to={'/packs'}>packs</Link>}

    </div>
  );
}



export default App;
