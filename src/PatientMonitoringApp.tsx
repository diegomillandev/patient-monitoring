import { PatientForm, PatientList } from './components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const PatientMonitoringApp = () => {
    return (
        <>
            <div className="container mx-auto pt-10">
                <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
                    Patient Monitoring{' '}
                    <span className="text-indigo-700">Veterinary</span>
                </h1>

                <div className="mt-10 md:flex">
                    <PatientForm />
                    <PatientList />
                </div>
            </div>
            <ToastContainer />
        </>
    );
};
