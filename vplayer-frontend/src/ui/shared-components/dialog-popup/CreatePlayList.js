import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { DATABASE_ACTIONS } from "../../../utilityFunction/appSlice";
import { useState } from "react";

const CreatePlayList = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const playlistName = formJson.playlistName;
    dispatch(DATABASE_ACTIONS.savePlayList({ playlistName }));
    handleClose();
  };
  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create Playlist
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Create Playlist</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="playlistName"
            label=" Enter playlist name"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Create Playlist</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default CreatePlayList;
