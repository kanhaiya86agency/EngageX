import Head from 'next/head';  
import NextVideoSlide from './NextVideoSlide';

export default function HomeBanner() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Head>
        <title>EngageX App</title>
      </Head>
      <NextVideoSlide   
        videoSrc="./HomeBannerTwo.mp4" // Path to the next video clip
        svgFilePath="/path/to/your/svg.svg" // Path to your SVG file
      />

        <div className="absolute top-6 right-6 flex space-x-4">
          <button className="px-4 py-2 bg-white text-black rounded-md shadow">Log in</button>
          <button className="px-4 py-2 bg-white text-black rounded-md shadow">Menu</button>
        </div>

        <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
          EngageX App<br />For Every Moment.
        </h1>
    </div>
  );
}
