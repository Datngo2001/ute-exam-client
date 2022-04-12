import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosForm from "../../api/axiosForm";

function FindTest() {
  const navigate = useNavigate();
  const [id, setId] = useState('');

  const handleClick = () => {
    axiosForm.getForm(id).then((res) => {
      console.log(res)
      if (res != null) {
        navigate('/do', { state: res });
      }
    })
  }

  const handleIdChange = (e) => {
    setId(e.target.value)
  }

  return (
    <div className='row m-0 justify-content-center'>
      <div className='col-12'>
        <input type='text' className='' value={id} onChange={handleIdChange}></input>
      </div>
      <div className='col-12'>
        <button onClick={handleClick}>FIND</button>
      </div>
    </div>
  )
}

export default FindTest