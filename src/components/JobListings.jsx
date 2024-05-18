import {React, useState, useEffect} from 'react'
import SearchTab from './SearchTab';
import JobListing from './JobListing';
import Pagination from './Pagination';
import Spinner from './Spinner';

const JobListings = ({isHome = false}) => {
  const [loading, setLoading] = useState(true);
  const [searchData, setSearchData] = useState([]);

  // const jobListingsData = isHome ? jobs.slice(0,3) : jobs;
 
  useEffect( () => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    // http://localhost:8000 changed to api in the vite.config.js file

    const apiUrl = isHome
    ? '/api/jobs?_limit=6'   
    : '/api/jobs'

    try {
      const res = await fetch(apiUrl);
      const data = await res.json()
      // setTimeout(() => {   // To check the Spinner and Reload button working or not
        console.log(" Data input = ",data)
        setSearchData(data);
      // }, 3000);
    } catch (error) {
      console.log('Error fetching data : ', error);
    } finally{
      setLoading(false);
    }
  }


  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>

        {isHome ? '': <SearchTab initialSearchData={searchData} setSearchData={setSearchData} doRelode = {fetchJobs}/>}
          
        {loading ? <Spinner loading={loading}  />
          : (<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {searchData.map((job) => (
                <JobListing key={job.id} job={job}/>
              ))}
            </div>)
        }

        {isHome ? '': <Pagination initialSearchData={searchData} />}
       
      </div>
    </section>
  )
}

export default JobListings