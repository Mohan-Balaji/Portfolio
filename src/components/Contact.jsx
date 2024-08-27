import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function Contact() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    
    const onSubmit = async (data) => {
        setIsLoading(true);

        data.access_key = "yours_api";

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(data)
        }).then((res) => res.json());

        setIsLoading(false);

        if (res.success) {
            setIsSuccess(true);
            setShowAlert(true);
            reset();
            setTimeout(() => setShowAlert(false), 3000);
        } else {
            setErrorMessage("Something went wrong. Please try again later.");
            setShowAlert(true); 
            setTimeout(() => setShowAlert(false), 3000); 
        }
    };

    return (
    <section className="flex-auto px-2">
        <div className="py-12 max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-center text-5xl font-bold mb-4">CONTACT US </h1>
            {showAlert && (
                <Alert icon={<CheckIcon fontSize="inherit" />} severity={isSuccess ? "success" : "error"}>
                    {isSuccess ? "Your message has been sent successfully!" : errorMessage}
                </Alert>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                <div className="mb-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        {...register("name", { required: true })}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        {...register("email", { required: true })}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
                <div className="mb-4">
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        {...register("message", { required: true })}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    ></textarea>
                    {errors.message && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
                <div>
                    <button 
                        type="submit" 
                        disabled={isLoading} 
                        className={`w-full py-2 px-4 text-white rounded-md ${isLoading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                    >
                        {isLoading ? "Sending..." : "Submit Form"}
                    </button>
                </div>
            </form>
        </div>
 </section>
    );
}
