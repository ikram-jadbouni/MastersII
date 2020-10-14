import {ADD_TO_TABLE} from './types'
export function addToTable(firstName,lastName,Email,LastValue){
    return {
        type: ADD_TO_TABLE,
        firstName,
        lastName,
        Email,
        LastValue

    }
}
