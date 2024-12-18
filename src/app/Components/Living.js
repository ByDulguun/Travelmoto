export const Living = () => {
  return (
    <div className=" w-full h-full bg-black">
      <div className="flex">
        <div>
          <img src="/LivingImg.jpg" className="w-[792px]" />
        </div>
        <div>
          <div className="grid gap-20 h-fit px-[130px] py-[240px]">
            <h1 className="text-[#FC6220] w-fit text-[40px]">LIVING NOWHERE</h1>
            <div className="w-fit grid gap-6 text-white">
              <p className="font-semibold">Feeling welcomed.</p>
              <p className="w-[400px]">
                {`Nomadic living has remained part of Mongolian life for
                millennia. Half the country's population still chooses to live
                in traditional ger tents. It’s in their DNA to wander.`}
              </p>
              <p className="w-[400px]">
                {`A stay in a ger tent offers you the opportunity to experience a
                time-honored way of life and provides the perfect base from
                which to explore Mongolia's majestic landscapes.`}
              </p>
              <p className="w-[400px]">
                Ger tents are well insulated but lightweight to protect against
                all weathers yet still be quick to dismantle and packed away,
                making it easy to move freely and find better grazing lands.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 px-32">
        <div className="text-white text-[12px] ">
          <img src="/LivingFooterImg1.jpg" className="h-[510px] w-screen" />
          <p className="mt-2">SLEEP IN THE WILD</p>
          <p className="mt-8">
            Experience nomadic culture. Everyday a new camp and a different
            view.
          </p>
        </div>
        <div className="text-white text-[12px]">
          <img src="/LivingFooterImg2.jpg" className="h-[510px] w-screen" />
          <p className="mt-2">BREAKFAST, LUNCH AND DINNER</p>
          <p className="mt-8">Serve always with a view</p>
        </div>
        <div className="text-white text-[12px]">
          <img src="/LivingFooterImg3.jpg" className="h-[510px] w-screen" />
          <p className="mt-2">GER LIVING</p>
          <p className="mt-8 w-[300px]">
            This hers tents are so unique, sleeping in one of them will make you
            wonder why you dont have one in your lawn already.
          </p>
        </div>
      </div>
    </div>
  );
};
