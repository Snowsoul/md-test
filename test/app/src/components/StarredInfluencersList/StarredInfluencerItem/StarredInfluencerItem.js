import React from 'react';
import InfluencerItem from '../../InfluencerItem/InfluencerItem';
import { RemoveButton } from '../../Buttons/Buttons';
import Statistic from '../../Statistic/Statistic';

import './StarredInfluencerItem.css';

const StarredInfluencerItem = () => {

    return (
        <div className="starred_influencer_wrapper">
            <div className='starredinfluenceritem_wrapper'>
                <div className="influencer_item_wrapper">
                    <InfluencerItem />
                </div>
                <div className="starred_influencer_utils">
                    <Statistic text="Engagement" value="6.84%" />
                    <Statistic />
                </div>
            </div>
            <div className="remove_button_wrapper">
                <RemoveButton />
            </div>
        </div>
    );

}

export default StarredInfluencerItem;