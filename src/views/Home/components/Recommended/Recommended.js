import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, Button } from '@material-ui/core';
import { Image } from '../../../../components/atoms';
import { SectionHeader } from '../../../../components/molecules';

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    fontSize: 13,
  },
  image: {
    boxShadow:
      '25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)',
    borderRadius: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 700,
    },
  },
  button: {
    borderRadius: 25,
    fontSize: 10,
  },
  liftUp: {
    transition:
      'box-shadow .25s ease,transform .25s ease,-webkit-transform .25s ease',
    '&:hover': {
      boxShadow:
        '0 1.5rem 2.5rem rgba(22,28,45,.1),0 .3rem 0.5rem -.50rem rgba(22,28,45,.05) !important',
      transform: 'translate3d(0,-5px,0)',
    },
  },
}));

const Recommended = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="THIS MONTH'S RECOMMENDED READING"
        subtitle={
          <Grid container spacing={isMd ? 4 : 2}>
            {data.map((book) => (
              <Grid
                item
                lg={2}
                xs={4}
                sm={4}
                key={book.id}
                className={classes.liftUp}
              >
                <Grid container justif='center' alignItems='center'>
                  <SectionHeader
                    titleVariant='h6'
                    title={
                      <span>
                        {book.category}
                        <Image
                          src={book.image}
                          alt={book.name}
                          className={classes.image}
                          lazy={false}
                        />
                      </span>
                    }
                    subtitle={
                      <span>
                        {book.name}
                        <br />
                        <Typography
                          component='span'
                          variant='subtitle2'
                          color='textSecondary'
                        >
                          by {book.author}
                        </Typography>
                      </span>
                    }
                    ctaGroup={[
                      <Button
                        variant='outlined'
                        className={classes.button}
                        color='primary'
                        size='small'
                        component='a'
                        href={`/books/${book.id}`}
                      >
                        READ NOW
                      </Button>,
                    ]}
                    subtitleColor='textPrimary'
                    subtitleVariant='body1'
                    titleClasses={classes.title}
                  />
                </Grid>
              </Grid>
            ))}
          </Grid>
        }
        data-aos='fade-up'
      />
      {/* <Grid
        container
        spacing={isMd ? 4 : 2}
        // direction={isMd ? 'row' : 'column-reverse'}
      >
        {data.map((book, index) => (
          <Grid
            item
            lg={3}
            md={3}
            xs={5}
            sm={4}
            key={book.id}
            className={classes.liftUp}
          >
            <Grid container justif='center' alignItems='center'>
              <SectionHeader
                titleVariant='h6'
                title={
                  <span>
                    {book.category}
                    <Image
                      src={book.image}
                      alt={book.name}
                      className={classes.image}
                      lazy={false}
                    />
                  </span>
                }
                subtitle={
                  <span>
                    {book.name}
                    <br />
                    <Typography
                      component='span'
                      variant='subtitle2'
                      color='textSecondary'
                    >
                      by {book.author}
                    </Typography>
                  </span>
                }
                ctaGroup={[
                  <Button
                    variant='outlined'
                    className={classes.button}
                    color='primary'
                    size='medium'
                  >
                    DISCUSSION GUIDE
                  </Button>,
                ]}
                subtitleColor='textPrimary'
                subtitleVariant='body1'
                titleClasses={classes.title}
              />
            </Grid>
          </Grid>
        ))} */}

      {/* <Grid item lg={3} xs={5} sm={4} className={classes.liftUp}>    
          <SectionHeader
            titleVariant='h6'
            title={
              <span>
                MYSTERY/THRILLER
                <Image
                  src='/images/books/blood_grove.jpg'
                  alt='usage'
                  className={classes.image}
                  lazy={false}
                />
              </span>
            }
            subtitle={
              <span>
                Blood Grove (Easy Rawlins, 15)
                <br />
                <Typography
                  component='span'
                  variant='subtitle2'
                  color='textSecondary'
                >
                  by Walter Mosley
                </Typography>
              </span>
            }
            ctaGroup={[
              <Button
                variant='outlined'
                className={classes.button}
                color='primary'
                size='medium'
              >
                DISCUSSION GUIDE
              </Button>,
            ]}
            subtitleColor='textPrimary'
            subtitleVariant='body1'
            titleClasses={classes.title}
          />
          
        </Grid> */}
      {/* </Grid> */}
    </div>
  );
};

Recommended.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Recommended;
