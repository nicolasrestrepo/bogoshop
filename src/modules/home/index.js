import React from 'react';
import { Link } from '@reach/router';

function Home(){
    return(
        <React.Fragment>
            <h4>Home</h4>
            <Link to="/detail/123123">detail</Link>
        </React.Fragment>
    )
}

export default Home
