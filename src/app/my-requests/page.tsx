import InformationCard from "../components/InformationCard";
import PageNameAndDescription from "../components/PageNameAndDescription";

export default function MyRequestsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <PageNameAndDescription
        PageName="My Requests"
        Description="Manage the grocery lists you’ve posted."
      />

      <InformationCard
        Info="No more requests"
        NiceMessage="You're all caught up"
      />
    </div>
  );
}
