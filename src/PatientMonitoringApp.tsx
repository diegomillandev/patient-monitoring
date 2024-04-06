import { PatientForm, PatientList } from './components';

export const PatientMonitoringApp = () => {
    return (
        <>
            <div className="container mx-auto pt-20">
                <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
                    Patient Monitoring{' '}
                    <span className="text-indigo-700">Veterinary</span>
                </h1>

                <div className="mt-12 md:flex">
                    <PatientForm />
                    <PatientList />
                </div>
            </div>
        </>
    );
};
