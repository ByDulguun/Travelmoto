export const RideRemote = () => {
  return (
    <div className="relative h-full w-screen">
      <img src="/RideRemoteImg.jpg" className="w-screen " />
      <div className="absolute top-0 w-screen grid gap-32 my-32">
        <div className="text-[#FC6220] text-[40px] text-center ">
          RIDE REMOTE
        </div>
        <div className="flex justify-center gap-20 ">
          <div className="text-white grid h-fit gap-9 cursor-pointer w-fit hover:scale-110 group">
            <div>
              <h1 className="font-bold group-hover:text-[#Fc6220]">Level</h1>
            </div>
            <div>
              <p className="w-[200px] text-white group-hover:text-[#Fc6220]">
                Intermediate-to-advanced enduro bikers.
              </p>
            </div>
          </div>
          <div className="text-white grid gap-9 h-fit cursor-pointer w-fit hover:scale-110 group">
            <div>
              <h1 className="font-bold group-hover:text-[#Fc6220]">Group</h1>
            </div>
            <div className="text-white group-hover:text-[#Fc6220]">
              <p>7 people max.</p>
            </div>
          </div>
          <div className="text-white grid gap-9 h-fit cursor-pointer w-fit hover:scale-110 group ">
            <div>
              <h1 className="font-bold group-hover:text-[#Fc6220]">Period</h1>
            </div>
            <div className="text-white group-hover:text-[#Fc6220]">
              <p>April, 2022</p>
            </div>
            <div>
              <p className="w-[300px] text-white group-hover:text-[#Fc6220]">
                7 days / 6 nights of travel in the countryside 2 nights in
                Ulaanbaatar city, Mongolia
              </p>
            </div>
          </div>
          <div className="text-white grid gap-9 h-fit cursor-pointer w-fit hover:scale-110 group">
            <div>
              <h1 className="font-bold group-hover:text-[#Fc6220]">
                Food & Accommodation
              </h1>
            </div>
            <div>
              <p className="group-hover:text-[#Fc6220]">
                Camps, yurts, lodges and hotels
              </p>
            </div>
          </div>
        </div>
        <div className="text-white ml-[240px] grid gap-9">
          <h1 className="font-semibold text-[40px]">Silent Night at Gobi</h1>
          <p className="text-left text-2xl">
            The Gobi desert is the base camp to extremely remote landscapes,
            <br />
            no cell phone coverage, and nobody else around you in hundreds of
            <br />
            kilometers (except the last living nomad families). On top of a{" "}
            <br />
            dirtbike, you will cross sand hills, rocky mountains, old canyons,
            <br />
            forests, and endless steppes.
          </p>
        </div>
      </div>
    </div>
  );
};
