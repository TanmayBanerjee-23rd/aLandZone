const DotPattern = ({ className, color }) => {
  const getDotBg = (color) => {
    switch (color) {
      case "purple":
        return "bg-brand-purple";
      case "blue":
        return "bg-brand-blue";
      case "cyan":
        return "bg-brand-cyan";
      case "pink":
        return "bg-brand-pink";
      default:
        return "bg-white";
    }
  };

  return (
    <div className={`grid grid-cols-12 gap-1.5 ${className}`}>
      {[...Array(60)].map((_, i) => {
        const x = i % 12;
        const y = Math.floor(i / 12);
        // Create a mesh/wave effect by varying opacity and position
        const opacity = Math.max(0, (1 - y / 5) * 0.4);
        const waveY = Math.sin(x * 0.4) * 8;

        return (
          <div
            key={i}
            className={`w-0.5 h-0.5 rounded-full ${getDotBg(color)}`}
            style={{
              opacity: opacity,
              transform: `translateY(${waveY}px)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default DotPattern;
