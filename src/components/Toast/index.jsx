import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomToast = () => {
  return <ToastContainer />
};

export default CustomToast;

//////////////////////////////////////////////////////////////////////////===============================================
//////////////////////////////////////////////////////////////////////////==============Tostify Example =================
//////////////////////////////////////////////////////////////////////////===============================================
{/* <Button onClick={() => showToast('success', "This is a success message!")}>Hellow</Button> */ }


// const fakePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Data loaded successfully');
//   }, 2000);
// });

// <div>
//   <h1>Custom Toast Example</h1>
//   <CustomToast type="success" message="This is a success message!" />
//   <CustomToast type="error" message="Something went wrong!" />
//   <CustomToast type="warning" message="This is a warning!" />
//   <CustomToast type="info" message="Here is some info." />
//   <CustomToast type="promise" message="Operation successful!" promise={fakePromise} />
// </div>


