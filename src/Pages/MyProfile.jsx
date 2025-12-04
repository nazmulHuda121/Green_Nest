import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider/AuthContext';
import { motion } from 'framer-motion';

const MyProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);

  // Local state for live update
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(displayName, photoURL); // Firebase update
      toast.success('Profile updated successfully!');
    } catch (err) {
      toast.error('Failed to update profile!');
      console.log(err);
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center px-4 relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503264116251-35a269479413?w=1600&auto=format&fit=crop&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-full max-w-md border border-white/30"
      >
        {/* Profile Picture */}
        <div className="flex flex-col items-center relative">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-400 shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src={user.photoURL}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="mt-4 text-2xl font-bold text-green-300">
            {user.displayName}
          </h2>
          <p className="text-gray-200 mt-1">{user?.email}</p>
        </div>

        {/* Update Form */}
        <form onSubmit={handleUpdate} className="mt-6 space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-200 font-medium mb-1">Name</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="px-4 py-2 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-400 bg-white/30 text-gray-900 placeholder-gray-400 transition"
              placeholder="Enter new name"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-200 font-medium mb-1">Photo URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="px-4 py-2 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-400 bg-white/30 text-gray-900 placeholder-gray-400 transition"
              placeholder="Enter new photo URL"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold shadow-lg transition-all"
          >
            Update Profile
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default MyProfile;
