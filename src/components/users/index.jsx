import { useEffect, useState } from "react";


 function Users() {
    const [usersList,setUsersList]=useState([]);
    const [pending,setPending]=useState(false);

    async function fetchAllUsers() {
        try {
            setPending(true);
            const apiResponse=await fetch('https://dummyjson.com/users')
            const result=await apiResponse.json();
            console.log(result)

            if(result?.users){
                setPending(false);
                setUsersList(result?.users);
            }
            else{
                setUsersList([]);
                setPending(false);
            }
            console.log(usersList)

        } catch (error) {
            console.log(error)
        }
    }

    // useEffect(()=>{
    //     fetchAllUsers();
    // },[])

    function handleUsers(){
        fetchAllUsers();
    }

    if(pending) return <h1>FETCHING USERS PLEASE WAIT!</h1>

    return (
    <div>
        <h1>
            ALL USERS LIST
        </h1>
        <button onClick={handleUsers}>Fetch Users</button>
        <ul>
            {
                usersList && usersList.length>0 ?
                usersList.map(useritem=> <li key={useritem?.id}>
                   <p> {useritem.firstName} {useritem.lastName}</p>

                </li>):<h1>NO Users FOund!!</h1>
            }
        </ul>
    </div>
    );
}
export default Users;