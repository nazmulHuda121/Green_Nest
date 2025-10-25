import { use } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider/AuthContext';
import { motion } from 'framer-motion';

const MyProfile = () => {
  const { user, updateUserProfile } = use(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    updateUserProfile(name, photo)
      .then(() => toast.success('Profile updated successfully!'))
      .catch(() => toast.error(' Failed to update profile.'));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-bl from-blue-800 via-black to-purple-800 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-pink-40/40 backdrop-blur-md text-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center border border-green-800/50"
      >
        {/* Profile Picture */}
        <img
          src={user?.photoURL || '/default-avatar.png'}
          alt="profile"
          className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-green-500 shadow-md object-cover"
        />

        {/* Name & Email */}
        <h2 className="text-2xl font-bold text-green-400">
          {user?.displayName || 'No Name'}
        </h2>
        <p className="text-gray-300 mb-6">{user?.email}</p>

        {/* Update Form */}
        <form onSubmit={handleUpdate} className="space-y-4 text-left">
          <div>
            <label className="block mb-1 text-sm text-gray-400">
              Update Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter new name"
              className="w-full px-4 py-2 rounded-lg bg-gray-900/60 border border-green-700 focus:outline-none focus:border-green-500 text-white placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-400">
              Update Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter new photo URL"
              className="w-full px-4 py-2 rounded-lg bg-gray-900/60 border border-green-700 focus:outline-none focus:border-green-500 text-white placeholder-gray-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition font-semibold py-2 rounded-lg shadow-md mt-3 cursor-pointer"
          >
            Update Profile
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default MyProfile;
