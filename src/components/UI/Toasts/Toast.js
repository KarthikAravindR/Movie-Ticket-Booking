import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';

import './Toast.css'

const Toast = (props) =>  {
        // console.log(props.show1)
        return (
            <div>
                <div className="Toast" style={{
                    transform: props.show  ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                    <div className="delete1" style={!props.completed ? {margin:"0 8px"}: {margin:"0 8px 0 auto"}}><FontAwesomeIcon icon={faCheckCircle}/></div>
                    <div>Booking Placed</div>
                </div>
            </div >
        );
}


export default Toast
