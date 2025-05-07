import React from 'react';
import { useParams } from 'react-router-dom';
import BentoLayout from '../../components/BentoLayout';
import BentoProfileCard from '../../components/BentoProfileCard';
import { getUserData } from '../../utils/dataUtils';
import MBGApp from './mbg_src/App.jsx';

const Profile = () => {
  const { username } = useParams();
  const userData = getUserData(username);

  if (!userData) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">User Not Found</h1>
            <p className="text-gray-600 mb-6">The user you're looking for doesn't exist or has been removed.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <BentoLayout
      leftColumn={<BentoProfileCard username={username} />}
      rightColumn={<MBGApp />}
    />
  );
};

export default Profile; 