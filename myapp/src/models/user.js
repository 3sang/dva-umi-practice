import * as service from '../service/user';

export default{
  namespace:'user',

  state:{
    userid:0
  },

  effects:{
    * getUserInfo({payload},{call,put,select}){
      const data =  yield call(service.getUserInfo,payload);
      yield put({
        type:'userstore',
        data
      })
    },

    * getPromiseInfo({payload},{call,put}){
      return yield call(service.getPromiseInfo,payload);
    }
  },

  reducers:{
    userstore:(state,{data})=>{
      return{
        ...state,
        ...data
      }
    }
  }
}