export const Opposite = () => {
  return (
    <div className="flex w-full h-full">
      <div className="flex-1 h-[1000px] text-black">
        <div className="grid gap-20 h-fit px-[130px] py-[240px]">
          <h1 className="text-[#FC6220] w-fit text-[40px] font-bold">-10° TO +35°</h1>
          <div className="w-fit grid gap-6">
            <p className="font-bold ">Opposite poles attract.</p>
            <p className="w-[400px]">
              The climate of the Gobi desert is quite extreme. It posses rapid
              changes of temperature of as much as 35°C (63 °F). These can occur
              not only seasonally but within 24 hours.
            </p>
            <p className="w-[400px]">
              Prepare for warm-to-hot days and chill-to-cold nights.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <img src="/OppositeImg.jpg" className="w-screen" />
      </div>
    </div>
  );
};
