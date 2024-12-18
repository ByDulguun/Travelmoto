export const Life = () => {
  return (
    <div className="flex">
      <div className="flex-1 h-[982px]">
        <div className="grid gap-20 h-fit px-[130px] py-[240px]">
          <h1 className="text-[#FC6220] w-fit text-[40px] font-bold">
          LIFE JOURNEY
          </h1>
          <div className="w-fit grid gap-6">
            <p className="w-[400px]">
              Several generations of the same family often live together in
              Mongolia, preserving its stories, superstitions, and beliefs,
              passed between father and son to grandson.
            </p>
            <p className="w-[400px]">
              The balance of old with new, combined with the gracious
              hospitality of all Mongolian hosts, makes staying in ger camps a
              highlight.
            </p>
            <p className="w-[400px]">
              During this week, you will discover a culture of travelers who are
              perpetually on the move, eager to share their food and wisdom with
              you.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <img src="/LifeImg.jpg" className="w-screen" />
      </div>
    </div>
  );
};
