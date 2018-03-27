import { 
    SUGGESTED_INFLUENCERS_FETCHED, 
    SUGGESTED_INFLUENCERS_FETCHING,
    SUGGESTED_INFLUENCER_MOVE
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
            };

        case SUGGESTED_INFLUENCER_MOVE:
            return {
                ...state,
                influencers: [...state.influencers].filter(item => 
                    item.influencer_id !== action.suggestedInfluencer.influencer_id)
            };

        default:
            return state;
    }
}

export default sugestedInfluencers;