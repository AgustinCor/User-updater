import React from 'react';

const UsersList = ({usersList,selectUser,deleteUser}) => {
  const colors =["#097954","#22c1c3","#eeaeca","#fdbb2d"];
  const randomColors=Math.floor(Math.random() * colors.length);

    return (
        <ul>
            {
            usersList.map(user =>(
             <li key={user.id} style={{background:colors[randomColors]}}>
               <div className='titles-container'>
                 <h3><i class="fa-regular fa-envelope"></i> {user.email}</h3>
                 <div className='name-container'>
                   <h3> {user.first_name}</h3>
                   <h3> {user.last_name}</h3>
                 </div>
                 <h3><i class="fa-regular fa-calendar"></i>{user.birthday}</h3>
               </div>
             <div className='button-container'>
                 <button className='button-1' onClick={() => selectUser(user)}>
                 <i class="fa-solid fa-pen"></i>
                 </button>
                 <button className='button-2' onClick={()=> deleteUser(user.id)}>
                 <i class="fa-solid fa-circle-xmark"></i>
                 </button>
              </div>
             </li>
              ))
            }
        </ul>
    );
};

export default UsersList;