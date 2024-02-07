import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar brandName={"My Portfolio"} navItems={[{ label: 'Home', href: '#' }]} />
      <div className="container mx-auto p-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden px-5 py-2">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image className="h-48 w-full object-cover md:w-48" src="/profile-pic.png"
                width={500}
                height={500}
                alt="Picture of the author" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Ivan Eric Rubin</div>
              <p className="mt-2 text-gray-500">I&apos;m a passionate developer and tech enthusiast. Here, you&apos;ll find a collection of projects and code snippets reflecting my journey in the world of software development.</p>
              <div className="mt-4">
                <a href="#" className="text-indigo-500 hover:text-indigo-600">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
