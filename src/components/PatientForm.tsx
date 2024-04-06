import { useForm } from 'react-hook-form';
import { MessageError } from '.';

export const PatientForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const registerPatient = () => {
        console.log('Registering Patient');
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
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                noValidate
                onSubmit={handleSubmit(registerPatient)}
            >
                <div className="mb-5 relative">
                    <label
                        htmlFor="name"
                        className="text-sm uppercase font-bold"
                    >
                        Patient
                    </label>
                    <input
                        id="name"
                        className={`w-full p-3  border ${
                            errors.name ? 'border-red-500' : 'border-gray-100'
                        }`}
                        type="text"
                        placeholder="Patient Name"
                        {...register('name', {
                            required: 'Patient Name is required',
                        })}
                    />
                    {errors.name && (
                        <MessageError>
                            {errors.name?.message?.toString()}
                        </MessageError>
                    )}
                </div>

                <div className="mb-5 relative">
                    <label
                        htmlFor="caretaker"
                        className="text-sm uppercase font-bold"
                    >
                        Owner
                    </label>
                    <input
                        id="caretaker"
                        className={`w-full p-3  border ${
                            errors.name ? 'border-red-500' : 'border-gray-100'
                        }`}
                        type="text"
                        placeholder="Owner's Name"
                        {...register('caretaker', {
                            required: 'Owner Name is required',
                        })}
                    />
                    {errors.caretaker && (
                        <MessageError>
                            {errors.caretaker?.message?.toString()}
                        </MessageError>
                    )}
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="text-sm uppercase font-bold"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        className="w-full p-3  border border-gray-100"
                        type="email"
                        placeholder="Registration Email"
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="date"
                        className="text-sm uppercase font-bold"
                    >
                        Admission Date
                    </label>
                    <input
                        id="date"
                        className="w-full p-3  border border-gray-100"
                        type="date"
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="symptoms"
                        className="text-sm uppercase font-bold"
                    >
                        Symptoms
                    </label>
                    <textarea
                        id="symptoms"
                        className="w-full p-3  border border-gray-100"
                        placeholder="Patient's Symptoms"
                    ></textarea>
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value="Save Patient"
                />
            </form>
        </div>
    );
};
