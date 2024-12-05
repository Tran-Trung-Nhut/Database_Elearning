import Roadmap from "@/components/Roadmap";
import Head from "next/head";


export default function Home() {
  return (
    <div>
      {/* <Head>
        <title>Lộ trình học</title>
        <meta name="description" content="Roadmap học tập ngành nghề" />
      </Head> */}
      <main>
        <Roadmap />
      </main>
    </div>
  );
}