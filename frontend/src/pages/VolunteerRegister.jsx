
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import loginBg from '../assets/loginregister.jpg';

const skillOptions = [
    { value: 'Driving', label: 'Driving' },
    { value: 'Grocery', label: 'Grocery' },
    { value: 'Medicines', label: 'Medicines' },
    { value: 'Cooking', label: 'Cooking' },
    { value: 'Housekeeping', label: 'Housekeeping' },
    { value: 'Gardening', label: 'Gardening' },
    { value: 'Paperwork', label: 'Paperwork' },
    { value: 'Technology Support', label: 'Technology Support' },
    { value: 'Reading Assistance', label: 'Reading Assistance' },
    { value: 'Companionship', label: 'Companionship' },
    { value: 'Health Trainer', label: 'Health Trainer' },
];

function VolunteerRegister() {
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [mobileNumber, setMobileNumber] = useState('');

    const handleSkillChange = (options) => {
        setSelectedSkills(options);
    };

    const customStyles = {
        control: (provided) => ({
            ...provided,
            borderColor: 'gray',
            boxShadow: 'none',
            '&:hover': {
                borderColor: 'blue',
            },
        }),
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? 'white' : 'black',
            backgroundColor: state.isSelected ? 'blue' : 'white',
            '&:hover': {
                backgroundColor: 'lightblue',
                color: 'black',
            },
        }),
        multiValue: (provided) => ({
            ...provided,
            backgroundColor: 'blue',
            color: 'white',
        }),
        multiValueLabel: (provided) => ({
            ...provided,
            color: 'white',
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            color: 'white',
            '&:hover': {
                backgroundColor: 'red',
                color: 'white',
            },
        }),
    };

    return (
        <div
            className="min-h-screen bg-fixed bg-center bg-cover relative"
            style={{ backgroundImage: `url(${loginBg})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>

            <nav className="w-full bg-white fixed top-0 z-50 p-4 shadow-md flex justify-between items-center">
                <div className="font-bold text-2xl text-blue-600">
                    <Link to="/#">SCAN</Link>
                </div>
            </nav>

            <div className="relative z-10 flex flex-col items-center justify-start min-h-screen text-white pt-24">
                <h1 className="text-4xl font-bold mb-8">Volunteer Registration</h1>

                <form className="bg-white/60 p-8 rounded-lg shadow-md backdrop-blur-md w-full max-w-md">
                    <div className="mb-4">
                        <label className="block text-gray-800 font-bold mb-2" htmlFor="volunteer-name">
                            Volunteer Name
                        </label>
                        <input
                            type="text"
                            id="volunteer-name"
                            className="w-full p-2 border rounded-lg text-gray-900 placeholder-gray-500" // Changed text color
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-800 font-bold mb-2" htmlFor="age">
                            Age
                        </label>
                        <input
                            type="number"
                            id="age"
                            className="w-full p-2 border rounded-lg text-gray-900 placeholder-gray-500" // Changed text color
                            placeholder="Enter your age"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-800 font-bold mb-2" htmlFor="skills">
                            Skills
                        </label>
                        <Select
                            id="skills"
                            options={skillOptions}
                            isMulti
                            value={selectedSkills}
                            onChange={handleSkillChange}
                            styles={customStyles}
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-800 font-bold mb-2" htmlFor="mobile">
                            Mobile Number
                        </label>
                        <input
                            type="tel"
                            id="mobile"
                            value={mobileNumber} // Bind value to state
                            onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, ''); // Allow only digits
                                if (value.length <= 10) {
                                    setMobileNumber(value); // Update state
                                }
                            }}
                            className="w-full p-2 border rounded-lg text-gray-900 placeholder-gray-500"
                            placeholder="Enter your mobile number"
                            required
                            pattern="\d{10}" // Enforce 10 digits
                            maxLength={10}   // Restrict input length to 10
                            title="Please enter a valid 10-digit mobile number" // Tooltip for invalid input
                        />
                    </div>



                    <div className="mb-4">
                        <label className="block text-gray-800 font-bold mb-2" htmlFor="email">
                            Email ID
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 border rounded-lg text-gray-900 placeholder-gray-500" // Changed text color
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-800 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-2 border rounded-lg text-gray-900 placeholder-gray-500" // Changed text color
                            placeholder="Create a password"
                            required
                        />
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Register
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <p className="text-white">
                        Already have an account?{' '}
                        <Link to="/login/volunteer" className="text-blue-400 underline">
                            Back to Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default VolunteerRegister;
