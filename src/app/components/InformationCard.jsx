export default async function InformationCard({ Info, NiceMessage }) {
  return (
    <div className="bg-white p-10 rounded-2xl shadow text-center">
      <p className="text-lg font-semibold">{Info}</p>
      <p className="text-gray-500 mt-2">{NiceMessage}</p>
    </div>
  );
}
