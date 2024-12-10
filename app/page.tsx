import Author from "./components/AuthorName/Author";
import HomeFooter from "./components/HomeFoooter/HomeFooter";




const Home: React.FC = () => {
  return (
    <section>
      <div className="flex flex-row justify-between gap-24 mt-8 px-12">
        <div className="w-[450px] h-[550px] bg-cover z-[-1] ring-4 ring-white blob bg-[url('/profile-photo.webp')]"></div>
        <Author />
      </div>
      <HomeFooter />
    </section>

  );
}

export default Home;