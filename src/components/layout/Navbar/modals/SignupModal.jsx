import { useState } from "react";
import { X } from "lucide-react";

export default function SignupModal({ isOpen, onClose, onSwitchToLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("[Signup]", { name, email });
    setIsLoading(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex momo items-center justify-center bg-transparent backdrop-blur-3xl">
      <div className=" rounded-lg w-full max-w-md mx-4 p-6 shadow-lg/60 shadow-yellow-600 ">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl  text-yellow-600 ">Create Account</h2>
          <button onClick={onClose} className=" hover:scale-124 transition-all duration-350 transform-all ring-2 ring-black/10 p-1 rounded-full   ">
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-md  text-white/90 tracking-wider mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
              className="w-full px-4 py-2 border-l-4  border-black/60 rounded-lg   focus:outline-2 focus:bg-white/20 transition-colors"
            />
          </div>

          <div>
            <label className="block text-md  text-white/90 tracking-wider mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full px-4 py-2 border-l-4  border-black/60 rounded-lg   focus:outline-2 focus:bg-white/20 transition-colors"
            />
          </div>

          <div>
            <label className="block text-md  text-white/90 tracking-wider mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 border-l-4  border-black/60 rounded-lg   focus:outline-2 focus:bg-white/20 transition-colors"
            />
          </div>

          <div>
            <label className="block text-md  text-white/90 tracking-wider mb-2">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 border-l-4  border-black/60 rounded-lg   focus:outline-2 focus:bg-white/20 transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-amber-50 hover:bg-amber-100  py-2 rounded-lg hover:opacity-90 transition-all duration-300 cursor-pointer"
          >
            {isLoading ? "Creating..." : "Create Account"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-border"></div>
          <span className="text-xs text-muted-foreground">OR</span>
          <div className="flex-1 h-px bg-border"></div>
        </div>

        {/* Login Link */}
        <p className="text-center text-muted-foreground">
          Already have an account?{" "}
          <button onClick={onSwitchToLogin} className="text-white hover:underline ">
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
