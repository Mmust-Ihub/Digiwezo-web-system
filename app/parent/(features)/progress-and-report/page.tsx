import ProfileCard from "@parent/(features)/progress-and-report/components/ProfileCard";
import ReportCard from "@parent/(features)/progress-and-report/components/Report";
import ReportDetails from "@parent/(features)/progress-and-report/components/ReportDetails";
import Filters from "@parent/(features)/progress-and-report/components/Filters";

export default function ProgressReportPage() {
  return (
    
        <div className="flex-1 p-6 space-y-6">
          <ProfileCard />

          <div className="bg-custom-white shadow rounded-xl p-6">
            <div className="mb-6">
              <Filters />
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left side */}
              <div className="flex-1">
                <ReportCard />
              </div>
              {/* Right side */}
              <div className="w-full lg:w-1/2">
                <ReportDetails />
              </div>
            </div>
          </div>
        </div>
  
    
  );
}