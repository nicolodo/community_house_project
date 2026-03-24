export default function MyRequestsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">My Requests</h1>
        <p className="text-gray-500">Manage the grocery lists you’ve posted.</p>
      </div>

      {/* SAMPLE REQUEST CARD */}
      <div className="bg-white p-6 rounded-2xl shadow mb-6">
        <p className="text-sm text-gray-500">Whole Foods • 12 items</p>

        <h2 className="text-xl font-bold mt-2">Weekly Organic Essentials</h2>

        <ul className="mt-3 text-gray-600 space-y-1">
          <li>• Organic tomatoes</li>
          <li>• Oat milk</li>
          <li>• Sourdough bread</li>
        </ul>

        <div className="mt-4 flex gap-3">
          <button className="px-4 py-2 bg-gray-100 rounded-full">Edit</button>

          <button className="px-4 py-2 bg-red-100 text-red-600 rounded-full">
            Delete
          </button>
        </div>
      </div>

      <div className="bg-white p-10 rounded-2xl shadow text-center">
        <p className="text-lg font-semibold">No more requests</p>
        <p className="text-gray-500 mt-2">You’re all caught up 🌱</p>
      </div>
    </div>
  );
}
