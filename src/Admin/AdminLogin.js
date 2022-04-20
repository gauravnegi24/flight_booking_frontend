import React from 'react'
// based on login --> redirect user to UserDashboard or AdminDashboard
const Login = () => {
  return (
    <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='form-control'>
          <input
              type='text'  
              name='username'
              id='username'
              placeholder='Username'
              required
            />
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
            />
            <button type='submit'>Log In</button>
          </form>
        </div>
      </section>
    </>
  ) 
}


// function Login(props){
//   const{
//     register,
//     formState: { errors },
//     handleSubmit,
//     getValues,
//   } = useForm();

//   const onSubmit = async (data) => {
//     try{
//       let res = await fetch("http://localhost:8081/searchUser/" + data.userId, {{
//         method: "GET",
//       });
//       try{
//         let resJson = await res.json();
//         if(res.status === 200){
//           if(resJson.userPassword !== data.userPassword){
//             alert("Password is incorrect"); //use toastify instead
//           }else{
//             localStorage.setItem("userId", data.userId);
//             alert("login successfull"); // use toastify
//             props.history.push("/");
            
//           }
//         }
//       }
//     }
//   }
// }





export default Login;