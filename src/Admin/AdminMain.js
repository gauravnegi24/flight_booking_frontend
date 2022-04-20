import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AdminHome from '../AdminPages/AdminHome';
import Airport from '../AdminPages/Airport';
import Flight from '../AdminPages/Flight';
import ViewUsers from '../AdminPages/ViewUsers';
import AdminNavbar from "./AdminNavbar";

function AdminDashboard(){

    return (

        <>
    <BrowserRouter>
      
      <Routes>
          <AdminNavbar />
          <Route path="/adminHome" element={<AdminHome />} />
      <Route path="/user/readAllUsers" element={<ViewUsers />} />
        <Route path="/airport/allAirport" element={<Airport />}/>
        <Route path="/flight/allFlight" element={<Flight />}/>
        {/* <Route path="" element={}/> */}
      </Routes>
    </BrowserRouter>
    </>

    );
    
}

export default AdminDashboard;