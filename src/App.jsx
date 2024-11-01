import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import React from 'react';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import AddJobPage from './pages/AddJobPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';


const App = () => {
  // Add New Job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob),
    });
    return;
    
  };

  //Delete a Job

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
    });
    return;
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
    <Route index element= {<HomePage/>}/>
    <Route path='/jobs' element= {<JobsPage/>}/>
    <Route path='/add-job' element= {<AddJobPage addJobSubmit={addJob}/>}/>
    <Route path='*' element= {<NotFoundPage/>}/>
    <Route path='/jobs/:id' element= {<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
    </Route>
    
    )
  );
  return <RouterProvider router={router} />;
}

export default App
