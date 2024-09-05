import React, { useState } from 'react';
import Select from 'react-select';
import { formatLabel } from '../../utils/formatKeyForForm';
import { Typography } from '@material-tailwind/react';

// function handleSetValue (v) {
//     setValue(v)
// }

export default function CustomDropdown({ dropdownOptions, handleSetValue, selectedOption, register, label, errors }) {

    const findCategory = dropdownOptions.find(elem => elem.value == selectedOption)
    const selectedValue = findCategory && new Object({ value: findCategory.value, label: findCategory['name'] })

    return (
        <>
            <Typography
                variant="small"
                color="blue-gray"
                className="mb-1 font-semibold capitalize">
                {label}
            </Typography>
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
                defaultValue={selectedOption || selectedValue}
                onChange={(v) => handleSetValue(formatLabel(label), v)}
                options={dropdownOptions}
            />
            <p className='text-red-900 ms-1 text-sm'>{errors?.categoryId?.message}</p>
        </>
    );
}