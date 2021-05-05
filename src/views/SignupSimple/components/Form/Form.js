import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, TextField } from '@material-ui/core';
import validate from 'validate.js';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    borderRadius: 25,
    '&:hover': {
      color: theme.palette.common.white,
      background: theme.palette.primary.main,
    },
  },
}));

const schema = {
  userName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 120,
    },
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 8,
    },
  },
};

const Form = () => {
  const classes = useStyles();

  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  const [values, setValues] = React.useState({
    id: 0,
    userName: '',
    password: '',
  });

  React.useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (event) => {
    event.persist();

    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });

    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formState.isValid) {
      // userService.insertUser(values);
      localStorage.setItem('user', JSON.stringify(values));
      window.location.replace('/home');
    }

    setFormState((formState) => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors,
      },
    }));
  };

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={classes.root}>
      <form
        name='password-reset-form'
        autoComplete='off'
        method='post'
        onSubmit={handleSubmit}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              placeholder='username'
              label='username *'
              variant='outlined'
              size='medium'
              name='userName'
              fullWidth
              helperText={
                hasError('userName') ? formState.errors.userName[0] : null
              }
              error={hasError('userName')}
              onChange={handleChange}
              type='userName'
              value={formState.values.userName || values.userName}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              placeholder='Password'
              label='Password *'
              variant='outlined'
              size='medium'
              name='password'
              fullWidth
              helperText={
                hasError('password') ? formState.errors.password[0] : null
              }
              error={hasError('password')}
              onChange={handleChange}
              type='password'
              value={formState.values.password || values.password}
            />
          </Grid>
          <Grid item xs={12}>
            <i>
              <Typography variant='subtitle2'>
                Fields that are marked with * sign are required.
              </Typography>
            </i>
          </Grid>
          <Grid item xs={12}>
            <Button
              size='large'
              variant='contained'
              type='submit'
              color='primary'
              className={classes.button}
              fullWidth
            >
              GET STARTED
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Form;
