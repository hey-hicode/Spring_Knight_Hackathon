import React from "react";

const SectionE = () => {
  const Card = ({
    imageUrl,
    category,
    rating,
    reviewsCount,
    isSuperhost,
    title,
    description,
    pricePerNight,
  }: any) => {
    return (
      <div className="">
        <div className="relative flex flex-col md:flex-row space-y-3 md:space-y-0 rounded-xl shadow-lg p-3  md:max-w-3xl mx-auto border border-white bg-white">
          <div className="w-full md:w-1/3 bg-white grid place-items-center">
            <img src={imageUrl} alt="Location" className="rounded-xl" />
          </div>
          <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
            <h3 className=" text-gray-800 font-bold md:text-xl text-xl">
              {title}
            </h3>
            <p className="md:text-base text-gray-500 text-base">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className=" py-11 md:px-20 bg-[#f5f5ee] px-8  flex flex-col gap-11 ">
      <h1 className=" font-bold text-[26px] flex-col md:text-5xl  mx-auto flex justify-center items-center   ">
        Want to learn more?
      </h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="">
          <Card
            imageUrl="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            title="Newsletter"
            description="Keep up with the latest news, launches, jobs, and events from our community
                "
          />
        </div>
        <div className="">
          <Card
            imageUrl="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            title="Blog"
            description="Essays, events, and announcements from YC
                "
          />
        </div>
        <div className="">
          <Card
            imageUrl="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            title="our Library"
            description="Videos, podcasts, and essays for startup founders
                "
          />
        </div>
      </div>
    </div>
  );
};

export default SectionE;
