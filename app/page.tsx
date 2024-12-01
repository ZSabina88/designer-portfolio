import HomeFooter from "./components/HomeFooter";



const Home: React.FC = () => {
  return (
    <main className="flex flex-col h-[100%]">
      <div className="flex flex-row justify-between pt-24 pl-12 pr-2">
        <div className="w-[450px] h-[550px] bg-cover z-[-1] ring-4 ring-white blob bg-[url('/profile-photo.webp')]"></div>
        <div className="mt-60 mr-4 w-[600px] flex flex-col text-center">
          <h1>ORKHAN</h1>
          <h1>ZEYNALOV</h1>
        </div>
      </div>
      <HomeFooter />
    </main>

  );
}

export default Home;