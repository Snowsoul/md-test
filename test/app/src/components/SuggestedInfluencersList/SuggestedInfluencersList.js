import React from 'react';
import SuggestedInfluencerItem from './SuggestedInfluencerItem/SuggestedInfluencerItem';
import './SuggestedInfluencersList.css';

class SuggestedInfluencersList extends React.Component {
    render() {
        return (
            <div className='suggestedinfluencerslist_wrapper'>
                <header>
                    <h2> Suggested Influencers </h2>
                </header>
                <section>
                    <SuggestedInfluencerItem />
                    <SuggestedInfluencerItem />
                    <SuggestedInfluencerItem />
                </section>
            </div>
        );
    }
}

export default SuggestedInfluencersList;