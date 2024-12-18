export const NoManLand = () => {
  return (
    <div className="flex w-screen h-fit">
      <div className="flex-1 text-white bg-black h-fit ">
        <div className="grid gap-20 h-full w-fit px-[130px] py-[240px]">
          <div>
            <p className="w-fit">Except the occasional nomad.</p>
            <h1 className="text-[#FC6220] w-fit">{`NO-MAN-LAND`}</h1>
          </div>
          <li className="w-[400px]">
            The Gobi is the fifth biggest desert globally and is home to various
            animals such as antelopes and Bactrian camels. They also like to
            become riding companions from time to time.
          </li>
          <li className="w-[400px]">
            The highest part of the Gobi is 1,580 meters, and the entire area
            has over 1.2 million km2, a true enduro paradise.
          </li>
          <li className="w-[400px]">
           {` You will be riding through the famous 'Flaming Cliffs of Gobi.' This
            place is so old; the first dinosaur fossil eggs known are here,
            exactly where you will experience one of the most beautiful sunrises
            you have ever seen. Let's ride!`}
          </li>
        </div>
      </div>
      <div className="flex-1 h-screen  ">
        <img src="/NoManLandImg.jpg" className="w-screen" />
      </div>
    </div>
  );
};
