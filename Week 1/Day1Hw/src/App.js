import "./styles.css";
import { ListGroup, ListGroupItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

function TodoList1() {
  // Monday's Todo List
  return (
    <ListGroup>
      <ListGroupItem
        tag="a"
        href="#"
        className="align-self-center py-2 w-50 bg-info text-white"
      >
        Meal prep for the week
      </ListGroupItem>
      <ListGroupItem
        tag="a"
        href="#"
        className="align-self-center py-2 w-50 bg-info text-white"
      >
        Catch up on favorite TV show
      </ListGroupItem>
      <ListGroupItem
        tag="a"
        href="#"
        className="align-self-center py-2 w-50 bg-info text-white"
      >
        Browse TikTok for new trends
      </ListGroupItem>
    </ListGroup>
  );
}

function TodoList2() {
  // Tuesday's Todo List
  return (
    <ListGroup>
      <ListGroupItem
        tag="a"
        href="#"
        className="align-self-center py-2 w-50 bg-info text-white"
      >
        Try a new workout from YouTube
      </ListGroupItem>
      <ListGroupItem
        tag="a"
        href="#"
        className="align-self-center py-2 w-50 bg-info text-white"
      >
        Call a friend you haven't spoken to in a while
      </ListGroupItem>
      <ListGroupItem
        tag="a"
        href="#"
        className="align-self-center py-2 w-50 bg-info text-white"
      >
        Experiment with a new cocktail recipe
      </ListGroupItem>
    </ListGroup>
  );
}

function TodoList3() {
  // Wednesday's Todo List
  return (
    <ListGroup>
      <ListGroupItem
        tag="a"
        href="#"
        className="align-self-center py-2 w-50 bg-info text-white"
      >
        Visit a local farmer's market
      </ListGroupItem>
      <ListGroupItem
        tag="a"
        href="#"
        className="align-self-center py-2 w-50 bg-info text-white"
      >
        Learn a new dance from a viral challenge
      </ListGroupItem>
      <ListGroupItem
        tag="a"
        href="#"
        className="align-self-center py-2 w-50 bg-info text-white"
      >
        Watch a documentary on an interesting topic
      </ListGroupItem>
    </ListGroup>
  );
}

function TodoList4() {
  // Thursday's Todo List
  return (
    <ListGroup>
      <ListGroupItem
        tag="a"
        href="#"
        className="align-self-center py-2 w-50 bg-info text-white"
      >
        Attend a local trivia night
      </ListGroupItem>
      <ListGroupItem
        tag="a"
        href="#"
        className="align-self-center py-2 w-50 bg-info text-white"
      >
        Take an online course to learn a new skill
      </ListGroupItem>
      <ListGroupItem
        tag="a"
        href="#"
        className="align-self-center py-2 w-50 bg-info text-white"
      >
        Listen to a podcast on your favorite subject
      </ListGroupItem>
    </ListGroup>
  );
}

function TodoList5() {
  // Friday's Todo List
  return (
    <ListGroup>
      <ListGroupItem
        tag="a"
        href="#"
        className="align-self-center py-2 w-50 bg-info text-white"
      >
        Go out for a happy hour with friends
      </ListGroupItem>
      <ListGroupItem
        tag="a"
        href="#"
        className="align-self-center py-2 w-50 bg-info text-white"
      >
        Plan a weekend getaway
      </ListGroupItem>
      <ListGroupItem
        tag="a"
        href="#"
        className="align-self-center py-2 w-50 bg-info text-white"
      >
        Have a movie night with your favorite films
      </ListGroupItem>
    </ListGroup>
  );
}

function TodoList6() {
  // Saturday's Todo List
  return (
    <ListGroup>
      <ListGroupItem
        tag="a"
        href="#"
        className="align-self-center py-2 w-50 bg-info text-white"
      >
        Attend a local outdoor event or festival
      </ListGroupItem>
      <ListGroupItem
        tag="a"
        href="#"
        className="align-self-center py-2 w-50 bg-info text-white"
      >
        Go for a hike or nature walk
      </ListGroupItem>
      <ListGroupItem
        tag="a"
        href="#"
        className="align-self-center py-2 w-50 bg-info text-white"
      >
        Try a new restaurant with friends
      </ListGroupItem>
    </ListGroup>
  );
}

function TodoList7() {
  // Sunday's Todo List
  return (
    <ListGroup>
      <ListGroupItem
        tag="a"
        href="#"
        className="align-self-center py-2 w-50 bg-info text-white"
      >
        Enjoy a lazy Sunday brunch
      </ListGroupItem>
      <ListGroupItem
        tag="a"
        href="#"
        className="align-self-center py-2 w-50 bg-info text-white"
      >
        Take a scenic drive to a nearby town
      </ListGroupItem>
      <ListGroupItem
        tag="a"
        href="#"
        className="align-self-center py-2 w-50 bg-info text-white"
      >
        Host a game night with friends
      </ListGroupItem>
    </ListGroup>
  );
}

export default function App() {
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
    todo = <TodoList1 />;
  } else if (n === "Tuesday") {
    todo = <TodoList2 />;
  } else if (n === "Wednesday") {
    todo = <TodoList3 />;
  } else if (n === "Thursday") {
    todo = <TodoList4 />;
  } else if (n === "Friday") {
    todo = <TodoList5 />;
  } else if (n === "Saturday") {
    todo = <TodoList6 />;
  } else if (n === "Sunday") {
    todo = <TodoList7 />;
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
