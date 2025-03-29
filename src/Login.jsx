import { Box, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { LoginValidation } from "./Validation";

function Login() {
  const formik = useFormik({
    initialValues: {
      user: "",
      email: "",
      password: "",
    },
    validationSchema: LoginValidation,
    onSubmit: () => {
      console.log("successfull data: ", values);
      resetForm();
    },
  });
  let { values, errors, handleChange, resetForm, touched, submitForm } = formik;
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Box fontWeight={600} fontSize={"60px"}>
          Login
        </Box>
        <br />
        <Box>user: </Box>
        <TextField
          id="user"
          name="user"
          value={values.user}
          error={touched.user && typeof errors.user === "string"}
          helperText={errors.user}
          placeholder="enter user"
          onChange={handleChange}
        />
        <Box>email :</Box>
        <TextField
          id="email"
          name="email"
          value={values.email}
          error={touched.email && typeof errors.email === "string"}
          helperText={errors.email}
          placeholder="enter email"
          onChange={handleChange}
        />
        <Box>password: </Box>
        <TextField
          id="passoword"
          name="password"
          value={values.password}
          error={touched.password && typeof errors.password === "string"}
          helperText={errors.password}
          placeholder="enter password"
          onChange={handleChange}
        />
        <br />
        <Button
          variant="contained"
          onClick={submitForm}
          style={{ marginTop: "10px" }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
}

export default Login;
