import YellowCheckMark from '@/icons/YellowCheckMark';
import { useRouter } from 'next/router';
import styles from './styles.module.css';

const ResetSuccess = () => {
  const router = useRouter();
  return (
    <div className={`${styles.container} container`}>
      <div className="row justify-content-center">
        <div className={`${styles.mainsection} col-md-6 align-self-center pt-5`}>
          <h5 className={`${styles.Weselltext} text-center`}><a href="/">Wesell</a></h5>
          <div className="text-center text-warning">
            <YellowCheckMark className="text-warning" />
          </div>
          <h4 className="text-muted text-center pt-2">Password reset successful</h4>
          <p className="text-muted text-center">You can now login to your account</p>
          <button
            onClick={() => router.push('/')}
            type="button"
            className={`${styles.submitbutton} btn btn-primary btn-block w-50 mt-4 mx-auto`}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetSuccess;
