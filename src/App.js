import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Forgetpassword from './components/forgetpassword/forgetpassword';
import Navandsidebar from './pages/dashboard/navandsidebar/navandsidebar'
import Maindashbaord from './pages/dashboard/maindashboard/maindashbaord';
// import Invoice from './pages/dashboard/invoice/invoice';
import Products from './pages/dashboard/products/products';
import Quote from './pages/dashboard/quote/quote';
import Client from './pages/dashboard/clients/clients';
import Productform from './components/products/productform/productform';
import Clientform from './components/clients/clientform/clientform'
import Quoteform1 from './components/quote/quoteform1';
import Createinvoice from './pages/dashboard/Invoice/createinvoice';
import Invoicelist from './pages/dashboard/Invoice/invoicelist'
import Invoicedetails from './components/invoices/invoicedetails/invoicedetails';
import Profile from './pages/dashboard/profile/profile';
import Settings from './components/profile/settings/settings';
import Suppliers from "./pages/dashboard/suppliers/suppliers"
import SupplierForm from "./components/suppliers/supplierform/supplierform"
import Reports from "./pages/dashboard/reports/reports"
import Orders from "./pages/dashboard/orders/orders"
// import Addorder from './components/orders/addorder';
import OrderForm from './components/orders/orderform/orderform'
import Vendor from "./pages/dashboard/vendors/vendors"
import VendorForm from "./components/vendors/vendorform/vendorform"
import CompanyData from './components/companydata/companydata'



function App() {
  return (
    <div className="App">
      <Navandsidebar/>
      
  <Routes>
        <Route path='/' element= {<Login/>} />
        <Route path='/signup' element= {<Signup/>}/>
        <Route path='/forgetpassword' element= {<Forgetpassword/>}/>
      <Route path='/dashbaord' element={<Maindashbaord/>}/>

      <Route path='/products' element={<Products/>}/>
      <Route path='/productform' element={<Productform/>}/>

      <Route path='/quotes' element={<Quote/>}/>
      <Route path='/quoteform' element={<Quoteform1/>}/>

      <Route path='/clients' element={<Client/>}/>
      <Route path='/clientform' element={<Clientform/>}/>

      <Route path='/createinvoice' element={<Createinvoice/>}/>
      <Route path='/invoicelist' element={<Invoicelist/>}/>
      <Route path='/invoicedetails' element={<Invoicedetails/>}/>

      <Route path='/profile' element={<Profile/>}/>
      <Route path='/settings' element={<Settings/>}/>


      <Route path='/suppliers' element={<Suppliers/>}/>
      <Route path='/supplierform' element={<SupplierForm/>}/>

      
      <Route path='/reports' element={<Reports/>}/>


      <Route path='/orders' element={<Orders/>}/>
      <Route path='/orderform' element={<OrderForm/>}/>

      <Route path='/vendor' element={<Vendor/>}/>
      <Route path='/vendorform' element={<VendorForm/>}/>

      <Route path='/companydata' element={<CompanyData/>}/>

      











      




      
  </Routes>
  
    </div>
  );
}

export default App;
