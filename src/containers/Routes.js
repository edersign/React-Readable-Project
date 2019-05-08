import React, {lazy} from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from '../components/load';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Post = lazy(() => import('./Post'));
const PostByCategory = lazy(() => import('./PostByCategory'));
const PostEdit = lazy(() => import('./PostEdit'));
const EditComment = lazy(() => import('./CommentEdit'));
const NotFound = lazy(() => import('./NotFound'));
const PostCreate = lazy(() => import('./PostCreate'));


export default () => (
  <React.Suspense fallback={<div><Loader /></div>}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/editcomment/:id" component={EditComment} />
      <Route exact path="/edit/:postId" component={PostEdit} />
      <Route exact path="/new" component={PostCreate} />
      <Route exact path="/:category/:postId" component={Post} />
      <Route exact path="/:category/" component={PostByCategory} />
      <Route path="*" component={NotFound} />
    </Switch>
  </React.Suspense>
);
