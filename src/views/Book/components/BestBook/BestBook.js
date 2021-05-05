import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Button,
  Typography,
  TextField,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import moment from 'moment';
import { Image, ChatMsg } from '../../../../components/atoms';
import { SectionHeader } from '../../../../components/molecules';
import { addComments } from '../../../../services/services';

const useStyles = makeStyles((theme) => ({
  root: {},
  image: {
    boxShadow:
      '25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)',
    borderRadius: theme.spacing(2),
    marginBottom: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
  subtitle: {
    paddingTop: theme.spacing(-7),
  },
  bold: {
    fontSize: 18,
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
  root2: {
    width: '75%',
  },
  chat: {
    padding: theme.spacing(3),
  },
  chat2: {
    width: '75%',
    height: '30%',
    scrollbars: 'auto',
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.divider}`,
  },
}));

const BestBook = (props) => {
  const { className, book, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [values, setValues] = React.useState({
    id: 0,
    comment: '',
    date: Date.now(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addComments(values);
  };

  const user = () => {
    const comments = JSON.parse(localStorage.getItem('comments'));
    if (comments == null || undefined) {
      return <ChatMsg side={'right'} msg={'post your comments here'} />;
    } else {
      // const msg = comments.map((comment) => comment.comment);

      let { userName } = JSON.parse(localStorage.getItem('user'));
      const msg = comments.map((comment) => (
        <ChatMsg
          avatar={userName}
          id={comment.id}
          msg={comment.comment}
          date={moment(comment.date).format('MMM Do YY h:mm')}
        />
      ));
      return msg;
      // return <ChatMsg avatar={''} messages={msg} date={msg2} />;
    }
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid
        container
        justify='space-between'
        spacing={2}
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
          <Image
            src={book.image}
            alt={book.name}
            className={classes.image}
            data-aos='flip-left'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='2000'
          />
          <SectionHeader
            title={
              <div className={classes.chat}>
                {user()}

                {localStorage.getItem('user') == null || undefined ? (
                  <span>Login to comment</span>
                ) : (
                  <div className={classes.root2}>
                    <form
                      name='comment'
                      autoComplete='off'
                      method='post'
                      onSubmit={handleSubmit}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TextField
                            placeholder='write your comments here'
                            variant='outlined'
                            size='small'
                            value={values.comment}
                            name='comment'
                            fullWidth
                            onChange={handleChange}
                            type='comments'
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <Button
                            size='large'
                            variant='contained'
                            type='submit'
                            color='primary'
                            // className={classes.button}
                            fullWidth
                          >
                            Comment
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </div>
                )}
              </div>
            }
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
          <SectionHeader
            title={book.name}
            subtitle={
              <span>
                by {book.author}
                <br />
                <Typography
                  component='span'
                  variant='h6'
                  color='textSecondary'
                  className={classes.subtitle}
                >
                  <b className={classes.bold}>Summary:</b> {book.summary}
                </Typography>
              </span>
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
            align='left'
            disableGutter
            titleVariant='h4'
            subtitleVariant='subtitle1'
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
