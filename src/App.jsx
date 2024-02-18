import React from "react";
import { Home, Login, Signup,ResetPassword,ResetPasswordConfirm,Activate,AboutUs,ContactUs,TradeShowsPage, ServicesPage, Apps} from "./pages";
import { BrowserRouter, Route, Switch, useLocation,Redirect } from "react-router-dom"; // Import useLocation
import { Provider } from "react-redux";
import store from "./components/store";

const App = () => {
  const location = useLocation(); // Use useLocation hook to access location
  const isLoginPage = location.pathname === "/login";

  return (
    <Provider store={store}>
    <BrowserRouter>
    {/* Pass a prop to indicate whether the background image should be displayed */}
    <Switch>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/apps" component={Apps}/>
      <Route exact path="/services" component={ServicesPage}/>
      <Route exact path="/tradeshows" component={TradeShowsPage}/>
      <Route exact path="/about" component={AboutUs}/>
      <Route exact path="/contact" component={ContactUs}/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/reset-password" component={ResetPassword} />
      <Route exact path="/password/reset/confirm/:uid/:token" component={ResetPasswordConfirm} />
      <Route exact path='/activate/:uid/:token' component={Activate} />
      <Redirect to="/" /> 
      {/* Redirect to the homepage if no matching route */}
    </Switch>
  </BrowserRouter>
  </Provider>
  );
};

export default App;
