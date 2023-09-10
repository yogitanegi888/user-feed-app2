import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import LoginRoute from './components/authentication/LoginRoute';
import ProtectedRoute from './components/authentication/ProtectedRoute';
import LayoutComponent from './components/layout/LayoutComponent';
import AuthenticationComponent from './components/authentication/AuthenticationComponent';

function App() {
  return (
    <Router>
      <Switch>
        <LoginRoute path="/auth" component={AuthenticationComponent} />
        <ProtectedRoute path="/" component={LayoutComponent} />
      </Switch>
    </Router>
  );
}

export default App;
