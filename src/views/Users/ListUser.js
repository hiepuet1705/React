import React from 'react';
import axios from 'axios';
class ListUser extends React.Component {
    state = {
        listUsers: [],
    };
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1')
        console.log(res.data)
        this.setState({
            listUsers: res.data && res.data.data ? res.data.data : []
        })
    }
    render() {
        let { listUsers } = this.state;
        console.log("check listUsers", listUsers)
        // console.log('render')
        return (
            <div className='list-user-container'>

                {/* {listUsers && listUsers.length >0&&listUsers.map(user => 
            {
                (<div key={user.id}>{user.first_name} Hiep</div>)}
                )
            } */}
                <div className='title'>
                    Fetch all users
                </div>
                <div className='list-user-content'>
                    {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                        return (<div className='child' key={item.id}>{item.id} - {item.first_name} - {item.last_name}</div>)
                    }
                    )}

                   
                </div>

            </div>

        )
    }
}
export default ListUser;