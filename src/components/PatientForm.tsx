import { useForm } from 'react-hook-form';
import { MessageError } from '.';
import { DraftPatient } from '../types';
import { usePatientStore } from '../store/store';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export const PatientForm = () => {
    const addPatient = usePatientStore((state) => state.addPatient);
    const activeID = usePatientStore((state) => state.activeID);
    const patients = usePatientStore((state) => state.patients);
    const updatePatient = usePatientStore((state) => state.updatePatient);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        reset,
    } = useForm<DraftPatient>();

    useEffect(() => {
        if (activeID) {
            const patient = patients.filter((p) => p.id === activeID)[0];
            setValue('name', patient.name);
            setValue('caretaker', patient.caretaker);
            setValue('email', patient.email);
            setValue('date', patient.date);
            setValue('symptoms', patient.symptoms);
        }
    }, [activeID]);

    const registerPatient = (data: DraftPatient) => {
        if (activeID) {
            updatePatient({ ...data, id: activeID });
            toast.success('Patient Updated Successfully');
        } else {
            addPatient(data);
            toast.success('Patient Added Successfully');
        }
        reset();
    };

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">
                Patient Tracking
            </h2>

            <p className="text-lg mt-5 text-center mb-10">
                Add Patients and {''}
                <span className="text-indigo-600 font-bold">Manage Them</span>
            </p>

            <form
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-5"
                noValidate
                onSubmit={handleSubmit(registerPatient)}
            >
                <div className="mb-5 relative">
                    <label
                        htmlFor="name"
                        className={`text-sm uppercase font-bold text-slate-900`}
                    >
                        Patient
                    </label>
                    <input
                        id="name"
                        className={`w-full p-3  border focus:outline-none ${
                            errors.name
                                ? 'border-red-500 placeholder:text-red-300 focus:ring-1 focus:ring-red-400'
                                : 'border-gray-200 focus:ring-2 focus:ring-indigo-600 placeholder:text-slate-500'
                        }`}
                        type="text"
                        placeholder="Patient Name"
                        {...register('name', {
                            required: 'Patient Name is required',
                        })}
                    />
                    {errors.name && (
                        <MessageError>{errors.name?.message}</MessageError>
                    )}
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="caretaker"
                        className={`text-sm uppercase font-bold text-slate-900`}
                    >
                        Owner
                    </label>
                    <input
                        id="caretaker"
                        className={`w-full p-3  border focus:outline-none ${
                            errors.name
                                ? 'border-red-500 placeholder:text-red-300 focus:ring-1 focus:ring-red-500'
                                : 'border-gray-200 focus:ring-2 focus:ring-indigo-600 placeholder:text-slate-500'
                        }`}
                        type="text"
                        placeholder="Owner's Name"
                        {...register('caretaker', {
                            required: 'Owner Name is required',
                        })}
                    />
                    {errors.caretaker && (
                        <MessageError>{errors.caretaker?.message}</MessageError>
                    )}
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className={`text-sm uppercase font-bold text-slate-900`}
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        className={`w-full p-3  border focus:outline-none ${
                            errors.email
                                ? 'border-red-500 placeholder:text-red-300 focus:ring-1 focus:ring-red-500'
                                : 'border-gray-200 focus:ring-2 focus:ring-indigo-600 placeholder:text-slate-500'
                        }`}
                        type="email"
                        placeholder="Registration Email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                message: 'Invalid Email Format',
                            },
                        })}
                    />
                    {errors.email && (
                        <MessageError>{errors.email?.message}</MessageError>
                    )}
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="date"
                        className={`text-sm uppercase font-bold text-slate-900`}
                    >
                        Admission Date
                    </label>
                    <input
                        id="date"
                        className={`w-full p-3  border focus:outline-none ${
                            errors.date
                                ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                                : 'border-gray-200 focus:ring-2 focus:ring-indigo-600 '
                        }`}
                        type="date"
                        {...register('date', {
                            required: 'Admission Date is required',
                        })}
                    />
                    {errors.date && (
                        <MessageError>{errors.date?.message}</MessageError>
                    )}
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="symptoms"
                        className={`text-sm uppercase font-bold text-slate-900`}
                    >
                        Symptoms
                    </label>
                    <textarea
                        id="symptoms"
                        className={`w-full p-3  border focus:outline-none resize-none ${
                            errors.symptoms
                                ? 'border-red-500 placeholder:text-red-300 focus:ring-1 focus:ring-red-400'
                                : 'border-gray-200 focus:ring-2 focus:ring-indigo-600 placeholder:text-slate-500'
                        }`}
                        placeholder="Patient's Symptoms"
                        {...register('symptoms', {
                            required: 'Symptoms are required',
                            minLength: {
                                value: 5,
                                message:
                                    'Symptoms must be at least 5 characters',
                            },
                        })}
                    ></textarea>
                    {errors.symptoms && (
                        <MessageError mt="-mt-1.5">
                            {errors.symptoms?.message}
                        </MessageError>
                    )}
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={activeID ? 'Update Patient' : 'Add Patient'}
                />
            </form>
        </div>
    );
};
