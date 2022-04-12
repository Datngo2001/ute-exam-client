import React, { useEffect, useState } from "react";

import HeaderTemplate from "../../components/HeaderTemplate/HeaderTemplate";
import Card from "../../components/Card/Card";
import informPatter from "../../img/informPattern.png";
import Plus from "../../img/blankAdd.png";
import party from "../../img/party_invite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import axiosForm from "../../api/axiosForm";

const DashBoardHere = () => {

  const [list, setList] = useState([])

  useEffect(() => {
    axiosForm.getListTest().then((res) => {
      setList(res.map((test) => {
        test.content = JSON.parse(test.content)
        console.log(test.content)
        return test
      }))
    })
  }, [])

  const listTest = list.map((test) => {
    console.log(test.content)
    return (
      <div className="m-auto w-50 mb-3 mt-3 card shadow">
        <div className="card-body">
          <div className="row m-0">
            <div className="col-4 text-start">
              <FontAwesomeIcon icon="fa-solid fa-check" /> Code: {test.id}
            </div>
            <div className="col-8 text-start">
              Title: {test.content.title}
            </div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className="dashboard">
      <div className="template__content">
        <div className="container">
          <HeaderTemplate />
          <div className="d-flex mt-3 pb-5 container ">
            <Link to="/form/edit">
              <Card src={Plus} text={"Blank"} />
            </Link>

            <Card src={informPatter} text={"Information Contact"} />
            <Card src={party} text={"Party Temp"} />
            <Card src={informPatter} text={"Information Contact"} />
            <Card src={party} text={"Party Temp"} />
          </div>
        </div>
      </div>
      <div className="container">
        {listTest}
      </div>
    </div>
  );
};

export default DashBoardHere;
