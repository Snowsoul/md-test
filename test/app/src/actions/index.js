import { 
    SUGGESTED_INFLUENCERS_FETCHING, 
    SUGGESTED_INFLUENCERS_FETCHED,
    STARRED_INFLUENCERS_FETCHED,
    STARRED_INFLUENCERS_FETCHING,
    SORT_BY_CHANGE,
    STARRED_INFLUENCER_REMOVE
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

export const starredInfluencersFetching = () => ({ 
    type: STARRED_INFLUENCERS_FETCHING 
});

export const starredInfluencersFetched = (starredInfluencers) => ({ 
    type: STARRED_INFLUENCERS_FETCHED,
    starredInfluencers
});

export const removeInfluencer = (id) => ({ 
    type: STARRED_INFLUENCER_REMOVE,
    id
});

export const sortByChange = option => ({ type: SORT_BY_CHANGE, option });