import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";

function ReactPopup() {
  const [open, setOpen] = useState(false);
  const opendialog = () => {
    setOpen(true);
  };
  const closedialog = () => {
    setOpen(false);
  };
  return (
    <>
      <h1>ReactPopup</h1>
      <Button onClick={opendialog} variant="contained">
        Open Modal
      </Button>
      <Dialog
        open={open}
        onClose={closedialog}
        fullWidth
        aria-labelledby="dialog-title"
        aria-describedby="dialog-contant"
      >
        <DialogTitle id="dialog-title">Coutants us</DialogTitle>
        <IconButton onClick={closedialog}>
          <CloseIcon style={{ float: "right" }} />
        </IconButton>
        <DialogContent>
          <Stack spacing={2} margin={2}>
            <TextField placeholder="name" variant="outlined" />
            <TextField placeholder="email" variant="outlined" />
            <TextField
              placeholder="message"
              variant="outlined"
              multiline
              rows={4}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="info">
            submit
          </Button>
          <Button variant="contained" color="error" onClick={closedialog}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ReactPopup;
