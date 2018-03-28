import * as actions from './';
import * as types from './actionTypes';

const testSuggestedInfluencer = {
    "influencer_id": 123,
    "influencer_full_name": "Hannah Ross",
    "influencer_instagram_username": "hross64346",
    "influencer_instagram_profile_image": "https://randomuser.me/api/portraits/women/62.jpg"
};

describe('actions', () => {
    it('should create an action to remove a starred influencer', () => {
        const id = 2
        const expectedAction = {
            type: types.STARRED_INFLUENCER_REMOVE,
            id
        }

        expect(actions.removeInfluencer(id)).toEqual(expectedAction)
    })

    it('should create an action to move a suggested influencer to the starred influencer list', () => {
        const suggestedInfluencer = testSuggestedInfluencer;

        const expectedAction = {
            type: types.SUGGESTED_INFLUENCER_MOVE,
            suggestedInfluencer
        }
        
        expect(actions.moveSuggestedInfluencerToStarred(suggestedInfluencer)).toEqual(expectedAction)
    })
});