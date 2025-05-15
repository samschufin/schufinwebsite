'use client';

export default function TrendLineAnimation() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 w-full h-full bg-gradient-radial from-black to-black">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 w-full h-full opacity-70">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#29ABE2]/20 to-transparent animate-gradient-shift"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#29ABE2]/10 to-transparent animate-gradient-shift-reverse"></div>
          
          {/* Subtle blue glow spots */}
          <div className="absolute w-[40%] h-[40%] top-[20%] left-[30%] rounded-full bg-[#29ABE2]/5 blur-3xl animate-pulse-slow"></div>
          <div className="absolute w-[30%] h-[30%] bottom-[10%] right-[20%] rounded-full bg-[#29ABE2]/5 blur-3xl animate-pulse-slower"></div>
          <div className="absolute w-[25%] h-[25%] top-[60%] left-[10%] rounded-full bg-[#29ABE2]/5 blur-3xl animate-float"></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes gradient-shift {
          0% { transform: translate(0%, 0%) scale(1.0); opacity: 0.5; }
          25% { transform: translate(-2%, 1%) scale(1.05); opacity: 0.6; }
          50% { transform: translate(0%, 2%) scale(1.1); opacity: 0.5; }
          75% { transform: translate(2%, -1%) scale(1.05); opacity: 0.6; }
          100% { transform: translate(0%, 0%) scale(1.0); opacity: 0.5; }
        }
        
        @keyframes gradient-shift-reverse {
          0% { transform: translate(0%, 0%) scale(1.0); opacity: 0.5; }
          25% { transform: translate(2%, -1%) scale(1.05); opacity: 0.6; }
          50% { transform: translate(0%, -2%) scale(1.1); opacity: 0.5; }
          75% { transform: translate(-2%, 1%) scale(1.05); opacity: 0.6; }
          100% { transform: translate(0%, 0%) scale(1.0); opacity: 0.5; }
        }
        
        @keyframes pulse-slow {
          0% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
          100% { opacity: 0.3; transform: scale(1); }
        }
        
        @keyframes pulse-slower {
          0% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.15); }
          100% { opacity: 0.4; transform: scale(1); }
        }
        
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(0px) translateX(10px); }
          75% { transform: translateY(10px) translateX(5px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 15s ease infinite;
        }
        
        .animate-gradient-shift-reverse {
          animation: gradient-shift-reverse 18s ease infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse-slower 15s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 