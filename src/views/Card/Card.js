import React, { useState } from "react";
import "./Card.css";
import AddEditToDo from "../AddEditToDo/AddEditToDo";
import AddIcon from "@material-ui/icons/Add";
import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import { useDispatch } from "react-redux";
import { removeToDo, addToDo, updateToDo } from "../../store/ToDo/ToDoActions";

function Card(props) {
  const [open, setOpen] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const dispatch = useDispatch();

  const modalClose = (data) => {
    if (data && isAdd) {
      const toDo = {
        activity: data,
        id: Math.random()
      };
      dispatch(addToDo(toDo));
    } else if (data) {
      const toDo = {
        activity: data,
        id: props.id
      };
      dispatch(updateToDo(toDo, props.index));
    }
    setOpen(false);
  };

  const addActivity = () => {
    setIsAdd(true);
    setOpen(true);
  };

  const editActivity = () => {
    setIsAdd(false);
    setOpen(true);
  };

  const deleteActivity = () => {
    dispatch(removeToDo(props.index));
  };

  return (
    <div className="card">
      {!props.isAdd ? (
        <div className="card__edit">
          <div className="card__activity" title={props.activity}>
            {props.activity}
          </div>
          <div className="card__iconcontainer">
            <IconButton onClick={() => editActivity()}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => deleteActivity()}>
              <DeleteRoundedIcon />
            </IconButton>
          </div>
        </div>
      ) : (
        <div>
          <div>Add activity</div>
          <IconButton onClick={() => addActivity()}>
            <AddIcon />
          </IconButton>
        </div>
      )}
      {open && (
        <AddEditToDo
          activity={props?.activity}
          onClose={(e) => modalClose(e)}
          isAdd={props?.isAdd}
        />
      )}
    </div>
  );
}

export default Card;
