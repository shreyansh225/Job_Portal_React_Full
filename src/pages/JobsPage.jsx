import React from 'react'
import { useState } from 'react';
import JobListings from '../components/JobListings';
import ToggleView from '../components/ToggleView';
import ViewAllJobs from '../components/ViewAllJobs';


const JobsPage = () => {

  const [tableView,setTableView] = useState(false)   ; 

  return (
    <section  className='bg-blue-50 px-4 py-6'>
        <ToggleView tableView={tableView} setTableView={setTableView} />
        <JobListings />
        {/* <ViewAllJobs/> */}
    </section>
  )
}

export default JobsPage