import React from 'react'
import HeaderTemplate from "../../components/HeaderTemplate/HeaderTemplate";
import Card from "../../components/Card/Card";
import informPatter from "../../img/informPattern.png";
import Plus from "../../img/blankAdd.png";
import party from "../../img/party_invite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
const TemplateSection = () => {
  return (
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
  )
}

export default TemplateSection