import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, TextField } from '@material-ui/core';
import validate from 'validate.js';
import ButterToast, { Cinnamon } from 'butter-toast';
import { addClub } from '../../../../services/services';

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
  clubName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 120,
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
    clubName: '',
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
      addClub(values);
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            title='Book Club'
            content='Created successfully'
            scheme={Cinnamon.Crisp.SCHEME_BLUE}
            // icon={< />}
          />
        ),
      });
      // localStorage.setItem('club', JSON.stringify(values));
      // window.location.replace('/home');
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
        name='bookclub'
        autoComplete='off'
        method='post'
        onSubmit={handleSubmit}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              placeholder='club name'
              // label='Club name *'
              variant='outlined'
              size='medium'
              name='clubName'
              fullWidth
              helperText={
                hasError('clubName') ? formState.errors.clubName[0] : null
              }
              error={hasError('clubName')}
              onChange={handleChange}
              type='clubName'
              value={formState.values.clubName || values.clubName}
            />
          </Grid>
          {/* <Grid item xs={12}>
            <i>
              <Typography variant='subtitle2'>
                Fields that are marked with * sign are required.
              </Typography>
            </i>
          </Grid> */}
          <Grid item xs={12}>
            <Button
              size='large'
              variant='contained'
              type='submit'
              color='primary'
              className={classes.button}
              fullWidth
            >
              CREATE
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Form;
