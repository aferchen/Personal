import ExperienceItem from "./ExperienceItem";

export default function ExperienceSection({ title, items }) {
  return (
    <div
      className="p-[5px] rounded-lg mb-8"
      style={{
        backgroundImage:
          "linear-gradient(129deg,rgba(114, 152, 213, 1) 0%, rgba(161, 122, 160, 1) 56%, rgba(220, 97, 108, 1) 100%)",
      }}
    >
      <section className="p-6 bg-gray-100 rounded-xl shadow-sm justify-center ">
        <h3 className="text-2xl font-semibold mb-4 text-center">{title}</h3>
        <div
          className="flex flex-wrap justify-center gap-6"
        >
          {items.map((item, idx) => (
            <ExperienceItem key={idx} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}
