import { 
    SUGGESTED_INFLUENCERS_FETCHED, 
    SUGGESTED_INFLUENCERS_FETCHING 
} from '../actions/actionTypes';

const defaultState = {
    loading: false,
    influencers: []
};

const sugestedInfluencers = (state = defaultState, action) => {
    switch (action.type) {
        case SUGGESTED_INFLUENCERS_FETCHING:
            return {
                ...state,
                loading: true
            };

        case SUGGESTED_INFLUENCERS_FETCHED:
            return {
                ...state,
                loading: false,
                influencers: action.suggestedInfluencers
            }
        default:
            return state;
    }
}

export default sugestedInfluencers;