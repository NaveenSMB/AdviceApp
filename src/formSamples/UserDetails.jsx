import {useState} from 'react'

export const UserDetails = () => {
  
  const [user, setUser] = useState({name:"SMB", age:21});


  //function changeName(e){
  // const newStateObject= {...user};
  // newStateObject.name=e.target.value;
  // setUser(newStateObject);

    // setUser((oldstate)=>{
    //   return {...oldstate, name: e.target.value};
    // });

    // setUser({...user, name: e.target.value});
  //   }
  
  // function changeAge(e){
  //   const newStateAge={...user};
  //   newStateAge.age=e.target.value;
  //   setUser(newStateAge);
  // }

  function changeHandler(e){
    setUser({...user, [e.target.name]: e.target.value});
  }


  return (
    <>
    <h2>
      {user.name}, {user.age}
    </h2>
    <form action="">
      <input type="text" placeholder="Enter User Name" onChange={changeHandler} value={user.name} name="name"/>
      <input type="text" placeholder="Enter User Age" onChange={changeHandler} value={user.age} name="age"/>

    </form>


    </>
  )
}
