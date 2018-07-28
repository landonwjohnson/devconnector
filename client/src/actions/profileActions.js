import axios from 'axios';
import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE } from './types';


// Profile loading
export const setProfileLoading = () => {
    return {
        type: CLEAR_CURRENT_PROFILE
    }
}

// Clear profile loading
export const clearCurrentProfile = () => {
    return {
        type: PROFILE_LOADING
    }
}

// Get current profile
export const getCurrentProfile = () => {
    dispatch(setProfileLoading())
    axios
        .get('/api/profile')
        .then(res => 
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        )
        .catch(err => 
            dispatch({
                type: GET_PROFILE,
                payload: {}
            }) 
        );
}

