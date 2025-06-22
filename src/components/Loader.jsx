export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        {/* Custom logo with glow animation */}
        <img
          src="/logo.png" // Change to your actual logo path
          alt="Logo"
          className="w-20 h-20 animate-spin-glow mb-6"
        />

        {/* Techy pulsing text */}
        <p className="text-white text-xl font-semibold animate-pulse tracking-widest uppercase">
          Loading...
        </p>
      </div>
    </div>
  );
}
