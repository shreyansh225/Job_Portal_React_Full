import {React, useState, useEffect} from 'react'
import {IoMdSearch} from 'react-icons/io'
import { ImSpinner } from 'react-icons/im';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SearchTab = ({ initialSearchData, setSearchData, doRelode }) => {

    const [ title, setTitle ] = useState("");
	const [ type, setType ] = useState("");
    const [ location, setLocation ] = useState("");
	const [ companyName, setCompanyName ] = useState("");
    const [isReload, setIsReload] = useState(false);

    const handleReload = () => {
        // window.location.reload();
        setIsReload(true);
    
        let makeBlank = document.getElementsByTagName("input");
        console.log(makeBlank);
        for(let i=0;i<makeBlank.length;i++)
          makeBlank[i].value = '';

          doRelode();
          setTitle(''); setType(''); setLocation(''); setCompanyName('');
          setIsReload(false);
      }
    
      const handleSearch = () => {
        const filterdata = 
        initialSearchData.filter( item => {  
          if( 
              ( title.trim().length === 0 ? true : item.title.toLowerCase().includes(  title.toLowerCase()) )
              && 
              ( companyName.trim().length === 0 ? true : item.company.name.toLowerCase().includes(  companyName.toLowerCase()) )
              && 
              ( location.trim().length === 0 ? true : item.location.toLowerCase().includes(  location.toLowerCase()) )
              && 
              ( type.trim().length === 0 ? true : item.type.toLowerCase().includes(  type.toLowerCase()) )
            ) 
             {
              return item;
             }
       })
        setSearchData(filterdata); 
        }


  return (
    <>
       <div className="grid md:grid-cols-5 sm:grid-cols-2 ">
              <div className="col-sm-2 col-md-2">
                <div className="mb-4">
                <label className='block text-gray-800 font-medium mb-2'> Role Title </label>
                  <input type="text" className='border-2 border-indigo-400 rounded w-auto py-2 px-3 mb-2' id="title" required onChange={((e) => setTitle(e.target.value))} />
                </div>
              </div>
              <div className="col-sm-3 col-md-2.5">
                <div className="mb-4">
                  <label className='block text-gray-800 font-medium mb-2'> Type </label>
                  <input type="text" className='border-2 border-indigo-400 rounded w-auto py-2 px-3 mb-2'  id="type" onChange={(e) => setType(e.target.value)} required />
                  {/* <label htmlFor="type">Type</label> */}
                </div>
              </div>
             
              <div className="col-sm-3 col-md-2.5">
                <div className="mb-4">
                  <label className='block text-gray-800 font-medium mb-2'> Location </label>
                  <input type="text" className='border-2 border-indigo-400 rounded w-auto py-2 px-3 mb-2' id="location" onChange={(e) => setLocation(e.target.value)} required />
                </div>
              </div>

              <div className="col-sm-2 col-md-2">
              <div className="mb-4">
                <label className='block text-gray-800 font-medium mb-2'> Company Name </label>
                <input type="text" className='border-2 border-indigo-400 rounded w-auto py-2 px-3 mb-2' id="sponsor" onChange={(e) => setCompanyName(e.target.value)} required />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 mt-8">
                <div className=" " title=" Search ">
                  <button className="px-auto " onClick={() => handleSearch()} > <IoMdSearch size={40} /></button>
                </div>

                <div className=" " title=" Reset ">
                <button className="btnsearch btn-block" onClick={ () => handleReload()}>  <i className={` fa fa-refresh fa-2x fa-fw ${ isReload ? 'fa-spin' : '' } `}></i></button> 
                {/* <button className={`flex px-auto items-center justify-center ${isReload ? 'animate-spin' : ''}`} 
                onClick={() => handleReload()} disabled={isReload} 
                style={{ border: 'none', background: 'none', cursor: 'pointer' }} > <ImSpinner size={40}/> </button> */}
                </div>
              </div>
              {/* <div className="col-sm-2 col-md-1">
                
              </div> */}
        </div> 
    </>
  )
}

export default SearchTab