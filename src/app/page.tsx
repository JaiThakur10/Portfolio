import MaxWidthWarpper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black antialiased  ">
      <MaxWidthWarpper>
        <div className=" bg-black h-8 w-full"></div>
        <Navbar />
        <Hero />
      </MaxWidthWarpper>
    </main>
  );
}
