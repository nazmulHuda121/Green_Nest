import { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider/AuthContext';
import { motion } from 'framer-motion';

const MyProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    try {
      await updateUserProfile(name, photo);
      toast.success('Profile updated successfully!');

      // Real-time UI Update
      user.displayName = name;
      user.photoURL = photo;

      e.target.reset();
    } catch (error) {
      toast.error('Failed to update profile.');
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D')",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-black/60 backdrop-blur-xl text-white p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20"
      >
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <img
            src={user?.photoURL || '/default-avatar.png'}
            alt="profile"
            className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-yellow-400 shadow-xl object-cover"
          />
          <h2 className="text-2xl font-bold text-yellow-300">
            {user?.displayName || 'User Name'}
          </h2>
          <p className="text-gray-200 mb-6">{user?.email}</p>
        </div>

        {/* Update Form */}
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-gray-300">
              Update Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter new name"
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-yellow-300 text-white placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">
              Update Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter new photo URL"
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-yellow-300 text-white placeholder-gray-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black transition font-semibold py-2 rounded-lg shadow-lg mt-3 cursor-pointer"
          >
            Update Profile
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default MyProfile;
