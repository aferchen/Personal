export default function ExperienceItem({ name, logo, color, description }) {
  const isComponent = typeof logo === "function";
  const Logo = logo;

  return (
    <div className="flex flex-col items-center text-center p-4 border rounded-lg bg-white w-full max-w-[180px] min-h-40
                    transform-gpu transition-transform hover:scale-110" style={{ backgroundColor: "rgba(26, 26, 26, 1)" }}>
      {isComponent ? (
        <Logo className="h-10 w-10 mb-2" style={{ color }}/>
      ) : (
        <img src={logo} alt={name} className="h-10 w-10 mb-2" />
      )}
      <h4 className="font-semibold text-white">{name}</h4>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
}
