import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { toggleCheckbox } from '../../redux/checkboxSlice';
import locationIcon from "../../assets/desktop/icon-location.svg";
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import './Modal.scss'

const Modal = ({modal,setModal,handleChangeLocation}) => {
    const dispatch = useDispatch()
      const location = useSelector((state) => state.search.location);
    return (
        <div className="modal-wrapper">
        <div className="overlay-wrapper" onClick={()=> setModal(!modal)}></div>
      <div className="modal">
        <div className="filter-location">
          <form>
            <img className="filter-icon" src={locationIcon} alt="" />
            <input type="text" placeholder="Filter by location..." 
            value={location}
            onChange={e=>handleChangeLocation(e)}/>
          </form>
        </div>
        <div className="bottom-wrapper">
          <div className="checkbox" onClick={()=> dispatch(toggleCheckbox())}>
            <Checkbox/>
            <p className="label">Full Time Only</p>
          </div>
            <div className="search-btn">
              <Button text="Search" onClick={()=>setModal(!modal)}/>
            </div>
        </div>
      </div>
                </div>
    );
}

export default Modal
