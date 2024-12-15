import Announcements from "@/components/Announcement"
import Attendancechart from "@/components/Attendancechart"
import Countchart from "@/components/Countchart"
import Eventcalendar from "@/components/Eventcalendar"
import Financechart from "@/components/Financechart"
import Usercard from "@/components/Usercard"

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
    
      {/* left side */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
          {/* user cards */}
          <div className="flex gap-4 justify-between flex-wrap">
            <Usercard type="student" count={1232}/>
            <Usercard type="teacher" count={95}/>
            <Usercard type="parent" count={950}/>
            <Usercard type="staff" count={185}/>
          </div>
          {/* middle chart */}
          <div className="flex gap-4 flex-col lg:flex-row">
            {/* count chart */}
            <div className="w-full lg:w-1/3 h-[450px]">
              <Countchart/>
            </div>
            {/* attendance chart */}
            <div className="w-full lg:w-full h-[450px]">
              <Attendancechart/>
            </div>
          </div>
          {/* bottom chart */}
          <div className="w-full  h-[500px]">
            <Financechart/>

          </div>
      </div>
      {/* right side */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
          <div>
            <Eventcalendar/>
          </div>
          <div>
            <Announcements/>
          </div>
      </div>
  
    </div>
  )
}

export default AdminPage