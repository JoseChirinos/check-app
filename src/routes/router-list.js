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
const Carreras = Loadable({
  loader: ()=> import('../carreras'),
  loading: Loading
});
const RouterList = (props)=>{
  return(
    <Switch>
      <Route exact path="/" component={ Search }/>
      <Route exact path="/carreras" component={ Carreras }/>
      <Route component={NoMatch} />
    </Switch>        
  )
}


export default RouterList;
