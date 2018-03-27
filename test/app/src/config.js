export default {
    status: {
        ok: "success",
        err: "error"
    },
    api: {
        suggestedInfluencersEndpoint: "/exampleData/suggested_influencers.json",
        starredInfluencersEndpoint: "/exampleData/starred_influencers.json",
        addInfluencerEndpoint: id => `/exampleData/add_influencer_response_${id}.json`
    }
}