import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import CinematicHero from "@/components/CinematicHero";
import HomeIntro from "@/components/HomeIntro";
import HomeProjects from "@/components/HomeProjects";
import HomePodcast from "@/components/HomePodcast";
import HomeBlog from "@/components/HomeBlog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <main className="flex-grow w-full">
        <CinematicHero />
        <HomeIntro />
        <HomeProjects />
        <HomePodcast />
        <HomeBlog />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
