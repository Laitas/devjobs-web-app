import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJobs } from "../../redux/jobsSlice";
import data from "../../data.json";
import JobComponent from "../../components/JobComponent/JobComponent";
import Button from '../../components/Button/Button'
import { useHistory } from "react-router";
import './Homepage.scss'
const Homepage = () => {
  const [limit,setLimit] = useState(8)
  const dispatch = useDispatch();
  const history = useHistory()
  const check = useSelector(state => state.check.check)
  const title = useSelector(state => state.search.title)
  const location = useSelector(state => state.search.location)
  const jobs = useSelector((state) => state.jobs);
  const routeChange = (id) =>{
    history.push(`job/${id}`)
  }
  const loadMore = () =>{
    if(limit > jobs.length){
      setLimit(jobs.length)
    }else{
      setLimit(limit + 8)
    }
  }
  const checkFullTime = () =>{
    if(check){
      const found = jobs.filter((job) => job.contract === "Full Time");
      dispatch(setJobs(found));
    }else{
      dispatch(setJobs(data));
    }
  }
  const searchInput = () =>{
    if (title !== "") {
      const found = data.filter(
        (job) =>
          job.company.slice(0, title.length).toLowerCase() ===
            title.toLowerCase() ||
          job.position.slice(0, title.length).toLowerCase() ===
            title.toLowerCase()
      );
      dispatch(setJobs(found));
    } else if (location !== "") {
      const found = data.filter(
        (job) =>
          job.location.slice(0, location.length).toLowerCase() ===
          location.toLowerCase()
      );
      dispatch(setJobs(found));
    } else if (!title || !location) {
      dispatch(setJobs(data));
    }
  }
  useEffect(() => {
    dispatch(setJobs(data));
  },[]);
  useEffect(()=>{
      checkFullTime();   
  },[check])
  useEffect(()=>{
    searchInput()
  },[title,location])
  return (
    <section className="homepage">
      <div className="jobs">
      {jobs.slice(0,limit).map(({ id, ...otherProps }) => (
        <JobComponent onClick={()=>routeChange(id)} key={id} {...otherProps} />
        ))}
        </div>
      <div className="loadBtn">
        <Button onClick={loadMore} text='Load more'/>
      </div>
    </section>
  );
};

export default Homepage;
