import { Redirect, Route, Switch } from "react-router-dom";
import FeedComponent from "./FeedComponent";
import CreateFeedComponent from "./CreateFeedComponent";
import FeedListComponent from "./FeedListComponent";

export default function LayoutComponent() {
    return (
        <Switch>
            <Route path={`/feeds`} component={FeedListComponent}/>
            <Route path={`/create-feed`} component={CreateFeedComponent}/>
            <Redirect path="/" to="/feeds"/>
        </Switch>
    );
}