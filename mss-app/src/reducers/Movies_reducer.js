import { MOVIES } from "../actions";
export default function movies(state = [],action){
    switch(action.type){
        case MOVIES:
            console.log("Movie are",action.items);
            return action.items;
        default:
            return state;
    }
}