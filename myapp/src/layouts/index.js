import { PureComponent, Fragment} from 'react';
import BasicLayout from './baseLayout/index'
import BlogLayout from './BlogLayout';

export default class Layouts extends PureComponent {
  render(){
    // console.log(this.props)
    const {location:{pathname}} = this.props;
    let layout;

    switch (pathname) {
      case('/study'):
        layout = <BlogLayout {...this.props} />;
        break;
      case('/blog'):
        layout = <BlogLayout {...this.props} />;
        break;
      default:
        layout = <BasicLayout {...this.props} />;
        break;
    }

    
    return(
      <Fragment>
        {layout}
      </Fragment>
    )
  }
}