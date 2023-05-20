import React from "react";

class ChildComponent extends React.Component {
    state = {
        showJobs: false,
    }
    render() {
        const { jobsArr } = this.props;
        let { showJobs } = this.state;
        const showHide = () => {
            this.setState(
                {
                    showJobs: !showJobs,
                }
            )
        }
        const handleClicked = (job) => {
            
            this.props.deleteAJob(job)
        }

        return (
            <>
                <button onClick={showHide}>show/hide</button>
                {showJobs && <div className="joblist">

                    {

                        jobsArr.map((item, index) => {
                            if (+item.salary >= 500) {
                                return (

                                    <div key={item.id}>
                                        Job: {item.title} + Salary: {item.salary}$
                                        <button style={{margin: '10px'}} onClick={()=>handleClicked(item)}>Delete</button>
                                    </div>
                                )
                            }

                        })
                    }
                </div>}
            </>
        )
    }
}
export default ChildComponent