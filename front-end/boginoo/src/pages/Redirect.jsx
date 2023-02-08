import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Redirect = () => {
  const {id} = useParams();
  axios
   .get(`http://localhost:8000/links/${id}`)
   .then((response)=> {
    window.location.replace(response.data);
   })
   .catch((error) => {
      console.log(error)
   })
  return (
    <div>Redirecting</div>
  )
}
export default Redirect;
