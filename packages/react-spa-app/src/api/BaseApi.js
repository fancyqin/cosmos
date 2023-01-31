import Api from './index.js';

export function getListData(){
  return Api.get('/leagues');
}

export function getStanding(id){
  return Api.get(`/leagues/${id}/standings?season=2022&sort=asc`)
}