import { use } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider/AuthContext';

const MyProfile = () => {
  const { user, updateUserProfile } = use(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    updateUserProfile(name, photo)
      .then(() => toast.success('Profile updated!'))
      .catch(() => toast.error('Failed to update profile.'));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg w-96 text-center">
        <img
          src={user?.photoURL}
          alt="profile"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-green-600"
        />
        <h2 className="text-xl font-semibold text-green-700">
          {user?.displayName || 'No Name'}
        </h2>
        <p className="text-gray-600">{user?.email}</p>

        <form onSubmit={handleUpdate} className="mt-4 space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Update Name"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="photo"
            placeholder="Update Photo URL"
            className="input input-bordered w-full"
          />
          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
