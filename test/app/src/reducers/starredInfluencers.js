import { 
    STARRED_INFLUENCERS_FETCHED, 
    STARRED_INFLUENCERS_FETCHING,
    STARRED_INFLUENCER_REMOVE,
    SORT_BY_CHANGE,
    SUGGESTED_INFLUENCER_MOVE
} from '../actions/actionTypes';

const defaultState = {
    loading: false,
    sortBy: { value: 'engagementDesc' },
    influencers: []
};

// Cache object for sorting when the data is being fetched
const influencers = {
    initial: [],
    engagementAsc: [],
    engagementDesc: [],
    followersAsc:[],
    followersDesc: []
};

// Compare functions
const engagementDescCompare = (a, b) => {
    return parseFloat(b.statistics.engagement) - parseFloat(a.statistics.engagement);
}

const engagementAscCompare = (a, b) => {
    return parseFloat(a.statistics.engagement) - parseFloat(b.statistics.engagement);
}

const followersDescCompare = (a, b) => {
    return b.statistics.followers - a.statistics.followers;
}

const followersAscCompare = (a, b) => {
    return a.statistics.followers - b.statistics.followers;
}

const sortList = (list, compare) => [...list].sort(compare);

const cacheSortByLists = (list) => {
    influencers.engagementDesc = sortList(list, engagementDescCompare);
    influencers.engagementAsc = sortList(list, engagementAscCompare);            
    influencers.followersDesc = sortList(list, followersDescCompare);
    influencers.followersAsc = sortList(list, followersAscCompare);    
}

const starredInfluencers = (state = defaultState, action) => {
    switch (action.type) {
        case STARRED_INFLUENCERS_FETCHING:
            return {
                ...state,
                loading: true
            };

        case STARRED_INFLUENCERS_FETCHED:

            // Cache the lists and prepare it for the sort by filter
            influencers.initial = [...action.starredInfluencers];
            cacheSortByLists(action.starredInfluencers);  

            return {
                ...state,
                loading: false,
                influencers: influencers[state.sortBy.value]
            };
        
        case SORT_BY_CHANGE:
            // If the user removes the sort filter, 
            // then we should show the data sorted as is from the API
            if (!action.option)
                return {
                    ...state,
                    sortBy: { value: null },
                    // Make this only apply if the user 
                    // has not added a suggested influencer already
                    influencers: influencers.initial.length !== state.influencers.length
                                ? state.influencers 
                                : influencers.initial
                }

            return {
                ...state,
                sortBy: { value: action.option.value },
                influencers: influencers[action.option.value]
            }

        case STARRED_INFLUENCER_REMOVE:
            const listWithoutItem = [...state.influencers]
                .filter(item => item.influencer_id !== action.id);
            
            // Update sort by lists every time an item is being removed
            cacheSortByLists(listWithoutItem);

            return {
                ...state,
                influencers: listWithoutItem
            }

        case SUGGESTED_INFLUENCER_MOVE:
        
            // If there is no sort by value then just add it on the normal state list
            // and update the cache with new sorted values if the user decides on applying the
            // sort by filter.

            if (!state.sortBy.value)
            {
                const listWithItem = [
                    ...state.influencers,
                    action.suggestedInfluencer,
                ];

                cacheSortByLists(listWithItem);
                
                return {
                    ...state,
                    influencers: listWithItem
                };

            }

            // If there is a sort by value, then use the already sorted array
            // and add the element at the end of that list then do the sort by cache
            const listWithItem = [
                ...influencers[state.sortBy.value],
                action.suggestedInfluencer,
            ]
            
            cacheSortByLists(listWithItem);

            // Making sure that I am using the right data that was just sorted by
            // cacheSortByLists() method by accessing influencers[state.sortBy.value] 
            return {
                ...state,
                influencers: [...influencers[state.sortBy.value]]
            }

        default:
            return state;
    }
}

export default starredInfluencers;