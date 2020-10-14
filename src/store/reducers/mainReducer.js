import {ADD_TO_TABLE} from "../actions/types";

const mainReducer=(state=[],action)=>{
if(action.type==='ADD_INPUT'){
    return [...state,action.value]
}
    if(action.type===ADD_TO_TABLE) {
        return {
            employees: [
                ...state.employees,
                {
                    firstName: action.firstName,
                    lastName: action.lastName,
                    Email: action.Email,
                    LastValue: action.LastValue
                }
            ]
        }
    }


if(action.type==='REMOVE_INPUT'){
    return state.filter(el=>el.id===action.id)
}
return state
}
export default mainReducer;
