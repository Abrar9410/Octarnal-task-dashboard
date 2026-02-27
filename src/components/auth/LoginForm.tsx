import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';


interface LoginInputs {
    email: string;
    password: string;
};


const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginInputs>();

    const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
        // Simulate API Call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log('Form Data:', data);
    };

    return (
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
                <p className="mt-2 text-sm text-gray-500">Please enter your details</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Email Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address',
                                },
                            })}
                            type="email"
                            placeholder="name@example.com"
                            className={`w-full pl-10 pr-4 py-2 border rounded-lg outline-none transition-all ${errors.email ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-500'
                                }`}
                        />
                    </div>
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                </div>

                {/* Password Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            {...register('password', {
                                required: 'Password is required',
                                // minLength: { value: 8, message: 'Must be at least 8 characters' },
                            })}
                            type={showPassword ? 'text' : 'password'}
                            placeholder="••••••••"
                            className={`w-full pl-10 pr-12 py-2 border rounded-lg outline-none transition-all ${errors.password ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-500'
                                }`}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer"
                        >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                    {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                    disabled={isSubmitting}
                    type="submit"
                    className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Signing in...' : 'Sign In'}
                </button>
            </form>
        </div>
    );
};

export default LoginForm;