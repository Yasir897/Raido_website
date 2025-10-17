const AnimatedDivider = () => {
  return (
    <div className="relative py-4">
      <div className="container mx-auto px-4">
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default AnimatedDivider;
