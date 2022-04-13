import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosForm from "../../api/axiosForm";
import "./FindTest.css";


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
      <div className='col-3'>
        <input type='text'  className=''class="form-control form-control-lg"  value={id} onChange={handleIdChange}></input>
      </div>
      <div className='col-12'>
        <button type="button" class='btn btn-outline-primary btn-lg '  onClick={handleClick}>FIND</button>
        
      </div>
    </div>
  )
}

export default FindTest