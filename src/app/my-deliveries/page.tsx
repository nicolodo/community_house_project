import InformationCard from "@/app/components/InformationCard";
import PageNameAndDescription from "@/app/components/PageNameAndDescription";

export default function MyDeliveriesPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <PageNameAndDescription
        PageName={"My Deliveries"}
        Description={"Track the requests you've volunteered to deliver."}
      />
      <InformationCard
        Info="No more deliveries"
        NiceMessage="Volunteer for a request to get started"
      />
    </div>
  );
}
