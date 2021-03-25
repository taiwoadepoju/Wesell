import WithHomeHeader from '../components/layout/WithHomeHeader';
import Home from '../views/Home';

export default function LandingPage() {
  return (
    <WithHomeHeader>
      <Home />
    </WithHomeHeader>
  );
}
