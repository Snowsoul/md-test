import { 
    SUGGESTED_INFLUENCERS_FETCHING, 
    SUGGESTED_INFLUENCERS_FETCHED 
} from './actionTypes';

export const addSuggestedInfluencerToStarred = () => ({});
export const removeStarredInfluencer = () => ({});

export const suggestedInfluencersFetching = () => ({ 
    type: SUGGESTED_INFLUENCERS_FETCHING 
});

export const suggestedInfluencersFetched = (suggestedInfluencers) => ({ 
    type: SUGGESTED_INFLUENCERS_FETCHED,
    suggestedInfluencers
});