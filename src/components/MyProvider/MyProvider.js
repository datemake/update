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
         
          
        </MyContext.Provider>
      )
  }

