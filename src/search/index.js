import React, { Component } from 'react';

import InputSearch from './input-search';
import Result from './result';
class Search extends Component{
  render(){
    return(
      <section>
        <InputSearch/>
        <Result open={true} />
      </section>
    )
  }
};

export default Search;