import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Playlist from "../../features/playList/Playlist";
import { Checkbox } from "@mui/material";
import CheckboxLabels from "./CheckboxLabels";

export default function DialogBox() {
  const [open, setOpen] = React.useState(false);

  const listOfPlaylist = ["Playlist-1", "PlayList-2"];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        +Add To Playlist
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const playlistName = formJson.playListName;
            console.log(playlistName);
            handleClose();
          },
        }}
      >
        <DialogTitle>Create Playlist</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {listOfPlaylist.map((eachplaylistname) => {
              return <CheckboxLabels eachplaylistname={eachplaylistname} />;
            })}
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="playlist name"
            label=" enter playlist name"
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
    </React.Fragment>
  );
}
