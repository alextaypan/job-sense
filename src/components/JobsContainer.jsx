import { useEffect } from "react";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import { getAllJobs } from "../features/allJobs/allJobsSlice";

const JobsContainer = () => {
  const { jobs, isLoading } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Loading center />;
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>There is no jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>jobs info</h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};
export default JobsContainer;
