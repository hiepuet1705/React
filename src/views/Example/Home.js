import React from "react";

class Home extends React.Component {

    componentDidMount(){
        setTimeout(()=> 3000);
    }

    render() {
        console.log(this.props.history)
        return(<div>
            Hello world from HomePage
        </div>)
    }
}
export default Home;