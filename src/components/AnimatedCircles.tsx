const AnimatedCircles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Floating Circle 1 */}
        <circle cx="10%" cy="20%" r="60" fill="hsl(var(--primary))" opacity="0.1">
          <animate attributeName="cy" values="20%;25%;20%" dur="6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.1;0.2;0.1" dur="6s" repeatCount="indefinite" />
        </circle>
        
        {/* Floating Circle 2 */}
        <circle cx="85%" cy="30%" r="80" fill="hsl(var(--accent))" opacity="0.15">
          <animate attributeName="cy" values="30%;35%;30%" dur="8s" repeatCount="indefinite" />
          <animate attributeName="r" values="80;90;80" dur="8s" repeatCount="indefinite" />
        </circle>
        
        {/* Floating Circle 3 */}
        <circle cx="20%" cy="70%" r="50" fill="hsl(var(--primary))" opacity="0.12">
          <animate attributeName="cx" values="20%;25%;20%" dur="7s" repeatCount="indefinite" />
          <animate attributeName="cy" values="70%;75%;70%" dur="7s" repeatCount="indefinite" />
        </circle>
        
        {/* Floating Circle 4 */}
        <circle cx="90%" cy="75%" r="70" fill="hsl(var(--accent))" opacity="0.1">
          <animate attributeName="cx" values="90%;85%;90%" dur="9s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.1;0.15;0.1" dur="9s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
};

export default AnimatedCircles;
