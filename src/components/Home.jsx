import React from "react";
import { useState, useEffect } from "react";
import JobList from "./JobList";
import { connect } from "react-redux";
import { fillJobsAction } from "../actions";
import { Alert, Spinner } from "react-bootstrap";
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
      {props.job.error ? (
        <Alert variant="danger">SOMETHING WENT WRONG!</Alert>
      ) : props.job.loading ? (
        <Spinner animation="border" variant="success" />
      ) : (
        <>
          {console.log("jobs from state", props.job.jobs)}
          {props.job.jobs.map((job) => (
            <JobList key={job._id} jobb={job} />
          ))}
        </>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
