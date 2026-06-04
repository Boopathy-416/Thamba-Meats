import { useState } from "react";
import { X } from "lucide-react";

export default function LoginModal({ isOpen, onClose, onSwitchToSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Login attempt:", { email });
    setIsLoading(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 momo flex items-center justify-center bg-transparent backdrop-blur-2xl  ">
      <div className="bg-card    rounded-lg mask-type-luminance fill-gray-700/70 
       w-full max-w-md mx-4 p-8 shadow-xl/20 shadow-cyan-400">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl text-cyan-400 ">Login</h2>
          <button onClick={onClose} className=" hover:scale-124 transition-all duration-350 transform-all  ring-2 ring-black/10 p-1 rounded-full ">
            <X size={24} />
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block text-md tracking-wider text-white  mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full px-4 py-2 border-l-4  border-black/60  rounded-lg   focus:outline-2 focus:bg-white/20 transition-colors"
            />
          </div>

          <div>
            <label className="block text-md tracking-wider text-white  mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 border-l-4  border-black/60  rounded-lg   focus:outline-2 focus:bg-white/20 transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-amber-50 hover:bg-amber-100  py-2 rounded-lg hover:opacity-90 transition-all duration-300 cursor-pointer"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground">OR</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Switch to Signup */}
        <p className="text-center text-muted-foreground">
          Don't have an account?{" "}
          <button onClick={onSwitchToSignup} className="text-blue-500 hover:underline ">
            Create Account
          </button>
        </p>
      </div>
    </div>
  );
}
