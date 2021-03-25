import MyOffers from 'views/MyOffers';
import WithHomeHeader from '../components/layout/WithHomeHeader';

export default function LandingPage() {
  return (
    <WithHomeHeader>
      <MyOffers />
    </WithHomeHeader>
  );
}
