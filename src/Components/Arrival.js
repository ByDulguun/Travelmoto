export const Arrival = () => {
  return (
    <div className="flex w-full h-full ">
      <div className="flex-1">
        <img src="/ArrivalImg.jpg" className="w-screen" />
      </div>
      <div className="flex-1 bg-black text-white">
        <div className="mt-52 ml-32">
          <img src="/UbImg.jpg" className="w-[430px] h-[280px] " />
          <h1 className="text-[40px] font-bold">DAY 1</h1>
          <div className="h-fit grid gap-6">
            <p className="text-[12px]">ARRIVAL IN ULAANBAATAR</p>
            <p className="w-[400px] text-[12px]">
              You will be picked up at the airport and taken to UB Grand Hotel,
              right in the city center next to Chinggis Khaan Square. By the end
              of the day, all riders will have tried their gear and are ready to
              leave Ulaanbaatar early the following day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
