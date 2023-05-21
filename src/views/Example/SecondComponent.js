import React from "react";
class SecondComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };

  handleChangetitle = (e) => {
    this.setState({ title: e.target.value });
  }
  handleChangesalary = (e) => {
    this.setState({ salary: e.target.value });
  }
  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state);
    if(!this.state.title||!this.state.salary) {
      alert('Missing required information')
      return;
    }
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1001).toString(),
      title: this.state.title,
      salary: this.state.salary
    })
    this.setState({ title: '',
  salary:''})
  }

  render() {
    return (
      <div>
        <form>
          <label>Job's title</label><br />
          <input htmlFor="title" type="text" value={this.state.title} onChange={this.handleChangetitle}></input><br />
          <label>Salary</label><br />
          <input type="text" htmlFor="salary" value={this.state.salary} onChange={this.handleChangesalary}></input><br />
          <input type="submit" value="Submit" onClick={this.handleClick}></input>
        </form>
      </div>
    )
  }
}
export { SecondComponent };