import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';
import { Image } from '../../../../components/atoms';
import { SectionHeader } from '../../../../components/molecules';

const useStyles = makeStyles((theme) => ({
  root: {},
  image: {
    boxShadow:
      '25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)',
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 800,
    },
  },
  subtitle: {
    fontStyle: 'italic',
  },
  button: {
    borderRadius: 25,
    padding: 12,
    width: 220,
    fontWeight: 'bold',
    '&:hover': {
      color: theme.palette.common.white,
      background: theme.palette.primary.main,
    },
  },
}));

const BestBook = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  // const theme = useTheme();
  // const isMd = useMediaQuery(theme.breakpoints.up('md'), {
  //   defaultMatches: true,
  // });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid
        container
        justify='space-between'
        spacing={4}
        // direction={isMd ? 'row' : 'column-reverse'}
      >
        <Grid
          item
          container
          alignItems='center'
          xs={12}
          md={4}
          data-aos={'fade-up'}
        >
          <SectionHeader
            label='BOOK OF THE MONTH'
            title='Shuggie Bain: A Novel'
            subtitle='by Douglas Stuart'
            align='left'
            disableGutter
            titleVariant='h4'
          />
        </Grid>
        <Grid
          item
          container
          alignItems='center'
          xs={12}
          md={4}
          data-aos={'fade-up'}
        >
          <Image
            src='/images/books/bain.jpg'
            alt='Shuggie Bain'
            className={classes.image}
            data-aos='flip-left'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='2000'
          />
        </Grid>
        <Grid
          item
          container
          justify='flex-start'
          alignItems='center'
          xs={12}
          md={4}
          data-aos={'fade-up'}
        >
          <SectionHeader
            title=''
            subtitle={
              <Typography
                component='span'
                variant='subtitle2'
                color='textSecondary'
              >
                Winner of the 2020 Booker Prize, Shuggie Bain is a stunning
                debut novel by a masterful writer telling the heartwrenching
                story of a young boy and his alcoholic mother, whose love is
                only matched by her pride. Recalling the work of Édouard Louis,
                Alan Hollinghurst, Frank McCourt, and Hanya Yanagihara, Shuggie
                Bain is an epic portrayal of a working-class family that is
                rarely seen in fiction.
              </Typography>
            }
            ctaGroup={[
              <Button
                variant='outlined'
                className={classes.button}
                color='primary'
                size='large'
              >
                DISCUSSION GUIDE
              </Button>,
            ]}
            subtitleClasses={classes.subtitle}
            align='left'
            disableGutter
          />
        </Grid>
      </Grid>
    </div>
  );
};

BestBook.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default BestBook;
