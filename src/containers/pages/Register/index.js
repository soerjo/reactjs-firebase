import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link as LinkDom } from "react-router-dom";
import { registerStyle } from "./registerSyle";
import firebase from "../../../config/firebase";
import { useSelector } from "react-redux";

export default function Register() {
  const classes = registerStyle();

  //cuma ngetes apakah redux berhasil terpanggil pada sebuah page
  const value = useSelector((state) => state);
  console.log(value);
  const { isSuccess, isLogin } = value;

  const [user, setuser] = React.useState({
    email: "",
    password: "",
  });

  const handleChangeText = (el) => {
    setuser({ ...user, [el.target.id]: el.target.value });
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const { email, password } = user;
    console.log("send firebase: ", email, password);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("success: ", user);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(`Error Code ${errorCode}: `, errorMessage);
        // ..
      });

    setuser({ ...user, email: "", password: "" });
    console.log("reset state: ", email, password);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register {isSuccess}
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={user.email}
                onChange={handleChangeText}
              />
            </Grid>
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
                value={user.password}
                onChange={handleChangeText}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleRegisterSubmit}
          >
            Submit
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link component={LinkDom} to={`/login`} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
