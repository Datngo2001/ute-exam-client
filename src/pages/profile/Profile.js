import "./Profile.css";
import React from 'react'
function Profile() {
  return (
    <div className="profile justify-content-center">
      <div className="col-md-3 border-right">
        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
          <img
            className="rounded-circle mt-5"
            width="150px"
            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
          />
          <span className="font-weight-bold">Edogaru</span>
          <span className="text-black-50">edogaru@mail.com.my</span>
          <span> </span>
        </div>
      </div>
      <div className="col-md-5 border-right profile_container">
        <div className="p-3 py-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="text-right"> PROFILE TEACHER </h4>
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              <label className="labels">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="first name"
                value=""
              />
            </div>
            <div className="col-md-6">
              <label className="labels">Surname</label>
              <input
                type="text"
                className="form-control"
                value=""
                placeholder="surname"
              />
            </div>
          </div>
          <div className="col-md-12">
            <label className="labels">Teacher ID:</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter ID teacher"
              value=""
            />
          </div>
          <div className="col-md-6">
            <label className="labels">Date of birth</label>
            <input
              type="text"
              className="form-control"
              value=""
              placeholder="Date of birth"
            />
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <label className="labels">Mobile Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter phone number"
                value=""
              />
            </div>
            <div className="col-md-12">
              <label className="labels">Home Town:</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter Home Town"
                value=""
              />
            </div>
            <div className="col-md-12">
              <label className="labels">Current Residence</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter current residence"
                value=""
              />
            </div>
            <div className="col-md-12">
              <label className="labels">Gender</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter gender"
                value=""
              />
            </div>
            <div className="col-md-12">
              <label className="labels">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter email "
                value=""
              />
            </div>
            <div className="col-md-12">
              <label className="labels">Degree</label>
              <input
                type="text"
                className="form-control"
                placeholder="Degree"
                value=""
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <label className="labels">Country</label>
              <input
                type="text"
                className="form-control"
                placeholder="Country"
                value=""
              />
            </div>
          </div>
          <div className="mt-5 text-center">
            <button className="btn btn-primary profile-button" type="button">
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
