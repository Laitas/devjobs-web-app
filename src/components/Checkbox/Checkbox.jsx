import React from 'react'
import './Checkbox.scss'
import checkIcon from "../../assets/desktop/icon-check.svg";
import { useSelector } from 'react-redux';

const Checkbox = () => {
    const check = useSelector(state=> state.check.check)
    return <div className={check?"checkbox-input checked" : "checkbox-input"}>{check? <img src={checkIcon} alt=""/>: null}</div>;
}

export default Checkbox
