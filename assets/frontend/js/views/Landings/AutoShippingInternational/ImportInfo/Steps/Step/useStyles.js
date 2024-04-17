import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, mixins }) => ({
  root: {
    ...mixins.flex(null, 'center'),
    flexDirection: 'column',

    '& $line': {
      left: 0,
    },

    '&:last-child $line': {
      width: '100%',
    },

    [breakpoints.down('sm')]: {
      flexDirection: 'row',
      alignItems: 'stretch',

      '&:first-child $line': {
        bottom: 'auto',
        top: 4,
      },

      '& $line': {
        bottom: 0,
        height: '150%',
      },

      '&:last-child $line': {
        bottom: 0,
        width: 2,
      },
    },
  },
  point: {
    marginBottom: 14,
    textAlign: 'center',
    width: '100%',

    [breakpoints.down('sm')]: {
      display: 'flex',
      minWidth: 34,
      width: 34,
      marginBottom: 0,

      '& > div:last-child': {
        marginLeft: 5,
      },
    },
  },
  number: {
    ...mixins.font(12, 22),
  },
  dot: {
    background: '#fff',
    width: 14,
    height: 14,
    border: '4px solid #2158F5',
    borderRadius: '50%',

    [breakpoints.down('sm')]: {
      marginTop: 4,
    },
  },
  line: {
    position: 'absolute',
    width: '150%',
    height: 2,
    top: 6,
    background: '#2158F5',
    zIndex: -1,

    [breakpoints.down('sm')]: {
      height: '100%',
      width: 2,
      left: [6, '!important'],
      top: 'auto',
    },
  },
  info: {
    ...mixins.flex('between'),
    flexDirection: 'column',
    flexGrow: 1,
  },
  title: {
    ...mixins.font(16, 21, 'bold'),
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  description: {
    ...mixins.font(16, 21),
    marginBottom: 20,

    [breakpoints.down('sm')]: {
      marginBottom: 15,
    },
  },
  video: {
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: '#010001',

    [breakpoints.down('sm')]: {
      maxWidth: 300,
    },
  },
}));
