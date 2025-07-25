function ProjectCard({
  title,
  description,
  imageSrc,
  hoverImg,
  banners = [],
  Link,
  LinkDesc,
  Link2,
  LinkDesc2,
  date,
  reverse = false,
}) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-center gap-32 mb-12 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="md:w-1/3 w-full flex justify-center group relative">
        {/* Border */}
        <div
          className="relative p-[5px] rounded-lg w-full max-w-sm aspect-[4/3] overflow-visible transition-transform duration-300 group-hover:scale-130"
          style={{
            backgroundImage:
              "linear-gradient(129deg,rgba(114, 152, 213, 1) 0%, rgba(161, 122, 160, 1) 56%, rgba(220, 97, 108, 1) 100%)",
          }}
        >
          <div className="relative w-full h-full rounded-lg bg-white">
            {/* Normal Image */}
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-contain rounded-lg transition-opacity duration-300 group-hover:opacity-0"
            />

            {/* Hover Image */}

            <img
              src={hoverImg || imageSrc}
              alt={`${title} demo`}
              className="absolute top-1/2 left-1/2 w-full h-full object-contain rounded-lg transition-all duration-600 ease-in-out opacity-0 group-hover:opacity-100 z-10"
              style={{
                transform: "translate(-50%, -50%) scale(1)",
              }}
            />
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-700 w-full md:w-1/2 mx-auto md:mx-0">
        <h4 className="text-2xl font-bold mb-3">{title}</h4>
        {date && <p className="text-sm text-gray-500 mb-2">{date}</p>}
        <p className="mb-4 text-gray-700">{description}</p>

        {/* Banners */}
        <div className="flex flex-wrap gap-2 mb-4">
          {banners.map((banner, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {banner}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          {Link && (
            <a
              href={Link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
            >
              {LinkDesc}
            </a>
          )}
          {Link2 && (
            <a
              href={Link2}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
            >
              {LinkDesc2}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
