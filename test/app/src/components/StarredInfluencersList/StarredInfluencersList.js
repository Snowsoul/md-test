import React from 'react';
import SortSelect from '../SortSelect/SortSelect';
import StarredInfluencerItem from './StarredInfluencerItem/StarredInfluencerItem';

import './StarredInfluencersList.css';

class StarredInfluencersList extends React.Component {
    render() {
        return (
            <div className='starredinfluencerslist_wrapper'>
                <header>
                    <h2> Starred Influencers </h2>
                    <div className="sort_wrapper">
                        <SortSelect />
                    </div>
                </header>
                <section>
                    <StarredInfluencerItem />
                    <StarredInfluencerItem />
                </section>
            </div>
        );
    }
}

export default StarredInfluencersList;