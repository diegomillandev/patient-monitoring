import { usePatientStore } from '../store/store';
import { PatientDetails } from './PatientDetails';

export const PatientList = () => {
    const patients = usePatientStore((state) => state.patients);
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mx-5">
            {patients.length ? (
                <>
                    <h2 className="font-black text-3xl text-center ">
                        List of Patients
                    </h2>
                    <p className="text-lg mt-5 text-center mb-10">
                        Manage your patients here
                    </p>

                    {patients.map((patient) => (
                        <PatientDetails key={patient.id} patient={patient} />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center ">
                        There are no patients
                    </h2>
                    <p className="text-lg mt-5 text-center mb-10">
                        Start adding patients {''}
                        <span className="text-indigo-600 font-bold">
                            and will appear in this place
                        </span>
                    </p>
                </>
            )}
        </div>
    );
};
