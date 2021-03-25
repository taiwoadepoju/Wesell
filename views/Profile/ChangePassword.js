import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from './styles.module.css';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  return (
    <div>
      <div className="row pt-2">
        <div className="col-sm-6">
          <Form.Group controlId="Email">
            <Form.Label className={styles.label}>Old Password</Form.Label>
            <Form.Control value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
          </Form.Group>
        </div>
      </div>

      <div className="row pt-2">
        <div className="col-sm-6">
          <Form.Group controlId="Email">
            <Form.Label className={styles.label}>New Password</Form.Label>
            <Form.Control value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          </Form.Group>
        </div>

        <div className="col-sm-6">
          <Form.Group controlId="phoneNumber">
            <Form.Label className={styles.label}>Confirm New Password</Form.Label>
            <Form.Control
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
          </Form.Group>
        </div>
      </div>

      <div className="row pt-4">
        <div className="col-sm-6">
          <Button
            variant="primary"
            className={styles.optionbutton}
            onClick={() => setConfirmNewPassword(true)}
          >
            Confirm Password Change
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
