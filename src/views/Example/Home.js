import React from "react";
import { connect } from 'react-redux'
class Home extends React.Component {

    componentDidMount() {
        setTimeout(() => 3000);
    }
    handleClickDelete = (user) => {
        console.log(">>>>> CHECK DELETE USER", user)
        this.props.deleteUserRedux(user)
    }
    handleCreateUser = () => {
        this.props.addUserRedux()
    }

    render() {
        console.log(">>> check props", this.props.dataRedux)
        let listUsers = this.props.dataRedux;
        return (<div>
            Hello world from HomePage
            {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                return (<div key={item.id}>
                    {index + 1} - {item.name}
                    <button style={{ marginLeft: '4px', padding: '-4px' }} onClick={() => this.handleClickDelete(item)}>Delete</button>

                </div>)

            })}
            <button style={{ marginTop: '20px', padding: '4px' }} onClick={() => this.handleCreateUser()}>Add new</button>
        </div>)
    }
}
const mapStateToProps = (state) => {
    return { dataRedux: state.users }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);