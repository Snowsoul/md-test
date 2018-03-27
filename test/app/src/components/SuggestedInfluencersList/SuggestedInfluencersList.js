import React from 'react';
import { connect } from 'react-redux'
import SuggestedInfluencerItem from './SuggestedInfluencerItem/SuggestedInfluencerItem';
import './SuggestedInfluencersList.css';
import { 
    suggestedInfluencersFetched, 
    suggestedInfluencersFetching,
    moveSuggestedInfluencerToStarred
} from '../../actions';
import config from '../../config';

class SuggestedInfluencersList extends React.Component {
    componentDidMount() {
       this.fetchData();
    }

    fetchData() {
        this.props.suggestedInfluencersFetching();

        fetch(config.api.suggestedInfluencersEndpoint)
        .then(repsonse => repsonse.json())
        .then(repsonse => { 
            this.props.suggestedInfluencersFetched(repsonse.data); 
        })
        .catch(err => console.error(err));
    }

    onMoveInfluencerToStarred = (suggestedInfluencer) => {
        fetch(config.api.addInfluencerEndpoint(suggestedInfluencer.influencer_id))
        .then(response => response.json())
        .then(response => {
            if (response.status === config.status.ok) {
                this.props.moveSuggestedInfluencerToStarred(response.data);
            } else {
                console.log(response);
            }
        })
        .catch(err => console.error(err));
    }

    render() {
        const { suggestedInfluencers, loading } = this.props;
        const { influencers } = suggestedInfluencers;

        return (
            <div className='suggestedinfluencerslist_wrapper'>
                <header>
                    <h2> Suggested Influencers </h2>
                </header>
                
                { /* Could be replaced with a spinner or some other loading method */ }
                { loading && <p> Loading ... </p> }
                
                <section>
                    {
                        influencers.map( (item) => (
                            <SuggestedInfluencerItem 
                                key={item.influencer_id}
                                data={item}
                                onMove={ this.onMoveInfluencerToStarred }
                            />
                        ))
                    }
                </section>
            </div>
        );
    }
}

const mapDispatchToProps = { 
    suggestedInfluencersFetching,
    suggestedInfluencersFetched,
    moveSuggestedInfluencerToStarred
};

const mapStateToProps = state => ({
    suggestedInfluencers: state.suggestedInfluencers
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SuggestedInfluencersList);