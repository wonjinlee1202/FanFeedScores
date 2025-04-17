import { Button } from "@/components/ui/button";
import { NbaUrl, NcaafUrl, NflUrl } from "@/constants";
import Link from "next/link";

const linkData = [
  { text: "NFL", href: `/${NflUrl}` },
  { text: "NCAAF", href: `/${NcaafUrl}` },
  { text: "NBA", href: `/${NbaUrl}` },
];

export default function Home() {
  return (
    <div className="h-[calc(100dvh-100px)] flex flex-col items-center justify-center gap-4 px-2">
      <h1 className="text-4xl sm:text-6xl">Live Scores</h1>
      <h3 className="sm:text-2xl">Check the scores of your favorite leagues</h3>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 my-4 sm:my-12">
        {linkData.map((league) => (
          <Button
            key={league.text}
            asChild
            variant="outline"
            className="w-[140px] sm:w-auto text-xl px-8 py-4 h-auto border-gray-500"
          >
            <Link href={league.href}>{league.text}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
