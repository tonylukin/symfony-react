import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints }) => ({
  root: {
    backgroundColor: '#F1F1F8',
    padding: [[50, 42, 70]],
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginBottom: 42,
    color: '#000',
    fontSize: '32px',
    lineHeight: 1.3,
    fontWeight: 400,

    [breakpoints.down('sm')]: {
      fontSize: '24px',
    },
  },
  items: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 960,

    [breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
}));
