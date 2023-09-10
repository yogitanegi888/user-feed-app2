import '../../styles/authentication-page.css';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import LoginComponent from './LoginComponent';
import RegistrationComponent from './RegistrationComponent';
export default function AuthenticationComponent() {
    let { path, url } = useRouteMatch();
    return (
        <div className='auth-container'>
            <div className="form-container">
                <h3 className="text-center">Welcome to Users Feed App</h3>
                <Switch>
                    <Route exact path={`${path}/login`} component={LoginComponent} />
                    <Route exact path={`${path}/registration`} component={RegistrationComponent} />
                </Switch>
            </div>
        </div>
    );
}