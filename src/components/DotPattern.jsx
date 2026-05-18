const DotPattern = ({ className, color }) => {
  const getDotBg = (color) => {
    switch (color) {
      case "purple":
        return "bg-purple-100";
      case "blue":
        return "bg-blue-100";
      case "cyan":
        return "bg-cyan-100";
      case "pink":
        return "bg-pink-100";
      default:
        return "bg-white-100";
    }
  };

  return (
    <div className={`grid grid-cols-12 gap-1.5 ${className}`}>
      {[...Array(60)].map((_, i) => {
        const x = i % 12;
        const y = Math.floor(i / 12);
        const opacity = Math.max(0, (1 - y / 5) * 0.4);
        const waveY = Math.sin(x * 0.4) * 8;

        return (
          <div
            key={"dotPattern" + i}
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
