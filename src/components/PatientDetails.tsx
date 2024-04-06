import { usePatientStore } from '../store/store';
import { Patient } from '../types';
import { toast } from 'react-toastify';

export const PatientDetails = ({ patient }: { patient: Patient }) => {
    const { deletePatient, getPatientById } = usePatientStore();
    const handleClic = () => {
        deletePatient(patient.id);
        toast.error('Patient Deleted Successfully');
    };
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6 relative">
            <h2 className="text-2xl font-bold text-gray-800">{patient.name}</h2>
            <div className="space-y-1">
                <p className="text-sm font-bold capitalize text-gray-800">
                    Owner:{' '}
                    <span className="font-normal capitalize">
                        {patient.caretaker}
                    </span>
                </p>
                <p className="text-sm font-bold capitalize text-gray-800">
                    Date:{' '}
                    <span className="font-normal">
                        {patient.date.toString()}
                    </span>
                </p>
                <p className="text-sm font-bold capitalize text-gray-800">
                    Email:{' '}
                    <span className="font-normal lowercase">
                        {patient.email}
                    </span>
                </p>
                <p className="text-sm font-bold capitalize text-gray-800">
                    Symptoms:{' '}
                    <span className="font-normal">{patient.symptoms}</span>
                </p>
            </div>
            <div className="absolute bottom-5 right-5 flex gap-2">
                <button
                    className="bg-indigo-500 hover:bg-indigo-700 text-white py-1 px-2 rounded font-medium text-sm"
                    onClick={() => getPatientById(patient.id)}
                >
                    Edit
                </button>
                <button
                    onClick={handleClic}
                    className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded font-medium text-sm "
                >
                    Delete
                </button>
            </div>
        </div>
    );
};
