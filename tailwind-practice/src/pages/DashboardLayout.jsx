
import Sidebar from "../layouts/Sidebar";
import Topbar from "../layouts/Topbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">

      
      <Sidebar />

   
      <div className="flex-1 flex flex-col  ">

     
        <Topbar />

       
        <main className="p-6 bg-gray-50 flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
