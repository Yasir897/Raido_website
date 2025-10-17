const ComingSoonIllustration = () => {
  return (
    <div className="flex justify-center items-center">
      <svg 
        width="300" 
        height="300" 
        viewBox="0 0 300 300" 
        className="w-64 h-64 md:w-80 md:h-80"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Rocket Body */}
        <g className="rocket">
          <path 
            d="M150 80 L130 180 L170 180 Z" 
            fill="hsl(var(--primary))"
            opacity="0.9"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -10; 0 0"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Rocket Window */}
          <circle cx="150" cy="120" r="15" fill="hsl(var(--background))" opacity="0.8">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -10; 0 0"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          
          {/* Left Wing */}
          <path 
            d="M130 160 L110 200 L130 180 Z" 
            fill="hsl(var(--accent))"
            opacity="0.8"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -10; 0 0"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Right Wing */}
          <path 
            d="M170 160 L190 200 L170 180 Z" 
            fill="hsl(var(--accent))"
            opacity="0.8"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -10; 0 0"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
        </g>
        
        {/* Fire/Exhaust */}
        <g className="fire">
          <ellipse cx="150" cy="185" rx="15" ry="25" fill="hsl(var(--primary))" opacity="0.6">
            <animate attributeName="ry" values="25;35;25" dur="0.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0.8;0.6" dur="0.5s" repeatCount="indefinite" />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -10; 0 0"
              dur="2s"
              repeatCount="indefinite"
            />
          </ellipse>
          
          <ellipse cx="150" cy="200" rx="12" ry="20" fill="hsl(var(--accent))" opacity="0.5">
            <animate attributeName="ry" values="20;30;20" dur="0.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0.7;0.5" dur="0.4s" repeatCount="indefinite" />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -10; 0 0"
              dur="2s"
              repeatCount="indefinite"
            />
          </ellipse>
        </g>
        
        {/* Stars */}
        <circle cx="80" cy="100" r="3" fill="hsl(var(--primary))">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="220" cy="120" r="2" fill="hsl(var(--accent))">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="180" r="2.5" fill="hsl(var(--primary))">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="90" r="2" fill="hsl(var(--accent))">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="60" cy="150" r="2.5" fill="hsl(var(--primary))">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="240" cy="160" r="3" fill="hsl(var(--accent))">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
};

export default ComingSoonIllustration;
