import { yupResolver } from '@hookform/resolvers/yup';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; // Sửa tên icon
import { Avatar, Button, LinearProgress, styled, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form-controls/InputField';
import PasswordField from '../../../../components/form-controls/PasswordField';

// Sử dụng styled để tạo các component với kiểu dáng
const Root = styled('div')(({ theme }) => ({
    position: 'relative',
    paddingTop: theme.spacing(4),
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
}));

const Title = styled(Typography)(({ theme }) => ({
    margin: theme.spacing(2, 0, 3, 0),
    textAlign: 'center',
}));

const SubmitButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(3, 0, 2, 0),
}));

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(1),
    left: 0,
    right: 0,
}));

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    const { onSubmit } = props; // Destructure onSubmit
    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
        },
        resolver: yupResolver(
            yup.object().shape({
                fullName: yup
                    .string()
                    .required('Please enter your full name.')
                    .test('should has at least two words', 'Please enter at least two words.', value => {
                        console.log('Value:', value);
                        return value.split(' ').length >= 2;
                    }),
                email: yup.string().required('Please enter your email.').email('Please enter a valid email'),
                password: yup.string().required('Please enter your password').min(6, 'Please enter at least 6 characters.'),
                retypePassword: yup.string().required('Please retype your password.').oneOf([yup.ref('password')], 'Password does not match'),
            })
        ),
    });

    const handleSubmit = async values => {
        if (onSubmit) {
            await onSubmit(values);
        }
    };

    const { isSubmitting } = form.formState;

    return (
        <Root>
            {isSubmitting && <StyledLinearProgress />}

            <StyledAvatar>
                <LockOutlinedIcon />
            </StyledAvatar>

            <Title component="h3" variant="h5">
                Create An Account
            </Title>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="fullName" label="Full Name" form={form} />
                <InputField name="email" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />
                <PasswordField name="retypePassword" label="Retype Password" form={form} />

                <SubmitButton disabled={isSubmitting} type="submit" variant="contained" color="primary" fullWidth size="large">
                    Create an account
                </SubmitButton>
            </form>
        </Root>
    );
}

export default RegisterForm;
