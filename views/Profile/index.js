import { useState, useCallback, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from 'hooks/useAuth';
import Cropper from 'react-easy-crop';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import MenuButton from './MenuButton';
import ChangePassword from './ChangePassword';

const Profile = ({ loading, handleSubmit }) => {
  // const [selectedMenu, setSelectedMenu] = useState('profile');
  const {
    firstname, lastname, email, mobile,
  } = useAuth();
  const profilePicture = useRef(null);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [disableEdit, setDisableEdit] = useState(true);
  const [firstName, setFirstName] = useState(firstname);
  const [lastName, setLastName] = useState(lastname);
  const [emailAddress, setEmailAddress] = useState(email);
  const [phone, setPhone] = useState(mobile);
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState('');
  const [nin, setNin] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [crop, setCrop] = useState({ x: 0, y: 0 });

  const handleUpdateProfile = () => {
    const formData = new FormData();
    if (gender) {
      formData.append('gender', gender);
    }
    if (birthday) {
      formData.append('dob', birthday);
    }
    formData.append('firstname', firstName ?? firstname);
    formData.append('lastname', lastName ?? lastname);
    formData.append('mobile', phone ?? mobile);
    formData.append('picture', profileImage);
    handleSubmit(formData);
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPx) => {
    console.log(croppedArea, croppedAreaPx);
  }, []);

  return (
    <div className="container pt-5">
      <p>
        <span>My Account / </span>
        <span>My Profile / </span>
        <span>My Offer / </span>
        <span>My Store </span>
      </p>

      <div className="row pt-4">
        <div className="col-sm-2"><MenuButton selected text="My Profile" /></div>
        <div className="col-sm-2"><MenuButton text="My Offer" /></div>
        <div className="col-sm-2"><MenuButton text="My Store" /></div>
        <div className="col-sm-2"><MenuButton text="Saved Items" /></div>
      </div>

      <div className="row pt-5">
        <div className={`${styles.accountdetailsarea} col-sm-2`}>
          <p className={styles.accountdetails}>Account Details</p>
          <p className={styles.accountdetailsinfo}>
            Change your registration such as name and email address
          </p>
          {disableEdit ? (
            <Button variant="primary" onClick={() => setDisableEdit(false)}>
              Edit Details
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => handleUpdateProfile()}
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </Button>
          )}
        </div>

        {/* Edit profile section */}
        <div className="col-sm-7">
          {/* {profileImage && (
          <div className="row w-100 h-100">
            <div className={styles.cropcontainer}>
              <Cropper
                // image="https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000"
                image={URL.createObjectURL(profileImage)}
                crop={crop}
                zoom={zoom}
                aspect={4 / 3}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
            </div>
          </div>
          )} */}
          <div className="row">
            <div className="col-sm-2">
              <img alt="landing" src={profileImage ? URL.createObjectURL(profileImage) : '/assets/images/profile-avatar.png'} className="img-fluid" />
              {/* {profileImage && (
              <img
                src={URL.createObjectURL(profileImage)}
                alt="front-view"
                className="img-fluid"
              />
              )} */}

              <input type="file" onChange={(e) => setProfileImage(e.target.files[0])} ref={profilePicture} className={styles.hidefileinput} />
            </div>
            <span
              className={styles.profileimgtext}
              onClick={() => profilePicture.current.click()}
            >
              Add Profile image
            </span>
          </div>

          <div className="row pt-5">
            <div className="col-sm-6">
              <Form.Group controlId="firstName">
                <Form.Label className={styles.label}>First Name</Form.Label>
                <Form.Control
                  disabled={disableEdit}
                  value={firstName ?? firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
            </div>

            <div className="col-sm-6">
              <Form.Group controlId="lastName">
                <Form.Label className={styles.label}>Last Name</Form.Label>
                <Form.Control
                  disabled={disableEdit}
                  value={lastName ?? lastname}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
            </div>
          </div>

          <div className="row pt-2">
            <div className="col-sm-6">
              <Form.Group controlId="Email">
                <Form.Label className={styles.label}>Email</Form.Label>
                <Form.Control
                  disabled
                  value={emailAddress ?? email}
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
              </Form.Group>
            </div>

            <div className="col-sm-6">
              <Form.Group controlId="phoneNumber">
                <Form.Label className={styles.label}>Phone Number</Form.Label>
                <Form.Control
                  disabled={disableEdit}
                  value={phone ?? mobile}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
            </div>
          </div>

          <div className="row pt-2">
            <div className="col-sm-4">
              <Form.Group controlId="Email">
                <Form.Label className={styles.label}>Gender</Form.Label>
                <Form.Control
                  disabled={disableEdit}
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </Form.Group>
            </div>

            <div className="col-sm-4">
              <Form.Group controlId="phoneNumber">
                <Form.Label className={styles.label}>Birthday</Form.Label>
                <Form.Control
                  placeholder="YYYY/MM/DD"
                  disabled={disableEdit}
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                />
              </Form.Group>
            </div>

            <div className="col-sm-4">
              <Form.Group controlId="phoneNumber">
                <Form.Label className={styles.label}>NIN</Form.Label>
                <Form.Control
                  disabled={disableEdit}
                  value={nin}
                  onChange={(e) => setNin(e.target.value)}
                />
              </Form.Group>
            </div>
          </div>

          {/* Change password section */}
          <div className="py-5">
            {!showChangePassword && (
            <div className="row">
              <div className="col-sm-6">
                <Button
                  variant="primary"
                  className={styles.optionbutton}
                  onClick={() => setShowChangePassword(true)}
                >
                  Change your password
                </Button>
              </div>
            </div>
            )}

            {showChangePassword && (
              <ChangePassword />
            )}
          </div>
        </div>
        {/* End of Change password section */}
      </div>

    </div>
  );
};

Profile.propTypes = {
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Profile;
