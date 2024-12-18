import { Accomodation } from "../assests/Icon/Accomodation";
import { Flights } from "../assests/Icon/Flights";
import { Food } from "../assests/Icon/Food";
import { Guide } from "../assests/Icon/Guide";
import { Health } from "../assests/Icon/Health";
import { Last } from "../assests/Icon/Last";
import { Private } from "../assests/Icon/Private";
import { Protective } from "../assests/Icon/Protective";
import { Riding } from "../assests/Icon/Riding";
import { Transfers } from "../assests/Icon/Transfers";
import { Vehicle } from "../assests/Icon/Vehicle";
import { Visa } from "../assests/Icon/Visa";

export const Trip = () => {
  return (
    <div className="w-fit h-fit relative">
      <img src="/TripImg.jpeg" className="w-screen h-[1400px]" />
      <div className="absolute top-12 w-screen text-center ">
        <h1 className="text-[40px] text-[#FC6220]">TRIP SUMMARY</h1>
        <div className="flex">
          <div className="text-start w-fit grid gap-[60px] ml-32 mt-32">
            <h1 className="text-[22px] text-[#FC6220] ml-32">INCLUDED</h1>

            <div className="flex gap-6">
              <Accomodation />
              <div className="text-white text-start  ">
                <p className="font-medium">Accomodation</p>
                <p className="w-[300px] font-light">
                  8 nights lodge, camp, ger and hotel accommodation included.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <Food />
              <div className="text-white text-start  ">
                <p className="font-medium">Food: all meals</p>
                <p className="w-[300px] font-light">
                  Breakfast, lunch, dinner, and snacks included.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <Vehicle />
              <div className="text-white text-start  ">
                <p className="font-medium">VEHICLE + FUEL</p>
                <p className="w-[300px] font-light">
                  Motorbike rent, Husqvarna FE450 included. All fuel included..
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <Guide />
              <div className="text-white text-start  ">
                <p className="font-medium">Guide/tour leader</p>
                <p className="w-[300px] font-light">
                  The main point of contact during the trip. He will be riding
                  along with the crew.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <Private />
              <div className="text-white text-start  ">
                <p className="font-medium">PRIVATE CHEF</p>
                <p className="w-[300px] font-light">
                  We know riding makes you hungry! We have you covered with a
                  private chef for the campsites and bonfires.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <Transfers />
              <div className="text-white text-start  ">
                <p className="font-medium">TRANSFERS</p>
                <p className="w-[300px] font-light">
                  Pick up service from and to the airport.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <Last />
              <div className="text-white text-start  ">
                <p className="font-medium">Last Night Hotel</p>
                <p className="w-[300px] font-light">
                  Last hotel night in Ulaanbaatar before departure included.
                </p>
              </div>
            </div>
          </div>
          <div className="text-start w-fit grid h-fit gap-[60px] ml-[500px] mt-32">
            <h1 className="text-[22px] text-[#FC6220] ml-32">NOT INCLUDED</h1>

            <div className="flex gap-6">
              <Flights />
              <div className="text-white text-start  ">
                <p className="font-medium">Flights</p>
                <p className="w-[300px] font-light">
                  The group must arrive before 12pm on the day of departure at
                  Chinggis Khaan International Airport{" "}
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <Visa />
              <div className="text-white text-start  ">
                <p className="font-medium">Visa</p>
                <p className="w-[300px] font-light">
                  Cost of Visa and Visa approval should be requested 60 days
                  prior to arrival to Mongolia.{" "}
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <Health />
              <div className="text-white text-start  ">
                <p className="font-medium">Health Insurance</p>
                <p className="w-[300px] font-light">
                  Health Insurance is not included in the price. Riders must
                  have their own insurance.{" "}
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <Protective />
              <div className="text-white text-start  ">
                <p className="font-medium">Protective Gear</p>
                <p className="w-[300px] font-light">
                  Available for rent 25€/day per person.{" "}
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <Riding />
              <div className="text-white text-start  ">
                <p className="font-medium">Riding Gear </p>
                <p className="w-[300px] font-light">
                  Your biking attire is not included. Make sure you gear up in
                  our recommended gear section below.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
