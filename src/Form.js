import React from "react";
import "./styles.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comments: "",
      topic: "React",
    };
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
  };
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form-group ">
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            className="form-control"
            onChange={this.handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label>Comments</label>
          <textarea
            value={this.state.comments}
            className="form-control"
            onChange={this.handleCommentsChange}
          />
        </div>
        <div className="form-group ">
          <label className="topic" >Topic</label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button className="btn btn-primary form-group button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
