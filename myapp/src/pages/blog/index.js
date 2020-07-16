import React,{Component,Fragment} from 'react';

export default class BlogIndex extends Component {
  render(){
    const {location:{pathname}} = this.props;
    
    return(
      <Fragment>
        <h1>{pathname}</h1>
      </Fragment>
    )
  }
}