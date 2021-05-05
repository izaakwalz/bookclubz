import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography,
  Button,
  Divider,
} from '@material-ui/core';
import { Image, LearnMoreLink } from '../../../../components/atoms';
import { SectionHeader } from '../../../../components/molecules';
import { PeopleOutlineSharp } from '@material-ui/icons';
import { Section } from '../../../../components/organisms';

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    fontSize: 13,
  },
  title2: {
    fontFamily: 'Merriweather, serif',
    fontWeight: 300,
  },
  titleBorder: {
    marginTop: 5,
    borderWidth: 30,
    borderBottom: '2px solid #000',
  },
  image: {
    height: 160,
    width: 160,
    border: '1px solid #f5f5f5',
    borderRadius: 100,
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
  shape: {
    padding: '15px 15px 15px',
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 20,
    // width: '100%',
    maxWidth: 700,
    maxHeight: '100%',
  },
}));

const BookClub = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title='JOIN A BOOK CLUB'
        subtitle={
          <>
            <span>
              Looking for a book club to join? Browse clubs that are open to the
              public to find the perfect book club for you.'
            </span>
            <Grid container spacing={isMd ? 2 : 4}>
              {data.map((book) => (
                <Grid item lg={3} xs={6} sm={6} key={book.id}>
                  <Grid container justif='center' alignItems='center'>
                    <div className={classes.shape}>
                      <SectionHeader
                        titleVariant='h6'
                        title={
                          <span>
                            <Image
                              src={book.image}
                              alt={book.name}
                              className={classes.image}
                              lazy={false}
                            />
                          </span>
                        }
                        subtitle={
                          <div>
                            <span>{book.name}</span>

                            <br />
                            <Typography
                              component='span'
                              variant='body2'
                              color='caption'
                              align='left'
                            >
                              {book.desc}{' '}
                              <LearnMoreLink
                                title='...more'
                                href='#'
                                variant='span'
                              />
                            </Typography>
                            <br />
                            <Typography
                              component='span'
                              variant='subtitle2'
                              color='textSecondary'
                            >
                              <PeopleOutlineSharp /> {book.users} members
                            </Typography>
                          </div>
                        }
                        // ctaGroup={[
                        //   <Button
                        //     //   variant='contain'
                        //     //   className={classes.button}
                        //     color='primary'
                        //     size='medium'
                        //   >
                        //     SEE MORE BOOK CLUBS TO JOIN
                        //   </Button>,
                        // ]}
                        // align='left'
                        subtitleColor='textPrimary'
                        subtitleVariant='body1'
                        titleClasses={classes.title}
                      />
                    </div>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </>
        }
        ctaGroup={[
          <Button
            variant='contained'
            className={classes.button}
            color='primary'
            size='medium'
          >
            SEE MORE BOOK CLUBS TO JOIN
          </Button>,
        ]}
        align='center'
        data-aos='fade-up'
      />
    </div>
  );
};

BookClub.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default BookClub;
