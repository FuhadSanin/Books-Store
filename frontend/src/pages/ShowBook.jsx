import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import {datas} from '../Constants/'

const ShowBook = () => {
  const [book,setBook] = useState({});
  const [loading,setLoading] = useState(false);
  const {id} = useParams();

  // useEffect(()=> {
  //   setLoading(true);
  //   axios
  //     .get()
  //     .then((response)=>{
  //       setBook(response.data);
  //       setLoading(false);
  //     })
  //     .catch((error)=>{
  //       console.log(error);
  //       setLoading(false);
  //     });
      
  // }, [])
  
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Show Book</h1>
      {loading ? (
        <Spinner/>

      ) : (
        
        <div className='flex flex-col border-sky-400 rounded-xl w-fit p-4'>
          {datas.map((data) => (
          <tr key={data.No} className="h-15">
            <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{data.No}</span>
          </div>
          
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Title</span>
            <span>{data.Title}</span>
          </div>
          
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Author</span>
            <span>{data.Author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
            <span>{data.Publish_Year}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            <span>{data.Publish_Year}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
            <span>{new Date(data.updateAt).toString()}</span>
          </div>
          </tr>))}
          
          
        </div>
      )}
      
    </div>
  )
}

export default ShowBook
