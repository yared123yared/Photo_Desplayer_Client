import React from 'react';
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';

import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
const useStyles = theme => ({
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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
});





class SignUp extends React.Component {


    state = {




        fName: '',
        lName: '',
        gender: 'Male',
        email: '',
        workTitle: '',
        country: 'Ethiopia',
        city: '',
        password: '',
        profilePictureName: 'yared.jpg',
        postResponse: null,



















    }






    Copyright = () => {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                    Your Website
          </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    handleCountryChange = (event) => {
        // this.setState({
        // country: event.target.value
        // })
        // setCountry();
    };
    handleGenderChange = (event) => {
        // this.setState({
        // country: event.target.value
        // })
        // setGender(event.target.value);
    };

    onChange = (e) => {
        let files = e.target.files;
        console.warn("data file", files);
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            console.warn("img data", e.target.result);
            this.setState({ profilePictureName: e.target.result })
        }
    }
    HandleSubmit = () => {
        console.log("submit button clicked");
        // console.log("this is the value from the sumbit button", event.firstName);
        // console.log(this.state.FName, this.state.LName, this.state.Email, this.state.City, this.state.Country, this.state.Password);
        console.log(this.state.photographer);

        //  post data to the api
        /*
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
            */

        const photographer = {

            fName: this.state.fName,
            lName: this.state.lName,
            gender: this.state.gender,
            email: this.state.email,
            workTitle: this.state.workTitle,
            country: this.state.country,
            city: this.state.city,
            password: this.state.password,
            profilePictureName: this.state.profilePictureName
        }
        console.log(photographer);
        const apiUrl = "https://localhost:5001/photographer/getAllPhotographers";
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => console.log('This is your data', data));

        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fName: this.state.fName,
                lName: this.state.lName,
                gender: this.state.gender,
                email: this.state.email,
                workTitle: this.state.workTitle,
                country: this.state.country,
                city: this.state.city,
                password: this.state.password,
                profilePictureName: this.state.profilePictureName
            })
        };

        // Simple POST rJSON.stringify({ photographer });
        const article = JSON.stringify({
            fName: this.state.fName,
            lName: this.state.lName,
            gender: this.state.gender,
            email: this.state.email,
            workTitle: this.state.workTitle,
            country: this.state.country,
            city: this.state.city,
            password: this.state.password,
            profilePictureName: this.state.profilePictureName
        });
        console.log(article);
        fetch('https://localhost:5001/photographer/InsertPhotographer', requestOptions)
            .then(response => {
                response.json();
                console.log("response", response);
                if (response.status == 200) {
                    this.props.history.push('/login');

                }
            });







        /*  
          axios.post('https://localhost:5001/photographer/InsertPhotographer', article)
              .then(response => this.setState({ articleId: response.data.id }));
          console.log("status code", this.state.articleId);
          */




        // fetch('https://localhost:5001/photographer/InsertPhotographer')
        // .then(response => response.json())
        // .then(data => console.log("This is the insert data", data));
    }




    render() {

        const { classes } = this.props;
        console.log(classes.avatar);

        return (

            < Container component="main" maxWidth="xs" >
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
        </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    onInput={e => this.setState({ fName: e.target.value })}
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                    onInput={e => this.setState({ lName: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onInput={e => this.setState({ email: e.target.value })}
                                />
                            </Grid>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.state.country}
                                    onChange={this.handleCountryChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="city"
                                    label="City "
                                    name="city"
                                    autoComplete="city"
                                    onInput={e => this.setState({ city: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="title"
                                    label="Work Title"
                                    name="title"
                                    autoComplete="title"
                                    onInput={e => this.setState({ workTitle: e.target.value })}
                                />
                            </Grid>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.state.gender}
                                    onChange={this.handleGenderChange}
                                >
                                    <MenuItem value={10}>Male</MenuItem>
                                    <MenuItem value={20}>Female</MenuItem>

                                </Select>
                            </FormControl>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onInput={e => this.setState({ password: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                            <input type="file" name="file" onChange={(e) => this.onChange(e)} />
                        </Grid>

                        <Button

                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.HandleSubmit}
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? Sign in
              </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                    {/* <Copyright /> */}
                </Box>
            </Container >
        );
    }
}



export default withStyles(useStyles)(SignUp)
