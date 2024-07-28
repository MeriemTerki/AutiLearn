import Cell from "../../assets/dashboard/cell.svg";
import Genetic from "../../assets/dashboard/genetic.svg";
import Apple from "../../assets/dashboard/apple.svg";

// Constants for gradients and text colors based on subject
const GRADIENTS = {
  Physics: "bg-gradient-to-b from-cyan-500 via-blue-600 to-indigo-500",
  Biology: "bg-gradient-to-bl from-lime-400 via-emerald-500 to-green-600",
};

const TEXT_COLORS = {
  Biology: "#913232",
  Physics: "#205a3d",
};

const stories = [
  {
    id: 1,
    title: "Newton's Laws",
    img: Apple,
    subject: "Physics",
  },
  {
    id: 3,
    title: "Genetics Basics",
    img: Genetic,
    subject: "Biology",
    coin: 10,
  },
  {
    id: 4,
    title: "Cell Theory",
    img: Cell,
    subject: "Biology",
    coin: 20,
  },
];

const StoryCard = ({ title, img, subject, coin }) => (
  <div
    className={`min-w-[245px] md:w-[245px] shadow-lg rounded-[12px] mb-10 xl:mb-6 cursor-pointer py-6 px-5 xl:px-5 xl:py-6 ${GRADIENTS[subject]}`}
  >
    <div className="text-6xl flex mb-4 items-center justify-center">
      <img src={img} className="w-full" alt={`${title} course icon`} />
    </div>
    <div className="font-medium text-2xl xl:text-xl text-white">{title}</div>
    <div
      className={`font-bold text-xl xl:text-lg mb-3 ${
        TEXT_COLORS[subject] ? `text-[${TEXT_COLORS[subject]}]` : "text-white"
      }`}
    >
      {subject}
    </div>
    <div className="flex items-center text-lg xl:text-base justify-between text-white/60 font-bold">
      <span>Completed:</span>
      <span>95%</span>
    </div>
    {coin ? (
      <div className="flex justify-between items-center">
        <button className="mt-4 bg-white py-1 font-semibold px-4 rounded-xl hover:bg-blue-50">
          Unlock
        </button>
        <div className="mt-2">🪙</div>
      </div>
    ) : (
      <button className="mt-4 bg-white py-1 font-semibold px-4 rounded-xl hover:bg-blue-50">
        Read
      </button>
    )}
  </div>
);

// Main Stories component
const Stories = () => (
  <div className="xl:p-6 pb-2 relative text-zinc-900 px-5 md:px-12 xl:px-5">
    <div className="text-center md:text-left mb-12 max-w-[600px]">
      <h1 className="font-bold text-4xl mb-3">Stories</h1>
      <p className="font-medium text-gray-700">
        Delight in engaging fictional and educational stories designed to make
        learning fun and exciting.
      </p>
    </div>

    <section>
      <div className="flex flex-col md:flex-row md:space-x-8 overflow-x-auto pb-4 scrollbar-custom">
        {stories.map((story) => (
          <StoryCard key={story.id} {...story} />
        ))}
      </div>
    </section>
  </div>
);

export default Stories;
