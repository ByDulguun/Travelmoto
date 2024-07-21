export const VideoText = () => {
  return (
    <div className="w-full h-full ">
      <div className="text-[#EC542D] font-medium text-[40px] py-24 ">
        <h1 className="pl-12 pb-12">WHAT PEOPLE SAY</h1>
        <div className="w-full h-full relative">
          <img src="/VideoTextImg.jpg" className="w-screen" />
          <p className="absolute top-56 left-[450px] text-center w-[800px] font-bold text-3xl text-white">
            “From off-road riding to bonfire nights, to sitting on camels amd
            seeing literally hundreds of wild horses, everything was just
            perfect.”
          </p>
          <p className="top-[400px] absolute left-[880px] text-sm text-white">
            B.Taivnaa
          </p>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
};
