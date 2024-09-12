import ResumeUploader from "@/components/dashboard/resume-uploader";

export default async function AdminDashboardPage() {
  return (
    <div className="dashboard-page p-4">
      <ResumeUploader />
    </div>
  );
}
