import {createStore,combineReducers} from 'redux'
import inputReducer from './reducers/inputReducer.js'
import mainReducer from './reducers/mainReducer.js'
const initialState = {
  employees: [
    {
      employee: {
        firstName: '',
        lastName: '',
        Email: '',
        LastValue: ""
      }
    }
  ]
};
// const store=createStore(combineReducers({
//   input:inputReducer,
//   main:mainReducer
// }),initialState)
function reducers(state){
  return state;
}

const store = createStore(mainReducer, initialState);
export default store
