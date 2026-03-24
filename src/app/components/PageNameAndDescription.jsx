export default function PageNameAndDescription({ PageName, Description }) {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold">{PageName}</h1>
      <p className="text-gray-500">{Description}</p>
    </div>
  );
}
