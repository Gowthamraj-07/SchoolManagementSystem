import Announcements from "@/components/Announcement";
import BigCalendar from "@/components/Bigcalendar";
import Eventcalendar from "@/components/Eventcalendar";

const ParentPage = () => {
  return(
    <div className="p-4 flex gap-4 flex-1 flex-col xl:flex-row">
    {/* LEFT */}
    <div className="w-full xl:w-2/3">
    <div className="h-full bg-white p-4 rounded-md">
    <h1 className="text-xl font-semibold">Schedule child1</h1>
    <BigCalendar/>
    </div>
    <div className="h-full bg-white p-4 rounded-md">
    <h1 className="text-xl font-semibold mt-6">Schedule child2</h1>
    <BigCalendar/>
    </div>
   
    </div>
    {/* RIGHT */}
    <div className="w-full xl:w-1/3 flex flex-col gap-8">
   
    <Announcements />
    </div>
    </div>
    )
  };
  export default ParentPage;