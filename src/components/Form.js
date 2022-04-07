import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  table: {
    minWidth: 650,
  },
  root: {
    width: '100%',
    maxWidth: '80ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

function createData(name) {
    return { name};
  }
  
  const rows = [
    createData('July 20, 2020',),
    
  ];

const Form = ({myDiary, handleChange}) => {
  const classes = useStyles();

  return (
      <>
    <Container maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <h1>My Diary</h1>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>  
              <TextField
                variant="outlined"
                fullWidth
                id="username"
                label="Enter Something"
                name="username"
                onChange={handleChange}

              />
            </Grid>
          </Grid>
          <Box display="flex" flexDirection="row-reverse" p={1} m={1}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            endIcon={<Icon>add</Icon>}
            fullwidth
          >
            Add
          </Button>
          </Box>
      </form>
      </div>
      <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={myDiary}
        />
      </ListItem>
    </List>
    </Container>
    
    </>
  );
}

export default Form