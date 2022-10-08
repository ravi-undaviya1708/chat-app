import {
  Avatar,
  Button,
  CssBaseline,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  Snackbar,
  SnackbarContent,
} from '@mui/material'
import React from 'react'

import { useStyle } from './css/signUp.style'

const SignUp = () => {
  const classes = useStyle()
  return (
    <div className={classes.main}>
      <CssBaseline />

      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>A</Avatar>
        <form className={classes.form} onSubmit={() => this.submitRegistration}>
          <FormControl required fullWidth margin="normal">
            <InputLabel htmlFor="email" className={classes.labels}>
              e-mail
            </InputLabel>
            <Input
              name="email"
              type="email"
              autoComplete="email"
              className={classes.inputs}
              disableUnderline={true}
              onChange={this.handleChange('email')}
            />
          </FormControl>

          <FormControl required fullWidth margin="normal">
            <InputLabel htmlFor="password" className={classes.labels}>
              password
            </InputLabel>
            <Input
              name="password"
              autoComplete="password"
              className={classes.inputs}
              disableUnderline={true}
              onChange={this.handleChange('password')}
              type={this.state.hidePassword ? 'password' : 'input'}
              endAdornment={
                this.state.hidePassword ? (
                  <InputAdornment position="end">
                    {/* <VisibilityOffTwoTone
                      fontSize="default"
                      className={classes.passwordEye}
                      onClick={this.showPassword}
                    /> */}
                  </InputAdornment>
                ) : (
                  <InputAdornment position="end">
                    {/* <VisibilityTwoToneIcon
                      fontSize="default"
                      className={classes.passwordEye}
                      onClick={this.showPassword}
                    /> */}
                  </InputAdornment>
                )
              }
            />
          </FormControl>

          <FormControl required fullWidth margin="normal">
            <InputLabel htmlFor="passwordConfrim" className={classes.labels}>
              confrim password
            </InputLabel>
            <Input
              name="passwordConfrim"
              autoComplete="passwordConfrim"
              className={classes.inputs}
              disableUnderline={true}
              onClick={this.state.showPassword}
              onChange={this.handleChange('passwordConfrim')}
              type={this.state.hidePassword ? 'password' : 'input'}
              endAdornment={
                this.state.hidePassword ? (
                  <InputAdornment position="end">
                    {/* <VisibilityOffTwoToneIcon
                      fontSize="default"
                      className={classes.passwordEye}
                      onClick={this.showPassword}
                    /> */}
                  </InputAdornment>
                ) : (
                  <InputAdornment position="end">
                    {/* <VisibilityTwoToneIcon
                      fontSize="default"
                      className={classes.passwordEye}
                      onClick={this.showPassword}
                    /> */}
                  </InputAdornment>
                )
              }
            />
          </FormControl>
          <Button
            disabled={!this.isValid()}
            disableRipple
            fullWidth
            variant="outlined"
            className={classes.button}
            type="submit"
            onClick={this.submitRegistration}
          >
            Join
          </Button>
        </form>

        {this.state.error ? (
          <Snackbar
            variant="error"
            key={this.state.error}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={this.state.errorOpen}
            onClose={this.errorClose}
            autoHideDuration={3000}
          >
            <SnackbarContent
              className={classes.error}
              message={
                <div>
                  <span style={{ marginRight: '8px' }}>
                    {/* <ErrorIcon fontSize="large" color="error" /> */}
                  </span>
                  <span> {this.state.error} </span>
                </div>
              }
              action={[
                <IconButton
                  key="close"
                  aria-label="close"
                  onClick={this.errorClose}
                >
                  {/* <CloseIcon color="error" /> */}
                </IconButton>,
              ]}
            />
          </Snackbar>
        ) : null}
      </Paper>
    </div>
  )
}

export default SignUp
