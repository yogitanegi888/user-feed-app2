import { Redirect, Route, RouteProps } from 'react-router-dom';
import authenticationService from '../../services/authentication-service';

export default function ProtectedRoute(props) {
    return authenticationService.isAuthenticated ? <Route {...props} /> : <Redirect to={{ pathname: '/auth/login' }} />
}