import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './SortSelect.css';

class SortSelect extends React.Component {
    handleChange = (selectedOption) => {
        this.props.onChange(selectedOption);
    }

    render() {
        const { selectedOption } = this.props;
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
                            { value: 'engagementDesc', label: 'Engagement (High - Low)' },
                            { value: 'engagementAsc', label: 'Engagement (Low - High)' },
                            { value: 'followersDesc', label: 'Followers (High - Low)' },
                            { value: 'followersAsc', label: 'Followers (Low - High)' },
                        ]}
                    />
                </div>
            </div>
        );
    }
}

export default SortSelect;