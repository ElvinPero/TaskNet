import React from 'react'
import { useNavigate } from "react-router-dom";
import a from '../assets/a.png'
import git from '../assets/git.svg'
const home = () => {
    const navigate = useNavigate();

    const navigateApp = () => {

        navigate('/x');
    };
    return (
        <>
            <div className='homeWrapper'>
                <div className='topic'>
                    <div className='head3'>Task Net        <button className="icon"><img src={git} alt="" /></button></div>
                </div>
                <div className='body1'>
                    <div className="para  head2">
                        TaskNet is a versatile and efficient task management application that organizes your tasks using a graph-based structure.
                        <br /><br />With TaskNet, you can easily create, track, and manage your tasks in a visually intuitive and interconnected way.
                    </div>
                    <div className="imgi">
                        <img className="imgg" src={a} alt="" />
                    </div>
                </div>

                <button className='btn-hover color-1' onClick={navigateApp}>Get Started</button>
            </div>
        </>
    )
}

export default home