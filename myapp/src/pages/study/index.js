import React,{Component,Fragment} from 'react';
import {Button} from 'antd'
import {connect} from 'dva'

class StudyIndex extends Component {

  constructor(props){
    super(props)
    this.state = {
      userid:0
    }
  }

  getuserinfo = ()=>{
    const {dispatch} = this.props;
    dispatch({
      type:'user/getUserInfo',
      payload:{
        id:1600170201
      }
    })
  }

  getPromiseInfo = ()=>{
    const {dispatch} = this.props;
    dispatch({
      type:'user/getPromiseInfo',
      payload:{
        id:1600170201
      }
    }).then(({status,data:{userid}})=>{
      if(status===200){
        //console.log(userid)
        //express返回的userid=8888888
        this.setState({
          userid
        })
      }
    })
  }

  render(){
    const {location,userid} = this.props;
    
    return(
      <Fragment>
        <h1>{location.pathname}</h1>
        <h1>从service发来的userid,在this.props里：{this.props.userid}</h1>
        <Button size='large' onClick={this.getuserinfo}>按这个就发射user信息交互</Button>
        <br/>
        <br/>
        <hr/>
        <br/>
        <h1>从后台发来的userid,在this.state里：{this.state.userid}</h1>
        <Button size='large' onClick={this.getPromiseInfo}>按这个就尝试一下后台交互返回promise数据</Button>
      </Fragment>
    )
  }
}

export default connect((state)=>({
  userid:state.user.userid
}))(StudyIndex)