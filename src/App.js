import React, {useContext} from 'react'
import {MyContext} from "./components/MyProvider/MyProvider"

export default function App() {
  const context = useContext(MyContext)
  return (
      <div className="person">
            <React.Fragment>
            {console.log(context)}
              {/* <p>Age: {context.age}</p>
              <p>Name: {context.name}</p>
              <button onClick={context.growAYearOlder}>🍰🍥🎂</button> */}
            </React.Fragment>
      </div>
    )
}






