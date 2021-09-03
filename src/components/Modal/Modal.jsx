import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleCheckbox } from '../../redux/checkboxSlice';
import locationIcon from "../../assets/desktop/icon-location.svg";
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import './Modal.scss'

const Modal = ({modal,setModal}) => {
    const dispatch = useDispatch()
    return (
        <div className="modal-wrapper">
        <div className="overlay-wrapper" onClick={()=> setModal(!modal)}></div>
      <div className="modal">
        <div className="filter-location">
          <form>
            <img className="filter-icon" src={locationIcon} alt="" />
            <input type="text" placeholder="Filter by location..." />
          </form>
        </div>
        <div className="bottom-wrapper">
          <div className="checkbox" onClick={()=> dispatch(toggleCheckbox())}>
            <Checkbox/>
            <p className="label">Full Time Only</p>
          </div>
            <div className="search-btn">
              <Button text="Search" />
            </div>
        </div>
      </div>
                </div>
    );
}

export default Modal
