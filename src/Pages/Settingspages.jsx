import { Link } from 'react-router-dom'


const Settingspages = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-6 py-12">
  <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-8">
    <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
      Account Settings
    </h1>

    <form className="space-y-6">
      
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Personal Information
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Security
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Current Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              New Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

  
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Notifications
        </h2>
        <div className="space-y-3 text-gray-700">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="h-4 w-4 text-gray-600" />
            <span>Email Notifications</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="h-4 w-4 text-gray-600" />
            <span>SMS Alerts</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="h-4 w-4 text-gray-600" />
            <span>Order Updates</span>
          </label>
        </div>
      </div>

     
      <div className="text-center pt-4">
        <button
          type="submit"
          className="bg-gray-800 text-white px-8 py-2 rounded-lg hover:bg-gray-700 transition duration-300 font-semibold"
        >
          Save Changes
        </button>
      </div>
      <div>
        <Link to="/admin">Go to Admin Page</Link>
      </div>
    </form>
  </div>
</div>

  )
}

export default Settingspages