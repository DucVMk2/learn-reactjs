import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const { form, name, label, disabled } = props;
    const { control, formState: { errors } } = form;
    const hasError = errors[name];

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <TextField
                    {...field}
                    label={label}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    disabled={disabled}
                    error={!!hasError}
                    helperText={hasError ? errors[name]?.message : ''}
                />
            )}
        />
    );
}

export default InputField;