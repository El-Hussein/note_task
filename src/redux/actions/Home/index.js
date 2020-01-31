import { START_LOADING, STOP_LOADING, FETCH_NOTES, EDIT_NOTE, ADD_NOTE, DELETE_NOTE } from "../actionTypes"
import { get_request, post_request, put_request, delete_request } from '../../../services/api'
import { toast } from "../../../utils/Toast"

export const FetchNotes = () => {
    return async (dispatch) => {
        dispatch({ type: START_LOADING });
        /**
         * request go here--->
         * const response = await get_request({ target: 'notes' })
         * if (response) {
         *     dispatch({ type: FETCH_NOTES, payload: response })
         * }else{
         *     toast('errorInConnection')
         * }
         *  */
        dispatch({ type: FETCH_NOTES, payload:[] });
        dispatch({ type: STOP_LOADING });
    }
}

export const AddNoteAction = (data) => {
    console.log("************* ADD NOTE DATA *************")
    console.log(data)
    console.log("************* ADD NOTE DATA *************")
    return async (dispatch) => {
        dispatch({ type: START_LOADING });
        /**
         * request go here--->
         * const response = await post_request({ target: 'note/add', data })
         * if (response) {
         *     dispatch({ type: ADD_NOTE, payload: response })
         * }else{
         *     toast('errorInConnection')
         * }
         *  */ 
        
        dispatch({ type: ADD_NOTE, payload: data });
        dispatch({ type: STOP_LOADING });
        
    }
}

export const EditNoteAction = (data) => {
    console.log("************* EDIT NOTE DATA *************")
    console.log(data)
    console.log("************* EDIT NOTE DATA *************")
    return async (dispatch) => {
        dispatch({ type: START_LOADING });
        /**
         * request go here--->
         * const response = await put_request({ target: `note/${id}/edit`, data })
         * if (response) {
         *     dispatch({ type: EDIT_NOTE, payload: response })
         * }else{
         *     toast('errorInConnection')
         * }
         *  */ 
        
        dispatch({ type: EDIT_NOTE, payload: data });
        dispatch({ type: STOP_LOADING });
        
    }
}

export const DeleteNoteAction = (id) => {
    console.log("************* DELETE NOTE ID *************")
    console.log(id)
    console.log("************* DELETE NOTE ID *************")
    return async (dispatch) => {
        dispatch({ type: START_LOADING });
        /**
         * request go here--->
         * const response = await delete_request({ target: `note/${id}/delete` })
         * if (response) {
         *     dispatch({ type: DELETE_NOTE, payload: response })
         * }else{
         *     toast('errorInConnection')
         * }
         *  */ 
        
        dispatch({ type: DELETE_NOTE, payload: id });
        dispatch({ type: STOP_LOADING });
        
    }
}
