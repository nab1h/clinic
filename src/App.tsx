import { Outlet } from "react-router-dom";
import "./App.css";
import Layout from "./components/pages/Layout";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
     <Toaster position="top-right" reverseOrder={false} />
      <Layout>
        <Outlet /> 
      </Layout>
    </>
  );
}
export default App;
