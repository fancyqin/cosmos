import Api from './index.js';

export function getListData(){
  return Api.get('/rockets');
}

export function getStanding(id){
  return Api.get(`/rockets/${id}`)
}