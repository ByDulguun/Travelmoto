export const Together = () => {
  return (
    <div className="flex w-full h-full">
      <div className="flex-1">
        <img src="/TogetherImg.jpg" className="w-screen" />
      </div>
      <div className="flex-1 text-white bg-black h-[1050px] ">
        <div className="grid gap-20 h-fit px-[130px] py-[240px]">
          <h1 className="text-[#FC6220] w-fit text-[40px]">TOGETHER WE RIDE</h1>
          <div className="w-fit grid gap-6">
            <p className="w-[400px]">
              The connections with people that go hand in hand with enduro
              riding are second to none. Dirt biking attracts genuine
              salt-of-the-earth people. You can share the inspiration and stoke
              of riding over beverages and bonfires at night.
            </p>
            <p className="w-[400px]">
              Having a common interest in riding often breaks down social
              barriers and brings different people together. Some of my best
              friendships have come through riding in remote locations. I have
              yet to find these types of companies and support in other areas of
              life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
