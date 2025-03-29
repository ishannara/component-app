import React, { useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useFormik } from "formik";

import { messaging } from "../config/firebase";
import { getToken, onMessage } from "firebase/messaging";
// import { toast } from "react-toastify";

function Login() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: () => {
      console.log("successfull submit from :", values);
      resetForm();
    },
  });
  let { values, errors, touched, resetForm, handleBlur, handleChange } = formik;

  async function requestPermission() {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      // Generat Token
      const Token = await getToken(messaging, {
        vapidKey:
          "BAUH_7jDTf1K-GpFunpRLrZG7LZSdywR_mkVEwjEzq4Ov5J0aRxD9zkcWDuWRu6AEDJI1LJNJqQjuM1QUXvpk6U",
      });
      console.log(Token);
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    // Req user for notification permission
    requestPermission();
    onMessage(messaging, (payload) => {
      console.log(payload);
    });
  }, []);

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Box textAlign={"center"} my={5}>
          <Box fontFamily={"sans-serif"} fontSize={200} my={2}>
            Keep
          </Box>
          <Box fontWeight={700} fontFamily={"sans-serif"} fontSize={16}>
            Hello Attrition Fighter!
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={2} width={"450px"}>
          <TextField
            type="text"
            placeholder="username"
            id="username"
            name="username"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
            error={touched.username && errors.username}
            helperText={touched.username && errors.username}
          />
          <TextField
            type="password"
            placeholder="password"
            id="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={touched.password && errors.password}
            helperText={touched.password && errors.password}
          />
          <Button variant="contained">Login</Button>
        </Box>
      </Box>
    </>
  );
}

export default Login;
