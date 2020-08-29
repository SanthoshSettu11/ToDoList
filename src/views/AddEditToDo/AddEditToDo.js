import React, { useEffect, useState } from "react";
import "./AddEditToDo.css";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Input,
  DialogActions,
  Button
} from "@material-ui/core";

function AddEditToDo(props) {
  const [open, setOpen] = useState(true);
  const [activity, setActivity] = useState("");
  const [isActivityRequiredError, setIsActivityRequiredError] = useState(false);

  useEffect(() => {
    setActivity(props.activity);
    setOpen(true);
    return () => {};
  }, []);

  const cancel = () => {
    setOpen(false);
    props.onClose(null);
  };

  const handleActivityChange = (e) => {
    setActivity(e);
  };

  const handleClose = () => {
    if (activity && activity.trim() != "") {
      setIsActivityRequiredError(false);
      setOpen(false);
      props.onClose(activity);
    } else {
      setIsActivityRequiredError(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleClose();
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={cancel} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          {props.isAdd ? <span>Add</span> : <span>Edit</span>}Activity
        </DialogTitle>
        <DialogContent>
          <Input
            autoFocus
            type="input"
            placeholder="Activity"
            value={activity}
            onChange={(e) => handleActivityChange(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
            fullWidth
          />
          {isActivityRequiredError && (
            <DialogContentText className="error">
              Should not be empty
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={cancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddEditToDo;
