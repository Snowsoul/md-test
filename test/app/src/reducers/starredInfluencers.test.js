import reducer from './starredInfluencers'
import * as types from '../actions/actionTypes'

const suggestedInfluencer = {
    "influencer_id": 123,
    "influencer_full_name": "Hannah Ross",
    "influencer_instagram_username": "hross64346",
    "influencer_instagram_profile_image": "https://randomuser.me/api/portraits/women/62.jpg",
    "statistics": {
      "followers": 102523,
      "engagement": "3.14"
    }
};

describe('starred influencers reducer', () => {
    it('should handle SUGGESTED_INFLUENCER_MOVE', () => {
        expect(
            reducer({
                sortBy: { value: null },
                influencers: []
            }, {
                type: types.SUGGESTED_INFLUENCER_MOVE,
                suggestedInfluencer
            }))
            .toEqual({
                    sortBy: { value: null },
                    influencers: [{
                        "influencer_id": 123,
                        "influencer_full_name": "Hannah Ross",
                        "influencer_instagram_username": "hross64346",
                        "influencer_instagram_profile_image": "https://randomuser.me/api/portraits/women/62.jpg",
                        "statistics": {
                            "followers": 102523,
                            "engagement": "3.14"
                        }
                    }]
            })
    })
});