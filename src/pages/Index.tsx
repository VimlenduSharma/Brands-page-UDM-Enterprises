import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to brands page
    navigate('/brands');
  }, [navigate]);

  return null;
};

export default Index;
