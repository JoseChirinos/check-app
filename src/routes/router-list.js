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

/*Home Page*/
const HomePage = ()=>(
  <div style={{height:'150vh'}}>Home</div>
);
/* Statistics */
const Search = Loadable({
  loader: ()=> import('../search'),
  loading: Loading
});
const RouterList = (props)=>{
  return(
    <Switch>
      <Route exact path="/" component={ Search }/>
      <Route component={NoMatch} />
    </Switch>        
  )
}


export default RouterList;
