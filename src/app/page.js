import { Arrival } from "./Components/Arrival";
import { Header } from "./Components/Header";
import { Image } from "./Components/Image";
import { Life } from "./Components/Life";
import { Living } from "./Components/Living";
import { NoManLand } from "./Components/NoManLand";
import { Opposite } from "./Components/Opposite";
import { Presented } from "./Components/Presented";
import { RideRemote } from "./Components/RIdeRemote";
import { Sand } from "./Components/Sand";
import { Together } from "./Components/Together";
import { Trip } from "./Components/Trip";
import { Video } from "./Components/Video";
import { VideoText } from "./Components/VideoText";

export default function Home() {
  return (
    <div className="p-0 m-0 box-border">
      <>
        <Header />
        <Sand />
        <RideRemote />
        <NoManLand />
        <Video />
        <VideoText />
        <Together />
        <Image />
        <Opposite />
        <Living />
        <Life />
        <Arrival />
        <Trip />
        <Presented />
      </>
    </div>
  );
}
