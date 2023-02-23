import dynamic from "next/dynamic";

import { Inter } from "@next/font/google";

const DinamicSlider = dynamic(() => import("../components/Slider"), {
  loading: () => <p>...</p>,
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <DinamicSlider />
    </main>
  );
}
