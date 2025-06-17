import {useSelector} from 'react-redux'

function UserDetail(){
    const { selectedUser } = useSelector(state => state.user)
    if(!selectedUser) return <div>No user selected.</div>
    return(
        <div>
            <h3>User Detail</h3>
            <p><strong>Name:</strong> {selectedUser.name}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Phone:</strong> {selectedUser.phone}</p>
            <p><strong>Website:</strong> {selectedUser.company.name}</p>
        </div>
    )
}

export default UserDetail