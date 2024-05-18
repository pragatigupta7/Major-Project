import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import 'bootstrap/dist/css/bootstrap.min.css';
 // Import Bootstrap CSS

const EditPage = () => {
  const {id} = useParams();
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const [companyProfile, setCompanyProfile] = useState(currentUser.profile);

  console.log(currentUser);

  const updateUser = (data) => {
    fetch('http://localhost:5000/user/update/' + currentUser._id, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log(response.status);
      if (response.status === 200) {
        response.json()
          .then(data => {
            console.log(data);
            setCurrentUser(data);
            setCompanyProfile(data.profile);
            sessionStorage.setItem('user', JSON.stringify(data));
          })
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  const updateProfile = (data) => {
    console.log(data);
    fetch('http://localhost:5000/profile/update/' + companyProfile._id, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      if (response.status === 200) {
        response.json()
          .then(data => {
            console.log(data);
            setCompanyProfile(data);
            enqueueSnackbar('Profile Updated')
          })
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  const createNewProfile = () => {
    fetch('http://localhost:5000/profile/add', {
      method: 'POST',
      body: JSON.stringify({ name: currentUser.name + "'s Company" }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log(response.status);
      if (response.status === 200) {
        enqueueSnackbar('Created Profile Successfully');
        response.json()
          .then((result) => {
            console.log(result);
            updateUser({ profile: result._id })
          })
      } else {
        enqueueSnackbar('Something went wrong');
      }
    }).catch((err) => {
      console.log(err);
      enqueueSnackbar('Something went wrong');
    });
  }

  return (
    <>
      {
        !currentUser.profile ?
          <button onClick={createNewProfile} className='btn btn-primary'>Create Profile</button> :
          (
            <div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="card mt-5">
                      <div className="card-body">
                        <h2 className="card-title text-xl font-bold text-gray-800 dark:text-neutral-200">Edit page</h2>
                        <p className="card-text text-sm text-gray-600 dark:text-neutral-400">Manage your name, password, and account settings.</p>
                        <Formik initialValues={companyProfile} onSubmit={updateProfile}>
                          {
                            ({ values, handleChange, handleSubmit }) => (
                              <form onSubmit={handleSubmit}>
                                <div className="row">
                                  <div className="col-md-3">
                                    <label className="form-label">Profile photo</label>
                                  </div>
                                  <div className="col-md-9">
                                    <div className="d-flex align-items-center gap-3">
                                      <img
                                        className="rounded-circle"
                                        src="../assets/img/160x160/img1.jpg"
                                        alt="Profile Photo"
                                      />
                                      <div className="d-flex gap-2">
                                        <div>
                                          <button
                                            type="button"
                                            className="btn btn-secondary"
                                          >
                                            Upload photo
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="form-label" htmlFor="name">Name</label>
                                  </div>
                                  <div className="col-md-9">
                                    <input
                                      id="name"
                                      onChange={handleChange}
                                      value={values.name}
                                      type="text"
                                      className="form-control"
                                      placeholder="Maria"
                                    />
                                  </div>
                                  {/* Add other fields similarly */}
                                  <div className="col-md-12 mt-3">
                                    <button
                                      type="submit"
                                      className="btn btn-primary"
                                    >
                                      Save changes
                                    </button>
                                  </div>
                                </div>
                              </form>
                            )
                          }
                        </Formik>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
      }
    </>
  )
}

export default EditPage;
