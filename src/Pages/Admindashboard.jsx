import { useContext } from 'react'
import { Globalstate } from '../App'

const Admindashboard = () => {
  const { admincart = [] } = useContext(Globalstate)

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-6">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-extrabold">Admin Dashboard</h1>
          </div>
        </header>

       
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">S.No</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Name</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Image</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Mobile</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">E-Mail</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Address</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {admincart.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-6 text-center text-sm text-gray-500">No records found</td>
                </tr>
              ) : (
                admincart.map((cur, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">{i + 1}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{cur.name || cur.title || '-'}</td>
                    <td className="px-4 py-3">
                      { (cur.img || cur.image) ? (
                        <img src={cur.img || cur.image} alt={cur.name || cur.title} className="w-12 h-12 object-cover rounded" />
                      ) : (
                        <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">N/A</div>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">{cur.mobile || '-'}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{cur.email || '-'}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{cur.address || '-'}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Admindashboard