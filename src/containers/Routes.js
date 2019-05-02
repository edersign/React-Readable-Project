import React, {lazy} from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Post = lazy(() => import('./Post'));
const PostByCategory = lazy(() => import('./PostByCategory'));
const PostEdit = lazy(() => import('./PostEdit'));
const EditComment = lazy(() => import('./CommentEdit'));

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about-us" component={About} />
    <Route exact path="/editcomment/:id" component={EditComment} />
    <Route exact path="/edit/:postId" component={PostEdit} />
    <Route exact path="/:category/:postId" component={Post} />
    <Route exact path="/:category/" component={PostByCategory} />
  </Switch>
);
