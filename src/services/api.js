import axios from 'axios';
 
//http://localhost:3333/tasks
 
const api = axios.create({
  //baseURL: 'http://localhost:3333/'
  baseURL: 'https://hotelsantos.herokuapp.com/'
});
 
export default api;