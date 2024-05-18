import React , { useEffect, useState }  from 'react'
import './Editprofile2.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik } from 'formik';


const Editprofile2 = () => {
    const { id } = useParams();
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
        fetch("http://localhost:5000/profile/update/" + companyProfile._id, {
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

        <div>
            {
                !currentUser.profile ?
                    <button onClick={createNewProfile} className='btn btn-primary'>Create Profile</button> :
                    (

                        <div className="login-root">
                            <div
                                className="box-root flex-flex flex-direction--column"
                                style={{ minHeight: "100vh", flexGrow: 1 }}
                            >
                                <div className="loginbackground box-background--white padding-top--64">
                                    <div className="loginbackground-gridContainer">
                                        <div
                                            className="box-root flex-flex"
                                            style={{ gridArea: "top / start / 8 / end" }}
                                        >
                                            <div
                                                className="box-root"
                                                style={{
                                                    backgroundImage:
                                                        "linear-gradient(white 0%, rgb(247, 250, 252) 33%)",
                                                    flexGrow: 1
                                                }}
                                            ></div>
                                        </div>
                                        <div
                                            className="box-root flex-flex"
                                            style={{ gridArea: "4 / 2 / auto / 5" }}
                                        >
                                            <div
                                                className="box-root box-divider--light-all-2 animationLeftRight tans3s"
                                                style={{ flexGrow: 1 }}
                                            />
                                        </div>
                                        <div
                                            className="box-root flex-flex"
                                            style={{ gridArea: "6 / start / auto / 2" }}
                                        >
                                            <div
                                                className="box-root box-background--blue800"
                                                style={{ flexGrow: 1 }}
                                            />
                                        </div>
                                        <div
                                            className="box-root flex-flex"
                                            style={{ gridArea: "7 / start / auto / 4" }}
                                        >
                                            <div
                                                className="box-root box-background--blue animationLeftRight"
                                                style={{ flexGrow: 1 }}
                                            />
                                        </div>
                                        <div
                                            className="box-root flex-flex"
                                            style={{ gridArea: "8 / 4 / auto / 6" }}
                                        >
                                            <div
                                                className="box-root box-background--gray100 animationLeftRight tans3s"
                                                style={{ flexGrow: 1 }}
                                            />
                                        </div>
                                        <div
                                            className="box-root flex-flex"
                                            style={{ gridArea: "2 / 15 / auto / end" }}
                                        >
                                            <div
                                                className="box-root box-background--cyan200 animationRightLeft tans4s"
                                                style={{ flexGrow: 1 }}
                                            />
                                        </div>
                                        <div
                                            className="box-root flex-flex"
                                            style={{ gridArea: "3 / 14 / auto / end" }}
                                        >
                                            <div
                                                className="box-root box-background--blue animationRightLeft"
                                                style={{ flexGrow: 1 }}
                                            />
                                        </div>
                                        <div
                                            className="box-root flex-flex"
                                            style={{ gridArea: "4 / 17 / auto / 20" }}
                                        >
                                            <div
                                                className="box-root box-background--gray100 animationRightLeft tans4s"
                                                style={{ flexGrow: 1 }}
                                            />
                                        </div>
                                        <div
                                            className="box-root flex-flex"
                                            style={{ gridArea: "5 / 14 / auto / 17" }}
                                        >
                                            <div
                                                className="box-root box-divider--light-all-2 animationRightLeft tans3s"
                                                style={{ flexGrow: 1 }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="box-root padding-top--24 flex-flex flex-direction--column"
                                    style={{ flexGrow: 1, zIndex: 9 }}
                                >
                                    <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
                                        <h1>
                                            <Link to="#" rel="dofollow">
                                                Create your Company Profile
                                            </Link>
                                        </h1>
                                    </div>
                                    <div className="formbg-outer">
                                        <div className="formbg">
                                            <div className="formbg-inner padding-horizontal--48">
                                                <span className="padding-bottom--15">Build Your Profile, Shape Your Future</span>
                                                <Formik initialValues={companyProfile} onSubmit={updateProfile}>
                                                    {
                                                        ({ values, handleChange, handleSubmit }) => (
                                                            <form id="stripe-login" onSubmit={handleSubmit}>

                                                                <div className="field padding-bottom--24">
                                                                    <label htmlFor="name">Name</label>
                                                                    <input type="name" name="name" id="name"
                                                                        onChange={handleChange} value={values.name} />
                                                                </div>
                                                                <div className="field padding-bottom--24">
                                                                    <label htmlFor="email">Email</label>
                                                                    <input type="email" name="email" />
                                                                </div>

                                                                <div className="field padding-bottom--24">
                                                                    <label htmlFor="name">Address</label>
                                                                    <input type="string" name="name" />
                                                                </div>
                                                                <div className="field padding-bottom--24">
                                                                    <label htmlFor="name">About</label>
                                                                    <input type="string" name="name" />
                                                                </div>
                                                                <div className="field padding-bottom--24">
                                                                    <label htmlFor="name">Industry</label>
                                                                    <input type="string" name="name" />
                                                                </div>
                                                                <div className="input-group">
                                                                    <span className="input-group-addon">City</span>
                                                                    <input
                                                                        id="msg"
                                                                        type="text"
                                                                        className="form-control"
                                                                        name="msg"
                                                                        placeholder="Enter City Name"
                                                                    />
                                                                </div>
                                                                <div className="input-group">
                                                                    <span className="input-group-addon">State</span>
                                                                    <input
                                                                        id="msg"
                                                                        type="text"
                                                                        className="form-control"
                                                                        name="msg"
                                                                        placeholder="Enter State Name"
                                                                    />
                                                                </div>
                                                                <div className="input-group">
                                                                    <span className="input-group-addon">Zipcode</span>
                                                                    <input
                                                                        id="msg"
                                                                        type="text"
                                                                        className="form-control"
                                                                        name="msg"
                                                                        placeholder="Zip Code"
                                                                    />
                                                                </div>
                                                                <div className="field padding-bottom--24">
                                                                    <label htmlFor="contact">Contact</label>
                                                                    <input type="string" name="contact" />
                                                                </div>
                                                                <div className="field padding-bottom--24">
                                                                    <label htmlFor="country">country</label>
                                                                    <input type="string" name="country" />
                                                                </div>



                                                                <div className="field">
                                                                    <div className="field padding-bottom--24">
                                                                        <label htmlFor="Created by">Created by</label>
                                                                        <input type="string" name="Created by" />
                                                                    </div>
                                                                </div>
                                                                <div className="field padding-bottom--24">
                                                                    <input type="submit" name="submit" defaultValue="Continue" />

                                                                </div>
                                                                <button
                                                                    type="submit"
                                                                    className="btn btn-primary field padding-bottom--24"
                                                                >
                                                                    Save changes
                                                                </button>
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
        </div>
    )
}
                    
            export default Editprofile2
