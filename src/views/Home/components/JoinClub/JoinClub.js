import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { SectionHeader } from '../../../../components/molecules';

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    fontFamily: 'Merriweather, serif',
    fontWeight: 300,
  },
  button: {
    borderRadius: 25,
    padding: 12,
    width: 250,
    fontWeight: 'bold',
    '&:hover': {
      color: theme.palette.common.white,
      background: theme.palette.primary.main,
    },
  },
}));

const JoinClub = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const user = localStorage.getItem('user');

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title='SIGN YOUR CLUB UP FOR FREE'
        ctaGroup={[
          user === null || undefined ? (
            <Button
              variant='outlined'
              className={classes.button}
              color='primary'
              size='large'
              component='a'
              href='/signup'
            >
              Create Account
            </Button>
          ) : (
            <Button
              variant='outlined'
              className={classes.button}
              color='primary'
              size='Large'
              component='a'
              href='/create-club'
            >
              Create a Club
            </Button>
          ),
          // <Button
          //   variant='outlined'
          //   className={classes.button}
          //   color='primary'
          //   size='Large'
          // >
          //   CREATE A CLUB
          // </Button>,
        ]}
        titleVariant='h4'
        titleClasses={classes.title}
      />
    </div>
  );
};

JoinClub.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default JoinClub;
