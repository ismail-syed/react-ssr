import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TopicDetail from '../views/topicDetail/index';
import TopicList from '../views/topicList/index';

export default () => [
  <Route path="/" exact render={() => <Redirect to="/list" />} key="first"></Route>,
  <Route path="/list" component={TopicList} key="list"></Route>,
  <Route path="/detail" component={TopicDetail} key="detail"></Route>
]