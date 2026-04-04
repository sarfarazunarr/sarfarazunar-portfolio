"use client";

export default function Loading() {
  return (
    <div className="w-full min-h-[50vh] flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-4">
        {/* Compact Spinner */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-t-2 border-cyber-cyan animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-b-2 border-matrix-green animate-[spin_1s_linear_reverse_infinite]"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1 h-1 bg-white rounded-full animate-ping"></div>
          </div>
        </div>
        <p className="text-cyber-cyan text-sm font-sans tracking-widest uppercase animate-pulse">
          Fetching Data...
        </p>
      </div>
    </div>
  );
}
