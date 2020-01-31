import { FETCH_NOTES, EDIT_NOTE, ADD_NOTE, DELETE_NOTE } from '../../actions/actionTypes';


// set initial state
const INITIALSTATE = {
    notes: [],
    error:'',
}


export default (state = INITIALSTATE, action) => {
    switch (action.type) {

        case FETCH_NOTES:
            return { notes: action.payload };
        
        case ADD_NOTE:
            console.log('ADD NOTE ')
            console.log([action.payload, ...state.notes])
            console.log('ADD NOTE ')
            return { notes: [action.payload, ...state.notes] };
        
        case EDIT_NOTE:{
            let newNotes = [];
            state.notes.map((i)=>{
                newNotes.push(action.payload.id==i.id?action.payload:i);
            });
            return { notes: newNotes };
        }
        
        case DELETE_NOTE:{
            let newNotes = [];
            state.notes.map((i)=>{
                if(action.payload==i.id)
                    return;
                else
                    newNotes.push(i);
            });
            return { notes: newNotes };
        }

        default:
            return state;
    }

}