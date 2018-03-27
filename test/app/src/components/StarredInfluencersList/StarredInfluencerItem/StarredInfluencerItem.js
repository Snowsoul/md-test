import React from 'react';
import InfluencerItem from '../../InfluencerItem/InfluencerItem';
import { RemoveButton } from '../../Buttons/Buttons';
import Statistic from '../../Statistic/Statistic';

import './StarredInfluencerItem.css';

const StarredInfluencerItem = props => {
    const { statistics } = props.data;

    return (
        <div className="starred_influencer_wrapper">
            <div className='starredinfluenceritem_wrapper'>
                <div className="influencer_item_wrapper">
                    <InfluencerItem data={props.data} />
                </div>
                <div className="starred_influencer_utils">
                    <Statistic text="Engagement" value={`${statistics.engagement}%`} />
                    <Statistic text="Followers" value={statistics.followers} />
                </div>
            </div>
            <div className="remove_button_wrapper">
                <RemoveButton onClick={() => props.onRemove(props.data.influencer_id)} />
            </div>
        </div>
    );

}

export default StarredInfluencerItem;