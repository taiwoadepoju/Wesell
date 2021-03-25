import useAuth from 'hooks/useAuth';
import Header from '../Header';
import AuthHeader from '../AuthHeader';

const MainHeader = () => {
  const { userId } = useAuth();
  return (
    <>
      {userId ? <AuthHeader /> : <Header />}
    </>
  );
};

export default MainHeader;
