// import React, { Component } from "react";
// import { ListGroup, ListGroupItem } from "reactstrap";
// import { TodoData } from "./TodoData";
// import "./styles.css";
// import "bootstrap/dist/css/bootstrap.css";

// class Todos extends Component {
//   handleToggle = (todo) => {
//     const updatedTodoList = this.props.todolists.map((item) => {
//       if (item.id === todo.id) {
//         return { ...item, done: !item.done };
//       }
//       return item;
//     });

//     this.props.updateTodoList(updatedTodoList);
//   };

//   render() {
//     return (
//       <ListGroup>
//         {this.props.todolists.map((todolist) => (
//           <ListGroupItem
//             key={todolist.id}
//             tag="button"
//             onClick={() => this.props.handleNote(todolist.note)}
//             className={`align-self-center py-2 w-50 ${
//               todolist.done ? "text-decoration-line-through" : ""
//             }`}
//           >
//             {todolist.text}
//             <button
//               className="btn btn-sm float-right"
//               onClick={() => this.handleToggle(todolist)}
//             >
//               {todolist.done ? (
//                 <i className="fas fa-check text-success"></i>
//               ) : (
//                 <i className="fas fa-check"></i>
//               )}
//             </button>
//           </ListGroupItem>
//         ))}
//         <ListGroupItem id="notebox" className="border border-dark rounded m-5">
//           <div id="note" className="mt-1 font-weight-bold text-dark"></div>
//           <button
//             id="btn"
//             className="w-25 mt-2 align-self-center bg-warning border-0"
//             onClick={this.props.dismissNote}
//           >
//             Done
//           </button>
//         </ListGroupItem>
//       </ListGroup>
//     );
//   }
// }
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       TodoList1: TodoData.TodoList1 || [],
//       TodoList2: TodoData.TodoList2 || [],
//       TodoList3: TodoData.TodoList3 || [],
//       TodoList4: TodoData.TodoList4 || [],
//       TodoList5: TodoData.TodoList5 || [],
//       TodoList6: TodoData.TodoList6 || [],
//       TodoList7: TodoData.TodoList7 || [],
//       newTodo: "", // New todo input
//       todos: [], // Array to store todos
//     };
//   }

//   handleNote = (note) => {
//     document.getElementById("notebox").style.visibility = "visible";
//     document.getElementById("note").innerHTML = note;
//   };

//   dismissNote = () => {
//     document.getElementById("notebox").style.visibility = "hidden";
//     document.getElementById("note").innerHTML = "";
//   };
//   updateTodoList = (updatedList) => {
//     this.setState({
//       TodoList1: updatedList,
//     });
//   };

//   handleInputChange = (event) => {
//     this.setState({ newTodo: event.target.value });
//   };
//   addTodo = (event) => {
//     event.preventDefault();
//     const { newTodo } = this.state;

//     if (newTodo.trim() === "") {
//       return;
//     }

//     const newTodoItem = {
//       id: Date.now(),
//       text: newTodo,
//       done: false,
//     };

//     let d = new Date();
//     let day = [
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//     ];
//     let n = day[d.getDay()];

//     this.setState((prevState) => ({
//       [n]: [...prevState[n], newTodoItem], // Add newTodoItem to the respective day's todo list
//       todos: [...prevState.todos, newTodoItem], // Add newTodoItem to the overall todos list
//       newTodo: "",
//     }));
//   };
//   render() {
//     let d = new Date();
//     let day = [
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//       "Sunday",
//     ];
//     let n = day[d.getDay()];

//     let todo;
//     if (n === "Monday") {
//       todo = (
//         <Todos
//           todolists={this.state.TodoList1}
//           handleNote={this.handleNote}
//           dismissNote={this.dismissNote}
//           updateTodoList={this.updateTodoList}
//         />
//       );
//     } else if (n === "Tuesday") {
//       todo = (
//         <Todos
//           todolists={this.state.TodoList2}
//           handleNote={this.handleNote}
//           dismissNote={this.dismissNote}
//           updateTodoList={this.updateTodoList}
//         />
//       );
//     } else if (n === "Wednesday") {
//       todo = (
//         <Todos
//           todolists={this.state.TodoList3}
//           handleNote={this.handleNote}
//           dismissNote={this.dismissNote}
//           updateTodoList={this.updateTodoList}
//         />
//       );
//     } else if (n === "Thursday") {
//       todo = (
//         <Todos
//           todolists={this.state.TodoList4}
//           handleNote={this.handleNote}
//           dismissNote={this.dismissNote}
//           updateTodoList={this.updateTodoList}
//         />
//       );
//     } else if (n === "Friday") {
//       todo = (
//         <Todos
//           todolists={this.state.TodoList5}
//           handleNote={this.handleNote}
//           dismissNote={this.dismissNote}
//           updateTodoList={this.updateTodoList}
//         />
//       );
//     } else if (n === "Saturday") {
//       todo = (
//         <Todos
//           todolists={this.state.TodoList6}
//           handleNote={this.handleNote}
//           dismissNote={this.dismissNote}
//           updateTodoList={this.updateTodoList}
//         />
//       );
//     } else if (n === "Sunday") {
//       todo = (
//         <Todos
//           todolists={this.state.TodoList7}
//           handleNote={this.handleNote}
//           dismissNote={this.dismissNote}
//           updateTodoList={this.updateTodoList}
//         />
//       );
//     }
//     return (
//       <div className="App">
//         <h1>
//           <span className="d-flex justify-content-center text-warning">
//             {n}'s
//           </span>
//           Todo List
//         </h1>
//         {todo}
//         <form onSubmit={this.addTodo}>
//           {/* NewTodo input field */}
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter a new todo..."
//               value={this.state.newTodo}
//               onChange={this.handleInputChange}
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Add Todo
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default App;



import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { TodoData } from "./TodoData";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

class Todos extends Component {
  handleToggle = (todo) => {
    const updatedTodoList = this.props.todolists.map((item) => {
      if (item.id === todo.id) {
        return { ...item, done: !item.done };
      }
      return item;
    });

    this.props.updateTodoList(updatedTodoList);
  };

  render() {
    return (
      <ListGroup>
        {this.props.todolists.map((todolist) => (
          <ListGroupItem
            key={todolist.id}
            tag="button"
            onClick={() => this.props.handleNote(todolist.note)}
            className={`align-self-center py-2 w-50 ${
              todolist.done ? "text-decoration-line-through" : ""
            }`}
          >
            <div className="d-flex align-items-center">
              <span>{todolist.text}</span>
              <button
                className="btn btn-sm ml-auto"
                onClick={() => this.handleToggle(todolist)}
              >
                {todolist.done ? (
                  <i className="fas fa-check text-success"></i>
                ) : (
                  <i className="fas fa-check"></i>
                )}
              </button>
            </div>
          </ListGroupItem>
        ))}
        <ListGroupItem
          id="notebox"
          className="border border-dark rounded m-5"
        >
          <div id="note" className="mt-1 font-weight-bold text-dark"></div>
          <button
            id="btn"
            className="w-100 mt-2 bg-warning border-0"
            onClick={this.props.dismissNote}
          >
            Done
          </button>
        </ListGroupItem>
      </ListGroup>
    );
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TodoList1: TodoData.TodoList1 || [],
      TodoList2: TodoData.TodoList2 || [],
      TodoList3: TodoData.TodoList3 || [],
      TodoList4: TodoData.TodoList4 || [],
      TodoList5: TodoData.TodoList5 || [],
      TodoList6: TodoData.TodoList6 || [],
      TodoList7: TodoData.TodoList7 || [],
      newTodo: "", // New todo input
      todos: [], // Array to store todos
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

  updateTodoList = (updatedList) => {
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

    this.setState((prevState) => ({
      [n]: updatedList,
      todos: [...prevState.todos, ...updatedList],
    }));
  };

  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  addTodo = (event) => {
    event.preventDefault();
    const { newTodo } = this.state;

    if (newTodo.trim() === "") {
      return;
    }

    const newTodoItem = {
      id: Date.now(),
      text: newTodo,
      done: false,
    };

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

    this.setState((prevState) => ({
      [n]: [...prevState[n], newTodoItem], // Add newTodoItem to the respective day's todo list
      todos: [...prevState.todos, newTodoItem], // Add newTodoItem to the overall todos list
      newTodo: "",
    }));
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
      "Sunday",
    ];
    let n = day[d.getDay()];

    let todo;
    if (n === "Monday") {
      todo = (
        <Todos
          todolists={this.state.TodoList1}
          handleNote={this.handleNote}
          dismissNote={this.dismissNote}
          updateTodoList={this.updateTodoList}
        />
      );
    } else if (n === "Tuesday") {
      todo = (
        <Todos
          todolists={this.state.TodoList2}
          handleNote={this.handleNote}
          dismissNote={this.dismissNote}
          updateTodoList={this.updateTodoList}
        />
      );
    } else if (n === "Wednesday") {
      todo = (
        <Todos
          todolists={this.state.TodoList3}
          handleNote={this.handleNote}
          dismissNote={this.dismissNote}
          updateTodoList={this.updateTodoList}
        />
      );
    } else if (n === "Thursday") {
      todo = (
        <Todos
          todolists={this.state.TodoList4}
          handleNote={this.handleNote}
          dismissNote={this.dismissNote}
          updateTodoList={this.updateTodoList}
        />
      );
    } else if (n === "Friday") {
      todo = (
        <Todos
          todolists={this.state.TodoList5}
          handleNote={this.handleNote}
          dismissNote={this.dismissNote}
          updateTodoList={this.updateTodoList}
        />
      );
    } else if (n === "Saturday") {
      todo = (
        <Todos
          todolists={this.state.TodoList6}
          handleNote={this.handleNote}
          dismissNote={this.dismissNote}
          updateTodoList={this.updateTodoList}
        />
      );
    } else if (n === "Sunday") {
      todo = (
        <Todos
          todolists={this.state.TodoList7}
          handleNote={this.handleNote}
          dismissNote={this.dismissNote}
          updateTodoList={this.updateTodoList}
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
        <form onSubmit={this.addTodo}>
          {/* NewTodo input field */}
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a new todo..."
              value={this.state.newTodo}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

export default App;
