import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authThunks } from "features/auth/auth.slice";
import { Routing } from "common/components/routing/Routing";
import { HeaderBar } from "common/components/HeaderBar/HeaderBar";
import { useAppDispatch, useAppSelector } from "common/hooks";
import LinearProgress from "@mui/material/LinearProgress";


function App() {
    console.log('APP');

  const isLoading = useAppSelector((state) => state.app.isLoading);

 const navigate = useNavigate()
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authThunks.authMeAPI())
      .then((res) => {
     return navigate('/profile')
    });
  }, []);





    //Login test
  //test github


  return (
    <div className="App">
      <HeaderBar/>
      {isLoading && <LinearProgress style={{color:"black", margin:''}} color="secondary" /> }
      <Routing/>


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
