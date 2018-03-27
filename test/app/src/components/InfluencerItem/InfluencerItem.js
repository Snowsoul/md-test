import React from 'react';
import FaInstagram from 'react-icons/lib/fa/instagram';
import Avatar from '../Avatar/Avatar'
import './InfluencerItem.css';

class InfluencerItem extends React.Component {
    render() {
        const { 
            influencer_id,
            influencer_full_name,
            influencer_instagram_username,
            influencer_instagram_profile_image
        } = this.props.data;

        return (
            <div className='influenceritem_wrapper'>
                <div className="influencer_avatar">
                    <Avatar src={ influencer_instagram_profile_image } />
                </div>

                <div className="influencer_details">
                    <h3>{ influencer_full_name }</h3>
                    <small><FaInstagram /> { influencer_instagram_username } </small>
                </div>
            </div>
        );
    }
}

InfluencerItem.defaultProps = {
    data: {
        influencer_id: 1,
        influencer_full_name: "Anna Griffin",
        influencer_instagram_username: "anna_griffin_123",
        influencer_instagram_profile_image: "/images/avatar1.jpg"
    }
}

export default InfluencerItem;