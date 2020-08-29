import React from "react";
import "./Container.css";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

function Container() {
  const { ToDoList } = useSelector((state) => ({
    ToDoList: state.ToDoReducer
  }));

  console.log(ToDoList);
  return (
    <div className="container">
      {ToDoList && (
        <React.Fragment>
          {ToDoList.map((toDo, index) => (
            <Card
              key={toDo.id}
              activity={toDo.activity}
              index={index}
              id={toDo.id}
            />
          ))}
        </React.Fragment>
      )}
      <Card isAdd />
    </div>
  );
}

export default Container;
