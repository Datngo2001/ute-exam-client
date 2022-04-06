import "./Profile.css";

function Profile() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-3 border-right">
        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
          <img
            className="rounded-circle mt-5"
            width="150px"
            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
          />
          <span className="font-weight-bold">Edogaru</span>
          <span className="text-black-50">edogaru@mail.com.my</span>
          <span> Edit </span>
        </div>
      </div>
      <div className="col-md-5 border-right">
        <div className="p-3 py-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="text-right">Profile Student</h4>
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              <label className="labels">FirstName</label>
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
          <div className="row mt-3">
            <div className="col-md-12">
              <label className="labels">ID Student</label>
              <input
                type="text"
                className="form-control"
                placeholder="ID Student"
                value=""
              />
            </div>
            <div className="col-md-12">
              <label className="labels">Class</label>
              <input
                type="text"
                className="form-control"
                placeholder="Class"
                value=""
              />
            </div>
            <div className="col-md-12">
              <label className="labels">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Email Student"
                value=""
              />
            </div>
            <div className="col-md-12">
              <label className="labels">Hometown</label>
              <input
                type="text"
                className="form-control"
                placeholder="Hometown"
                value=""
              />
            </div>
            <div className="col-md-12">
              <label className="labels">Phone Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                value=""
              />
            </div>
            <div className="col-md-12">
              <label className="labels">Gender</label>
              <input
                type="text"
                className="form-control"
                placeholder="Gender"
                value=""
              />
            </div>
            <div className="col-md-12">
              <label className="labels">Date Of Birth</label>
              <input
                type="text"
                className="form-control"
                placeholder="Date Of Birth"
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
                placeholder="country"
                value=""
              />
            </div>
            <div className="col-md-6">
              <label className="labels">State/Region</label>
              <input
                type="text"
                className="form-control"
                value=""
                placeholder="state"
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
