import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
const HeaderTemplate = () => {
  return (
    <div className="d-flex mt-4 justify-content-between align-items-center">
      <div className="contract__text text-capitalize ">start new form</div>
      <div className="contract__action d-flex align-items-center">
        <div className="contract__more me-3">
          <span className="me-2"> Template Form</span>

          <FontAwesomeIcon icon={"fa-solid fa-arrows-up-down"} />
        </div>
        <div className="doc__contract_more">
          <FontAwesomeIcon icon={"fa-solid fa-ellipsis-vertical"} />
        </div>
      </div>
    </div>
  );
};

export default HeaderTemplate;
