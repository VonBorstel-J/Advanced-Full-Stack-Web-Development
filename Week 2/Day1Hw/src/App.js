import React, { Component } from "react";
import { ListGroup, ListGroupItem, ListGroupItemHeading } from "reactstrap";
import { TodoData } from "./TodoData";
import './styles.css';
import "bootstrap/dist/css/bootstrap.css";

function Todos(props) {
  return (
    <ListGroup>
      {props.todolists.map((todolist) => (
        <ListGroupItem
          key={todolist.id}
          tag="button"
          onClick={() => props.handleNote(todolist.note)}
          className="align-self-center py-2 w-50 bg-info text-white"
        >
          {todolist.text}
        </ListGroupItem>
      ))}
      <ListGroupItem id="notebox" className="border border-dark rounded m-5">
        <div id="note" className="mt-1 font-weight-bold text-dark"></div>
        <button
          id="btn"
          className="w-25 mt-2 align-self-center bg-warning border-0"
          onClick={props.dismissNote}
        >
          Done
        </button>
      </ListGroupItem>
    </ListGroup>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TodoList1: TodoData.TodoList1,
      TodoList2: TodoData.TodoList2,
      TodoList3: TodoData.TodoList3,
      TodoList4: TodoData.TodoList4,
      TodoList5: TodoData.TodoList5,
      TodoList6: TodoData.TodoList6,
      TodoList7: TodoData.TodoList7,
    };
  }

  handleNote = (note) => {
    document.getElementById("notebox").style.visibility = "visible";
    document.getElementById("note").innerHTML = note;
  };

  dismissNote = () => {
    document.getElementById("notebox").style.visibility = "hidden";
    document.getElementById("note").innerHTML = "";
  };

  render() {
    let d = new Date();
    let day = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let n = day[d.getDay()];

    let todo;

    if (n === "Monday") {
      todo = (
        <Todos
          todolists={this.state.TodoList1}
          handleNote={this.handleNote}
          dismissNote={this.dismissNote}
        />
      );
    } else if (n === "Tuesday") {
      todo = (
        <Todos
          todolists={this.state.TodoList2}
          handleNote={this.handleNote}
          dismissNote={this.dismissNote}
        />
      );
    } else if (n === "Wednesday") {
      todo = (
        <Todos
          todolists={this.state.TodoList3}
          handleNote={this.handleNote}
          dismissNote={this.dismissNote}
        />
      );
    } else if (n === "Thursday") {
      todo = (
        <Todos
          todolists={this.state.TodoList4}
          handleNote={this.handleNote}
          dismissNote={this.dismissNote}
        />
      );
    } else if (n === "Friday") {
      todo = (
        <Todos
          todolists={this.state.TodoList5}
          handleNote={this.handleNote}
          dismissNote={this.dismissNote}
        />
      );
    } else if (n === "Saturday") {
      todo = (
        <Todos
          todolists={this.state.TodoList6}
          handleNote={this.handleNote}
          dismissNote={this.dismissNote}
          />
        );
      } else if (n === "Sunday") {
        todo = (
          <Todos
            todolists={this.state.TodoList7}
            handleNote={this.handleNote}
            dismissNote={this.dismissNote}
          />
        );
      }
  
      return (
        <div className="App">
          <h1>
            <span className="d-flex justify-content-center text-warning">
              {n}'s
            </span>
            Todo List
          </h1>
          {todo}
        </div>
      );
    }
  }
  
  export default App;
  