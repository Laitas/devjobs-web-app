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
  useEffect(() => {
    dispatch(setJobs(data));
    console.log(jobs);
  },[]);
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
