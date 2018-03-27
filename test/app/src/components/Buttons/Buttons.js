import React from 'react';
import TiPlus from 'react-icons/lib/ti/plus'
import TiTimes from 'react-icons/lib/ti/times'
import './Buttons.css';

export const AddButton = props => (
    <button { ...props } className='add_button'>
        <TiPlus />
    </button>
);

export const RemoveButton = props => (
    <button { ...props } className='remove_button'>
        <TiTimes />
    </button>
);