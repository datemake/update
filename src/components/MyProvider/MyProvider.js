import React, {useContext,useState} from 'react'
export const MyContext = React.createContext();

export default function MyProvider(props) {
    const [name,setName] = useState("Wes")
    const [age,setAge] = useState(100)

      return (
        <MyContext.Provider value={{
          name: name,
          age:age,
          growAYearOlder: () => setAge( age + 1)
        }}>
          {props.children}
        </MyContext.Provider>
      )
  }

// import React, { Component,useState,useReducer } from 'react';
// export const MyContext = React.createContext();

// export default function MyProvider(props) {
//     const [username,setUsername] = useState("Yusef")
//     const [password,setPassword] = useState("")
//     const [email,setEmail] = useState("")
//     const [profile,setProfile] = useState("")
    
    

//     // state = {
//     //   name: 'Wes',
//     //   age: 100,
//     //   cool: true
//     // }
//       return (
//         <MyContext.Provider value={{
//           username: username,
//           profile:profile,
//         }}>
//           {props.children}
//         </MyContext.Provider>
//       )
//   }