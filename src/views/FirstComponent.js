import React from "react";
import { ReactDOM } from "react";
import ChildComponent from "./ChildComponent";
import { SecondComponent } from "./SecondComponent";
class FirstComponent extends React.Component {
  state = {
    jobs: [
      { id: 1, title: "Developer", salary: "500" },
      { id: 2, title: "BA", salary: "400" },
      { id: 3, title: "PM", salary: "1000" },
      { id: 4, title: "Sales", salary: "300" },

    ],
  };

   addNewJob = (job) => {
    
    this.setState(
      { jobs: [...this.state.jobs,job] },
      );
   }
   deleteAJob = (job) => {
      console.log(job);
      let currentJobs = this.state.jobs;
      console.log(currentJobs);
      currentJobs = currentJobs.filter(item => item.id!==job.id);
      this.setState({
        jobs: currentJobs
      })
   };



  render() {
    return (

      <>
      <SecondComponent addNewJob = {this.addNewJob} />
        
        <ChildComponent jobsArr={this.state.jobs} deleteAJob={this.deleteAJob} />
      </>
    );
  }
}

export default FirstComponent;