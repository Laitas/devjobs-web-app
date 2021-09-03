import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJobs } from "../../redux/jobsSlice";
import data from "../../data.json";
import JobComponent from "../../components/JobComponent/JobComponent";
import './Homepage.scss'
const Homepage = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);
  useEffect(() => {
    dispatch(setJobs(data));
    console.log(jobs);
  }, []);
  return (
    <section className="homepage">
      {jobs.map(({ id, ...otherProps }) => (
        <JobComponent key={id} {...otherProps} />
      ))}
    </section>
  );
};

export default Homepage;
