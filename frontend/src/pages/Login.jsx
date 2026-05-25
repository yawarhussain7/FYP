import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function Login({set_userRole}) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('alex@example.com');
  const [password, setPassword] = useState('password123');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    if(email == 'admin@123gmail.com' && password == 'admin123')
    {
      set_userRole('admin')
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B132B] px-4 py-12 selection:bg-blue-500 selection:text-white">
      {/* Login Card */}
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-[#111C35]/60 p-8 backdrop-blur-md shadow-2xl shadow-black/40">
        
        {/* Logo / Initial */}
        <div className="flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#3B82F6] text-xl font-bold text-white shadow-lg shadow-blue-500/30">
            E
          </div>
        </div>

        {/* Header Heading */}
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Welcome to E-Academy
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Sign in to access premium resources and AI assessments.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300">
              Email Address
            </label>
            <div className="relative mt-2">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Mail className="h-5 w-5 text-slate-500" />
              </div>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-xl border border-slate-800 bg-[#0F172A] py-3 pl-10 pr-4 text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="name@example.com"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-slate-300">
                Password
              </label>
              <a href="#" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
                Forgot password?
              </a>
            </div>
            <div className="relative mt-2">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Lock className="h-5 w-5 text-slate-500" />
              </div>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-xl border border-slate-800 bg-[#0F172A] py-3 pl-10 pr-10 text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500 hover:text-slate-400 focus:outline-none"
              >
                {showPassword ? (
                  <Eye className="h-5 w-5" />
                ) : (
                  <EyeOff className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="cursor-pointer flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:from-blue-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 active:scale-[0.98] transition-all"
          >
            Sign In
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        {/* Footer Divider & Link */}
        <div className="mt-8">
          <div className="relative flex justify-center text-xs">
            <span className="bg-transparent px-2 text-slate-500 border-t border-slate-800/60 w-full pt-6 text-center">
              Don't have an account?{' '}
              <Link to="auth/SignUp" className="font-medium text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
                Register as Student
              </Link>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}