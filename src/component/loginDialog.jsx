import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { closeLoginDialog, openLoginDialog } from "../redux/actions/loginDialogAction";

export default function LoginDialog() {
  const {open} =useSelector(state=>state.loginDialog)
  const dispatch=useDispatch()

  const handleClickOpen = () => {
    dispatch(openLoginDialog())
  };

  const handleClose = () => {
    dispatch(closeLoginDialog())
  };

  // Validation Schema for Formik
  const validationSchema = Yup.object({
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(
        /^[0-9]{10}$/, 
        "Phone number must be 10 digits"
      ),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  // Initial values for Formik
  const initialValues = {
    phoneNumber: "",
    password: "",
  };

  // Form submission handler
  const handleSubmit = (values) => {
    console.log("Form Submitted with values: ", values);
    // Handle API call for login here
    handleClose(); // Close the dialog after form submission
  };

  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ textAlign: "center" , fontWeight: 'bold', fontSize: 30}}>Login</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange, handleBlur, errors, touched }) => (
              <div>
                <Box
                  noValidate
                  component="form"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    m: "auto",
                    width: "100%",
                  }}
                >
                  {/* Phone Number Field */}
                  <Field name="phoneNumber">
                    {({ field }) => (
                      <TextField
                        {...field}
                        size="small"
                        label="Phone Number"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                        helperText={touched.phoneNumber && errors.phoneNumber}
                        onBlur={handleBlur}
                      />
                    )}
                  </Field>

                  {/* Password Field */}
                  <Field name="password">
                    {({ field }) => (
                      <TextField
                        {...field}
                        size="small"
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                        onBlur={handleBlur}
                      />
                    )}
                  </Field>

                  <DialogActions style={{ justifyContent: "center"}}>
                    <div style={{display: 'flex', gap:10, flexDirection: 'column', width: '100%'}}>
                    <Button fullWidth type="submit" variant="contained" color="primary">
                      Login
                    </Button>
                    <Button fullWidth type="submit" variant="outlined" color="primary">
                      Google
                    </Button>
                    </div>
                  </DialogActions>
                </Box>
              </div>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
