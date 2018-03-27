import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './SortSelect.css';

class SortSelect extends React.Component {
    state = {
        selectedOption: '',
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    }

    render() {
        const { selectedOption } = this.state;
        const value = selectedOption && selectedOption.value;
        
        return (
            <div className='sortselect_wrapper'>
                <span className="text">Sort By:</span>
                <div className="select_wrapper">
                    <Select
                        name="form-field-name"
                        value={value}
                        onChange={this.handleChange}
                        options={[
                            { value: 'one', label: 'Engagement (High - Low)' },
                            { value: 'two', label: 'Engagement (Low - High)' },
                        ]}
                    />
                </div>
            </div>
        );
    }
}

export default SortSelect;