import React from 'react';
import './Statistic.css';

const Statistic = ({ text, value }) => (
    <div className='statistic_wrapper'>
        <p><b>{value}</b></p>
        <small>{text}</small>
    </div>
);

Statistic.defaultProps = {
    text: "Followers",
    value: "21,231"
};

export default Statistic;