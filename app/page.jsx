import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Endtecke && teile
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI Powered</span>
      </h1>
      <p className="desc text-center">
        Das ist ein Tool entwickelt von Suad Demiri zum Teilen und ausprobieren
        von ChatGPT Prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;
