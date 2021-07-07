import React from 'react'
import PagesTitle from '../Components/PagesTitle';
import CachedIcon from '@material-ui/icons/Cached';

function Projects() {
    return (
        <div className="title">
            <PagesTitle title={"My "} span={"Projects"}/>
           <h1>Work In Progress <CachedIcon/></h1> 
        </div>
    )
}

export default Projects
