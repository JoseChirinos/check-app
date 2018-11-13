import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
/* code splitting */
import Loadable from 'react-loadable';
/*loading*/
import Loading from '../common/loading';
/*404 error*/
import NoMatch from '../common/notmatch';

/* Search */
const Search = Loadable({
  loader: ()=> import('../search'),
  loading: Loading
});
/* Manillas */
const Manillas = Loadable({
  loader: ()=> import('../manillas'),
  loading: Loading
});
/* Users */
const Users = Loadable({
  loader: ()=> import('../users'),
  loading: Loading
});
/* Carreras */
const Carreras = Loadable({
  loader: ()=> import('../carreras'),
  loading: Loading
});
const RouterList = (props)=>{
  return(
    <Switch>
      <Route exact path="/" component={ Manillas }/>
      <Route exact path="/carreras" component={ Carreras }/>
      <Route exact path="/users" component={ Users }/>
      <Route component={NoMatch} />
    </Switch>        
  )
}


export default RouterList;
