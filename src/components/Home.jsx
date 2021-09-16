import React from "react";
import { useState, useEffect } from "react";
import JobList from "./JobList";
import { connect } from "react-redux";
import { fillJobsAction } from "../actions";
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  fetchJobs: () => dispatch(fillJobsAction()),
});
const Home = (props) => {
  const [jobs, setJobs] = useState([]);
  /* const fetchJobs = async () => {
    console.log("e" + props.searchQuery);
    if (props.searchQuery) {
      try {
        const response = await fetch(
          "https://strive-jobs-api.herokuapp.com/jobs?title=" +
            props.searchQuery
        );
        if (response.ok) {
          const fetchedJobs = await response.json();
          console.log(fetchedJobs.data);
          setJobs(fetchedJobs.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const fetchWithCategory = async () => {
    console.log("c" + props.searchCategory);
    if (props.searchCategory) {
      try {
        const response = await fetch(
          "https://strive-jobs-api.herokuapp.com/jobs?category=" +
            props.searchCategory
        );
        if (response.ok) {
          const fetchedJobs = await response.json();
          console.log("fetchedCategory=", fetchedJobs.data);
          setJobs(fetchedJobs.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchWithCategory();
    fetchJobs();
  }, [props.searchQuery, props.searchCategory]);
 */
  useEffect(() => {
    props.fetchJobs();
  }, []);
  return (
    <div className="mt-5">
      {console.log(props.job.jobs[0].data[0])}
      {props.job.jobs[0].data.map((job) => (
        <JobList key={job._id} job={job} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
