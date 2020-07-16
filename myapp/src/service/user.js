import axios from 'axios'

export function getUserInfo (payload){
  // console.log("service-getUserInfo:"+payload.id)
  return {userid:1600170000}
}

export async function getPromiseInfo (payload){
  return axios.get(`http://localhost:3000/study/${payload.id}`)
}