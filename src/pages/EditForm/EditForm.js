import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import { Paper, Typography } from '@material-ui/core';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import SettingsIcon from '@material-ui/icons/Settings';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PaletteIcon from '@material-ui/icons/Palette';

import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';



import QuestionsTab from '../../components/QuestionForm/QuestionsTab';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {

    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),

  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    justifySelf: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    display: 'flex',
    alignContent: 'space-between',
    alignItems: 'center'
  }

}));



function EditForm(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const [formID, setFormID] = useState("");
  const [formDeatils, setFormDetails] = useState({});
  const [openOfAlert, setOpenOfAlert] = useState(false);
  //create edit


  const handleClickOfAlert = () => {
    setOpenOfAlert(true);
  };

  const handleCloseOfAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenOfAlert(false);
  };


  function sendForm() {
    handleClickOpen();
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };





  return (
    <div>

      <div>
        <div className={classes.root}>
          <AppBar position="static" style={{ backgroundColor: 'white' }} elevation={2}>
            <Toolbar className={classes.toolbar}>
              <Tabs
                className={classes.title}
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="Questions" />
                <Tab label="Responses" />
              </Tabs>
              <IconButton aria-label="search" onClick={sendForm}>
                <SendIcon />
              </IconButton>

              <IconButton aria-label="search">
                <PaletteIcon />
              </IconButton>
              <IconButton aria-label="search">
                <VisibilityIcon />
              </IconButton>



            </Toolbar>
          </AppBar>
        </div>
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"

          >
            <DialogTitle id="alert-dialog-title">{"Copy and share to link."}</DialogTitle>
            <DialogContent>
              <Paper className={classes.paper}>
                <Grid container alignContent="space-between" alignItems="center">
                  <Grid item>
                    <Typography variant="body1">{window.location.origin + "/send/" + "form:id"}</Typography>

                  </Grid>
                  <Grid item>
                    <IconButton className={classes.button} aria-label="Add" size="medium" ><FilterNoneIcon /></IconButton>
                  </Grid>
                </Grid>
              </Paper>


              <DialogContentText id="alert-dialog-description">

              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>

            </DialogActions>
          </Dialog>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={openOfAlert}
            autoHideDuration={3000}
            onClose={handleCloseOfAlert}
            message="Copied to clipboard"
            action={
              <React.Fragment>

                <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseOfAlert}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />
        </div>

        <div>
          <TabPanel value={value} index={0}>
            <QuestionsTab formData={formDeatils} />
          </TabPanel>
          <TabPanel value={value} index={1}>
          </TabPanel>
        </div>
      </div>

    </div>
  );
}

export default EditForm;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};



