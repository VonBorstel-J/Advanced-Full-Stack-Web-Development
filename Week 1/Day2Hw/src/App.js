import "./styles.css";
import React, { Component } from "react";
import { ListGroup, ListGroupItem, ListGroupItemHeading } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";

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
      TodoList1: [
        {
          id: 1,
          text: "Meal prep for the week",
          done: false,
          note: "Try a new healthy recipe this week",
        },
        {
          id: 2,
          text: "Catch up on favorite TV show",
          done: false,
          note: "Watch two episodes for a mini-binge",
        },
        {
          id: 3,
          text: "Browse TikTok for new trends",
          done: false,
          note: "Discover a fun DIY project",
        },
      ],

      TodoList2: [
        {
          id: 1,
          text: "Try a new workout from YouTube",
          done: false,
          note: "Choose a HIIT routine for a quick sweat",
        },
        {
          id: 2,
          text: "Call a friend you haven't spoken to in a while",
          done: false,
          note: "Reconnect with your college roommate",
        },
        {
          id: 3,
          text: "Experiment with a new cocktail recipe",
          done: false,
          note: "Mix a refreshing mojito",
        },
      ],

      TodoList3: [
        {
          id: 1,
          text: "Visit a local farmer's market",
          done: false,
          note: "Buy fresh, seasonal produce",
        },
        {
          id: 2,
          text: "Learn a new dance from a viral challenge",
          done: false,
          note: "Try the latest shuffle dance trend",
        },
        {
          id: 3,
          text: "Watch a documentary on an interesting topic",
          done: false,
          note: "Explore the world of minimalism",
        },
      ],

      TodoList4: [
        {
          id: 1,
          text: "Attend a local trivia night",
          done: false,
          note: "Invite a group of friends to join your team",
        },
        {
          id: 2,
          text: "Take an online course to learn a new skill",
          done: false,
          note: "Sign up for a photography class",
        },
        {
          id: 3,
          text: "Listen to a podcast on your favorite subject",
          done: false,
          note: "Check out a new history podcast",
        },
      ],

      TodoList5: [
        {
          id: 1,
          text: "Go out for a happy hour with friends",
          done: false,
          note: "Try a new rooftop bar",
        },
        {
          id: 2,
          text: "Plan a weekend getaway",
          done: false,
          note: "Book a cozy cabin in the mountains",
        },
        {
          id: 3,
          text: "Have a movie night with your favorite films",
          done: false,
          note: "Watch a classic 90s comedy",
        },
      ],

      TodoList6: [
        {
          id: 1,
          text: "Attend a local outdoor event or festival",
          done: false,
          note: "Check out a food truck gathering",
        },
        {
          id: 2,
          text: "Go for a hike or nature walk",
          done: false,
          note: "Explore a nearby state park",
        },
        {
          id: 3,
          text: "Try a new restaurant with friends",
          done: false,
          note: "Sample authentic cuisine from a different culture",
        },
      ],

      TodoList7: [
        {
          id: 1,
          text: "Enjoy a lazy Sunday brunch",
          done: false,
          note: "Find a place with bottomless mimosas",
        },
        {
          id: 2,
          text: "Take a scenic drive to a nearby town",
          done: false,
          note: "Visit a charming small town",
        },
        {
          id: 3,
          text: "Host a game night with friends",
          done: false,
          note: "Introduce them to a new friend group",
        },
      ],
    };
    this.handleNote = this.handleNote.bind(this);
    this.dismissNote = this.dismissNote.bind(this);
  }

  handleNote = (getNote) => {
    $("#note").empty().append(getNote);
    $("#notebox").css("visibility", "visible");
  };
  dismissNote = () => {
    $("#note").empty();
    $("#notebox").css("visibility", "hidden");
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
        <Todos todolists={this.state.TodoList1} handleNote={this.handleNote} dismissNote={this.dismissNote} />
      );
    } else if (n === "Tuesday") {
      todo = (
        <Todos todolists={this.state.TodoList2} handleNote={this.handleNote} dismissNote={this.dismissNote} />
      );
    } else if (n === "Wednesday") {
      todo = (
        <Todos todolists={this.state.TodoList3} handleNote={this.handleNote} dismissNote={this.dismissNote} />
      );
    } else if (n === "Thursday") {
      todo = (
        <Todos todolists={this.state.TodoList4} handleNote={this.handleNote} dismissNote={this.dismissNote} />
      );
    } else if (n === "Friday") {
      todo = (
        <Todos todolists={this.state.TodoList5} handleNote={this.handleNote} dismissNote={this.dismissNote} />
      );
    } else if (n === "Saturday") {
      todo = (
        <Todos todolists={this.state.TodoList6} handleNote={this.handleNote} dismissNote={this.dismissNote} />
      );
    } else if (n === "Sunday") {
      todo = (
        <Todos todolists={this.state.TodoList7} handleNote={this.handleNote} dismissNote={this.dismissNote} />
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
