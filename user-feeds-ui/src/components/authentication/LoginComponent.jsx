import axios from 'axios';
import { useFormik } from 'formik';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import authenticationService from '../../services/authentication-service';

export default function LoginComponent() {
    let history = useHistory();

    const onSubmit = async (payload) => {
        let result = await authenticationService.signIn(payload);
        if (result) {
            history.push('/');
        }
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit
    });


    return (
        <div>
            <h4>Login</h4>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Login</button>
            </form>
            <Link to="/auth/registration" className="btn btn-secondary my-3">Register</Link>
        </div>
    );
}