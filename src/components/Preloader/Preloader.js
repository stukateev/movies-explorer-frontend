import React from 'react'
import './Preloader.css'

const Preloader = (props) => {
    const {nondisplay} = props;
    return (
        <div className={`preloader ${nondisplay ? nondisplay : ''}`}>
                <span className="preloader__round"></span>
        </div>
    )
};
export default Preloader