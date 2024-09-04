import React, { useState } from 'react';
import Select from 'react-select';
import { categories } from '../../constants';

// function handleSetValue (v) {
//     setValue(v)
// }

export default function CustomDropdown({ dropdownOptions, handleSetValue, selectedOption, register, label }) {

    const findCategory = categories.find(elem => elem.id === Number(selectedOption))
    const selectedValue = findCategory && new Object({ value: findCategory.id, label: findCategory['name'] })

    return (
        <Select
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused ? 'transparent' : 'grey',
                    backgroundColor: state.isFocused ? 'transparent' : 'transparent',
                    boxShadow: state.isFocused ? '0 0 0 2px #829d70' : 'none',
                    '&:hover': {
                        backgroundColor: 'transparent', // Background color on hover
                    },
                }),
                option: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: state.isFocused ? '#f0f0f0' : 'white',
                    color: 'black',
                    '&:hover': {
                        backgroundColor: '#e0e0e0',
                    },
                }),
            }}
            defaultValue={selectedValue}
            onChange={handleSetValue}
            options={dropdownOptions}
        />
    );
}