import React from 'react';
import { connect } from 'react-redux'
import SortSelect from '../SortSelect/SortSelect';
import StarredInfluencerItem from './StarredInfluencerItem/StarredInfluencerItem';
import { starredInfluencersFetched, starredInfluencersFetching } from '../../actions';

import config from '../../config';

import './StarredInfluencersList.css';

class StarredInfluencersList extends React.Component {
    componentDidMount() {
        this.fetchData();
     }
 
     fetchData() {
         this.props.starredInfluencersFetching();
 
         fetch(config.api.starredInfluencersEndpoint)
         .then(repsonse => repsonse.json())
         .then(repsonse => { 
             this.props.starredInfluencersFetched(repsonse.data); 
         })
         .catch(err => console.error(err));
     }
     
    render() {
        const { starredInfluencers, loading } = this.props;
        const { influencers } = starredInfluencers;
        
        return (
            <div className='starredinfluencerslist_wrapper'>
                <header>
                    <h2> Starred Influencers </h2>
                    <div className="sort_wrapper">
                        <SortSelect />
                    </div>
                </header>
                <section>
                    {
                        influencers.map( (item) => (
                            <StarredInfluencerItem 
                                key={item.influencer_id}
                                data={item}
                            />
                        ))
                    }
                </section>
            </div>
        );
    }
}

const mapDispatchToProps = { 
    starredInfluencersFetching,
    starredInfluencersFetched
};

const mapStateToProps = state => ({
    starredInfluencers: state.starredInfluencers
});

export default connect(mapStateToProps, mapDispatchToProps)(StarredInfluencersList);