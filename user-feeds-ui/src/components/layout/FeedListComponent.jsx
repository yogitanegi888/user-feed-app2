import axios from "axios";
import React, { useEffect, useState } from "react";
import authenticationService from "../../services/authentication-service";
import { Link, Route, useHistory, useRouteMatch } from "react-router-dom";
import CreateFeedComponent from "./CreateFeedComponent";
import './feed.css';
import FeedComponent from "./FeedComponent";
export default function FeedListComponent() {
    let [feeds, setFeeds] = useState([]);
    let { path } = useRouteMatch();
    let history = useHistory();
    useEffect(() => {
        // Make the API request when the component mounts
        fetch('http://localhost:8000/apis/get-userfeedstList', {
            headers: {
                'Authorization': `Bearer ${authenticationService.token}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    setFeeds(data.data);    
                } else {
                    alert('unable to fetch feeds');
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleLogout = async () => {
        await authenticationService.logout();
        history.push('/auth/login');
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h5>Hi, {authenticationService.user.username}</h5>
                </div>
                <div className="col">
                    <button className="btn btn-sm btn-danger" onClick={handleLogout}>Logout</button>
                </div>
            </div>
            <h6>Your Feeds</h6>
            <Link to={`create-feed`} className="btn btn-link" >Create New Feed</Link>
            <Route path={`/create-feed`} component={CreateFeedComponent} />
            <div className="feed-container p-3">
                {feeds.map((feed, index) => <FeedComponent feed={feed} key={index} />)}
            </div>
        </div>
    );
}