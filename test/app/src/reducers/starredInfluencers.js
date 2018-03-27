import { 
    STARRED_INFLUENCERS_FETCHED, 
    STARRED_INFLUENCERS_FETCHING 
} from '../actions/actionTypes';

const defaultState = {
    loading: false,
    influencers: []
};

const starredInfluencers = (state = defaultState, action) => {
    switch (action.type) {
        case STARRED_INFLUENCERS_FETCHING:
            return {
                ...state,
                loading: true
            };

        case STARRED_INFLUENCERS_FETCHED:
            return {
                ...state,
                loading: false,
                influencers: action.starredInfluencers
            }
        default:
            return state;
    }
}

export default starredInfluencers;