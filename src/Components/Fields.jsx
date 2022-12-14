import React from "react";
import Icon from '@mui/material/Icon';

function Fields(props){
    return (
        <div className="input-group col-lg-6 mb-2">
            <div className="input-group-prepend">
                <span className="input-group-text bg-white px-4 border-md border-right-0">
                    <Icon>{props.iconName}</Icon>
                </span>
            </div>
            <input id={props.idName} type={props.type} name={props.idName} placeholder={props.placeholder} className="form-control bg-white border-left-0 border-md"></input>
        </div>
    );
}

export default Fields;