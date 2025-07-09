function ProjectCard({
  title,
  description,
  imageSrc,
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
      <div className="md:w-1/3 w-full flex justify-center ">
       <div className="p-[5px] rounded-lg" 
       style={{
              backgroundImage:
                "linear-gradient(129deg,rgba(114, 152, 213, 1) 0%, rgba(161, 122, 160, 1) 56%, rgba(220, 97, 108, 1) 100%)",
            }}>
        <img
          src={imageSrc}
          alt={title}
          className="w-full max-w-xs rounded-lg shadow-lg bg-white"
        />
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
              className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
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
