const RateLimitedUI = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-white flex flex-col items-center px-4">
        <div className="w-full max-w-xl bg-white/80 rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-6 border border-gray-200 backdrop-blur-md mt-12">
            <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-2">Rate Limit Exceeded</h1>
            <p className="text-lg text-gray-500 mb-6 text-center">You have exceeded the maximum number of requests allowed. Please try again later.</p>
            <div className="flex space-x-4">
            <a href="/" className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition-colors duration-200">Go to Home</a>
            <a href="/contact" className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl shadow hover:bg-gray-300 transition-colors duration-200">Contact Support</a>
            </div>
        </div>
        </div>
    )
    };
    export default RateLimitedUI;
