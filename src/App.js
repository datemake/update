import React, {useContext,useState} from 'react'
import routes from "./routes"
const MyContext = React.createContext();
export default function App() {
  // const context = useContext(MyContext)
  const [name,setName] = useState("Wes")
    const [age,setAge] = useState(100)
  return (
    <MyContext.Provider value={{
          name: name,
          age:age,
          growAYearOlder: () => setAge( age + 1)
        }}>
         
          
      <div className="person">
            <React.Fragment>
              {routes}
            {/* {console.log(context)} */}
              <p>Age: {age}</p>
              <p>Name: {name}</p>
              {/* <button onClick={growAYearOlder}>🍰🍥🎂</button> */}
            </React.Fragment>
      </div>
        </MyContext.Provider>
    )
}






