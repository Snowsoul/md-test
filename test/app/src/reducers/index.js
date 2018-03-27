import { combineReducers } from 'redux'
import suggestedInfluencers from './suggestedInfluencers';
import starredInfluencers from './starredInfluencers';

const reducers = combineReducers({
    suggestedInfluencers,
    starredInfluencers
})
  
export default reducers;