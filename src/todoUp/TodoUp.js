import React, { Component } from "react";
import "./toDoUp.css";

class TodoUp extends Component {
  //State
  constructor(props) {
    super(props);

    this.state = {
      inputUser: "",
      list: [],
      alert: false
    };
  }
  //Handlers

  //Change input
  changeInput = input => {
    this.setState({ inputUser: input });
  };
  //Add all inputs in table

  addList = input => {
    if (this.state.inputUser.length > 0) {
      let newList = this.state.list;
      newList.push({ desc: input, complete: false });

      this.setState({ list: newList, inputUser: "", alert: false });
    } else {
      this.setState({
        alert: true
      });
    }
  };
  // Button Delete
  buttonDelete = i => {
    this.setState({
      list: this.state.list.filter((el, index) => i !== index)
    });
  };

  //Button Complete
  complete = i => {
    let Newlist = this.state.list;
    Newlist[i].complet = !Newlist[i].complet;
    this.setState({
      list: Newlist
    });
  };

  //Render
  render() {
    return (
      <div>
        <div className="add-list ">
          <h1>To-do App !</h1>
          <h3 id="h3">Add New To-do</h3>
          <div>
            <input
              type="text"
              className="forms"
              placeholder="Add List"
              value={this.state.inputUser}
              onChange={e => this.changeInput(e.target.value)}
            />
            <button
              className="btn-add"
              onClick={() => this.addList(this.state.inputUser)}
            >
              Add
            </button>
            <div
              style={{ display: this.state.alert ? "block" : "none" }}
              className="alert alert-warning"
              role="alert"
            >
              Should have an input value!
            </div>
          </div>
        </div>

        <div className="new-list">
          <ul>
            {this.state.list.map((el, i) => (
              <li>
                <span className={el.complet ? "complet" : "ando"}>
                  {el.desc}
                </span>

                <button
                  className="btn btn-success"
                  onClick={() => this.complete(i)}
                >
                  {el.complet ? "undo" : "complete"}
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => this.buttonDelete(i)}
                >
                  Delete{" "}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default TodoUp;
