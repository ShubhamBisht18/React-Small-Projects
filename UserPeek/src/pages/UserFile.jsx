import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, setSelectedUser } from '../feature/usersSlice' 
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function UserFile(){
    const dispatch = useDispatch()
    const { users, loading } = useSelector(state => state.user);
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(fetchUser())
    },[dispatch])

    if(loading) return <div>Loading please wait....</div>

    return(
        <div>
            {users.map((user)=>(
                <div key={user.id}>
                    {user.name}
                    <button onClick={()=>{
                        dispatch(setSelectedUser(user)),
                        navigate('/detail');
                    }}>Check</button>
                </div>
            ))}
        </div>
    )
}

export default UserFile