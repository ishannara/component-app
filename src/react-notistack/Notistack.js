import React from "react";
import { enqueueSnackbar, SnackbarProvider } from "notistack";

function Notistack() {
  const handleError = () => {
    enqueueSnackbar("this is error", {
      variant: "error",
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "left",
      },
    });
  };
  const handleDefault = () => {
    enqueueSnackbar("this is primary", {
      variant: "default",
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
    });
  };
  const handleSuccess = () => {
    enqueueSnackbar("this is success", {
      variant: "success",
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
      },
    });
  };
  const handleInfo = () => {
    enqueueSnackbar("this is info", {
      variant: "info",
      anchorOrigin: {
        vertical: "top",
        horizontal: "left",
      },
    });
  };
  const handleWarring = () => {
    enqueueSnackbar("this is warring", {
      variant: "warning",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };

  return (
    <>
      <div>
        <h1>Notistack</h1>
        <SnackbarProvider maxSnack={2}>
          <button onClick={handleError}>error</button>
          <button onClick={handleDefault}>default</button>
          <button onClick={handleSuccess}>success</button>
          <button onClick={handleInfo}>Info</button>
          <button onClick={handleWarring}>Warring</button>
        </SnackbarProvider>
      </div>
    </>
  );
}

export default Notistack;
