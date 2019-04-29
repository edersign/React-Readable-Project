import React, {lazy} from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Post = lazy(() => import('./Post'));
const PostEdit = lazy(() => import('./PostEdit'));

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="category/:category/" component={Post} />
    <Route exact path="/:category/:postId" component={Post} />
    <Route exact path="/edit/:postId" component={PostEdit} />
    <Route exact path="/about-us" component={About} />
  </Switch>
);
