import React, { useState } from 'react';
import {
    User,
    Mail,
    Lock,
    School,
    IdCard,
    GraduationCap,
    Eye,
    EyeOff,
    ArrowRight
} from 'lucide-react'; // Substituted icons for clarity, install via 'npm i lucide-react'
import {Link} from 'react-router-dom'
export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        role: 'student', // default role
        schoolName: '',
        schoolCardImage: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
      console.log({
  ...formData,
  schoolCardImage: formData.schoolCardImage?.name,
});
    };

    return (
        <div className="min-h-screen bg-[#0a1128] text-slate-200 flex items-center justify-center p-4 antialiased">
            <div className="w-full max-w-xl bg-[#0d1933]/80 border border-slate-800/60 rounded-3xl p-8 md:p-10 shadow-2xl backdrop-blur-md">

                {/* Logo / Badge */}
                <div className="flex justify-center mb-6">
                    <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-blue-600/30">
                        E
                    </div>
                </div>

                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                        Join E-Academy
                    </h1>
                    <p className="text-sm text-slate-400 mt-2">
                        Create your account to start learning and accessing AI assessments.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Full Name Field */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1.5 ml-1">
                            Full Name
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                                <User size={18} />
                            </span>
                            <input
                                type="text"
                                name="fullName"
                                required
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Alex Morgan"
                                className="w-full bg-[#0b1329] border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1.5 ml-1">
                            Email Address
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                                <Mail size={18} />
                            </span>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="alex@example.com"
                                className="w-full bg-[#0b1329] border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                            />
                        </div>
                    </div>

                    {/* Grid Layout for Role and School Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        {/* User Role Selector */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1.5 ml-1">
                                I am a...
                            </label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500 pointer-events-none">
                                    <GraduationCap size={18} />
                                </span>
                                <select
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    className="w-full bg-[#0b1329] border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm appearance-none cursor-pointer"
                                >
                                    <option value="student">Student</option>
                                    <option value="teacher">Teacher</option>
                                    <option value="admin">Administrator</option>
                                </select>
                                {/* Custom arrow for select */}
                                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500 pointer-events-none">
                                    ▼
                                </span>
                            </div>
                        </div>

                        {/* School Name Field */}
                        <div className={formData.role && formData.role.toLowerCase() === 'admin' ? 'hidden' : 'block'}>
                            <label className="block text-sm font-medium text-slate-300 mb-1.5 ml-1">
                                School Name
                            </label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                                    <School size={18} />
                                </span>
                                <input
                                    type="text"
                                    name="schoolName"
                                    required
                                    value={formData.schoolName}
                                    onChange={handleChange}
                                    placeholder="Global High School"
                                    className="w-full bg-[#0b1329] border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* School Card / ID Number Field */}
                    <div className={formData.role === 'admin' || formData.role==='teacher' ? 'hidden' : 'block'}>
                        <label className="block text-sm font-medium text-slate-300 mb-1.5 ml-1">
                            School Card
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                                <IdCard size={18} />
                            </span>
                            <input
                                type="file"
                                name="schoolCardImage"
                                required
                                onChange={handleChange}
                                className="w-full bg-[#0b1329] border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-white file:bg-blue-600 file:border-0 file:text-white file:px-3 file:py-1 file:rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1.5 ml-1">
                            Password
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                                <Lock size={18} />
                            </span>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••••••"
                                className="w-full bg-[#0b1329] border border-slate-800 rounded-xl py-3 pl-11 pr-11 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-500 hover:text-slate-300 transition-colors"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full mt-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl py-3.5 px-4 flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-blue-600/20 active:scale-[0.99]"
                    >
                        Sign Up
                        <ArrowRight size={16} />
                    </button>
                </form>

                {/* Footer Link */}
                <div className="mt-8 text-center text-xs text-slate-500">
                    Already have an account?{' '}
                    <Link to="/auth/SignIn" className="text-blue-500 hover:underline font-medium">
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
}