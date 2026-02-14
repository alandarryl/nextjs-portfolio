import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="text-container" >
        <h2>Bonjour, je suis <span>Developer Full-stack</span> </h2>
        <p>je suis un <span>Jonathan Okana</span> </p>
      </div>
      <div className="image-container" >
        imager here
      </div>
    </div>
  );
}
