import Author from "./components/AuthorName/Author";
import HomeFooter from "./components/HomeFoooter/HomeFooter";




const Home: React.FC = () => {
  return (
    <section className="flex flex-col h-[100%]">
      <div className="flex flex-row justify-baseline gap-24 mt-24 pl-12 pr-2">
        <div className="w-[450px] h-[550px] bg-cover z-[-1] ring-4 ring-white blob bg-[url('/profile-photo.webp')]"></div>
        <Author />
      </div>
      <HomeFooter />
    </section>

  );
}

export default Home;