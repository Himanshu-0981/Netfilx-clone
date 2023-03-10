import React,{useState,useEffect} from "react";
import ApiContext from "./ApiContext";

const ApiState = (props) => {
    return (
        <ApiContext.Provider >
            {props.children}
        </ApiContext.Provider>
    )
}

export default ApiState;