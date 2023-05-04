//Component example with Event handlers

class Football extends React.Component {
  shoot() {
    alert("Great Shot!");
  }
  render() {
    return <button onClick={this.shoot}>Take the shot!</button>;
  }
}
ReactDOM.render(<Football />, document.getElementById("root"));
