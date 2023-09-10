import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useLocation, useHistory, Link } from 'react-router-dom';
export default function RegistrationComponent() {

    let history = useHistory();

    const onSubmit = async (payload) => {
        let response = await axios.post('http://localhost:8000/apis/UserRegistration', payload);
        formik.resetForm();
        alert(response.data.message)
        if (response.data.success) {
            history.push('/auth/login');
        }
    }

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            interestedFeeds: [],
        },
        onSubmit
    });

    return (
        <div>
            <h4>Registration</h4>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Name</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                    />
                </div>
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
                <div className="col form-group">
                        <label htmlFor="">My Interests</label>
                        <div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" name="interestedFeeds" onChange={formik.handleChange} id="inlineCheckbox1" value="bollywood" />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Bollywood</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" name="interestedFeeds"  onChange={formik.handleChange} id="inlineCheckbox2" value="music" />
                                <label className="form-check-label" htmlFor="inlineCheckbox2">Music</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" name="interestedFeeds" onChange={formik.handleChange} id="inlineCheckbox3" value="politics" />
                                <label className="form-check-label" htmlFor="inlineCheckbox3">Politics</label>
                            </div>
                        </div>
                    </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            <Link to="../login" className="btn btn-secondary my-3"> Login</Link>
        </div>
    );
}
