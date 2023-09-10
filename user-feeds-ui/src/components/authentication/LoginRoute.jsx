import { Redirect, Route } from 'react-router-dom';
import authenticationService from '../../services/authentication-service';

export default function LoginRoute(props) {
    return authenticationService.isAuthenticated ? <Redirect to={{pathname: '/'}}/> : <Route {...props}/>
}