import HomeBanner from "@/components/HomeBanner";
import HomeBannerTwo from "@/components/HomeBannerTwo";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function HomePage() {
  return (
    <div className="relative h-screen w-full">
      <Head>
        <title>EngageX App</title>
        <meta name="description" content="EngageX - Stars are rehearsing!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HomeBanner />
      <HomeBannerTwo/>
    </div>
  );
}
