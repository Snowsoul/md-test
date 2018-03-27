import React, { Component } from 'react';
import InfluencerItem from './components/InfluencerItem/InfluencerItem';
import SugestedInfluencersList from './components/SuggestedInfluencersList/SuggestedInfluencersList';
import StarredInfluencersList from './components/StarredInfluencersList/StarredInfluencersList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SugestedInfluencersList />
        <StarredInfluencersList />
      </div>
    );
  }
}

export default App;
