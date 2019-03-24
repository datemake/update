import React  from 'react';
import Button from '@material-ui/core/Button'


import './search.css'

function Results(props) {
    // const test = React.useContext(TestContext)
    // console.log(test)
    return (
        <div id='results_div' style={{color: 'white'}}>
            {/* {props.test} */}
            {/* <Button variant='contained' onClick={() => props.setTest('changed')}>Change Word</Button> */}
        </div>
    );
}


export default Results;