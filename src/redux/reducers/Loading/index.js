import {START_LOADING,STOP_LOADING} from '../../../redux/actions/actionTypes';


const INITIAL_STATE = {
    loading : false
}


export default (state=INITIAL_STATE , action)=>{
    switch(action.type){
        case START_LOADING:
            return {...state , loading : true };
        case STOP_LOADING:
            return { ...state , loading : false };
        default:
            return state;
    }
}