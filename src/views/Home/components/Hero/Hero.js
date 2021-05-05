import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography } from '@material-ui/core';
import { Image } from '../../../../components/atoms';
import { SectionHeader } from '../../../../components/molecules';

const useStyles = makeStyles((theme) => ({
  root: {},
  image: {
    // boxShadow:
    //   '25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)',
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
  button: {
    borderRadius: 25,
    padding: 12,
    width: 220,
    '&:hover': {
      color: theme.palette.common.white,
      background: theme.palette.primary.main,
    },
  },
}));

const Hero = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const user = localStorage.getItem('user');

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid
        container
        justify='space-between'
        spacing={4}
        direction={isMd ? 'row' : 'column-reverse'}
      >
        <Grid
          item
          container
          alignItems='center'
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <SectionHeader
            title={
              <span>
                THE BEST APP AND WEBSITE FOR ORGANIZING
                <br />
                <Typography component='span' variant='inherit' color='primary'>
                  YOUR BOOK CLUB
                </Typography>
              </span>
            }
            // subtitle='World developers use our theFront theme to build their internal tools and client admin applications. Save yourself time and money.'
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
                  size='large'
                  component='a'
                  href='/create-club'
                >
                  Create a Club
                </Button>
              ),
            ]}
            align='left'
            disableGutter
            titleVariant='h3'
          />
        </Grid>
        <Grid
          item
          container
          justify='flex-start'
          alignItems='center'
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src='/images/illustrations/book_lover.svg'
            alt='Book Reading'
            className={classes.image}
            data-aos='flip-left'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='2000'
          />
        </Grid>
      </Grid>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
