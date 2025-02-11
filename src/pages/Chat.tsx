
import work from "/src/assets/work-in-progress.png";

const Chat = () => {
  return (
      <div className="lg:flex rounded-xl bg-gray-50 p-10">
        <div className="w-full text-center">
          <h1 className="text-sm uppercase">Talk with AI about me</h1>

          <p className="lg:text-xl mt-4">
            Here you can chat with AI about interesting things about me. <br />
            Examples: what I'm expecting to graduate, what year I was born...
          </p>

          <div className="p-6 justify-center flex">
          <img src={work} alt="eduardo-gerhardt" className="lg:w-96 w-40" />
        </div>
        </div>
      </div>
  );
};

export default Chat;
