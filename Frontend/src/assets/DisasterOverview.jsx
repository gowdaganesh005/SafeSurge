// src/components/DisasterOverview.jsx
import React,{ useState } from "react";
import ReactDOM from "react-dom"

const disasters = [
  {
    id: 1,
    title: "Earthquake",
    description: (
      <div>
        <h3 className="text-lg font-bold mt-2 mb-1">
          What to Do Before an Earthquake
        </h3>
        <ul className="list-disc pl-6 space-y-1 text-left">
          <li>
            Repair deep plaster cracks in ceilings and foundations. Get expert
            advice if there are signs of structural defects.
          </li>
          <li>Anchor overhead lighting fixtures to the ceiling.</li>
          <li>
            Follow BIS codes relevant to your area for building standards.
          </li>
          
          <li>
            Repair defective electrical wiring and leaky gas connections. These
            are potential fire risks.
          </li>
          <li>
            Secure water heaters, LPG cylinders, etc., by strapping them to the
            walls or bolting them to the floor.</li>
         
          <li>Identify safe places indoors and outdoors:</li>
          <ul className="list-disc pl-8 space-y-1">
            <li>Under a strong dining table, bed</li>
            <li>Against an inside wall</li>
            <li>
              Away from where glass could shatter around windows, mirrors,
              pictures, or where heavy bookcases or other heavy furniture could
              fall over
            </li>
            <li>
              In the open, away from buildings, trees, telephone and electrical
              lines, flyovers, and bridges
            </li>
          </ul>
          <li>Know emergency telephone numbers (such as those of doctors, hospitals, the police, etc).</li>
          <li>Educate yourself and family members.</li>
        </ul>
      </div>
    ),
    details: (
      <div>
        <h3 className="text-lg font-bold mt-2 mb-1">If indoors</h3>
        <ul className="list-disc pl-6 space-y-1 text-left">
          <li>
            DROP to the ground
          </li>
          <li>
            Protect yourself by staying under the lintel of an inner door, in
            the corner of a room, under a table, or even under a bed.
          </li>
          <li>
            Stay away from glass, windows, outside doors and walls, and anything
            that could fall (such as lighting fixtures or furniture).
          </li>
          
        </ul>
        <h3 className="text-lg font-bold mt-2 mb-1">If outdoors</h3>
        <ul className="list-disc pl-6 space-y-1 text-left">
          <li>Do not move from where you are.</li>
          <li>
            However, move away from buildings, trees, streetlights, and utility
            wires.
          </li>
          <li>
            If you are in open space, stay there until the shaking stops. The
            greatest danger exists directly outside buildings; at exits; and
            alongside exterior walls. Most earthquake-related casualties result
            from collapsing walls, flying glass, and falling objects.
          </li>
        </ul>
        <h3 className="text-lg font-bold mt-2 mb-1">If in a moving vehicle</h3>
        <ul className="list-disc pl-6 space-y-1 text-left">
          <li>
            Stop as quickly as safety permits and stay in the vehicle. Avoid
            stopping near or under buildings, trees, overpasses, and utility
            wires.
          </li>
          
        </ul>
        <h3 className="text-lg font-bold mt-2 mb-1">If trapped under debris</h3>
        <ul className="list-disc pl-6 space-y-1 text-left">
          
          <li>Cover your mouth with a handkerchief or clothing.</li>
          <li>
            Tap on a pipe or wall so rescuers can locate you. Use a whistle if
            one is available. Shout only as a last resort. Shouting can cause
            you to inhale dangerous amounts of dust.
          </li>
        </ul>
      </div>
    ),
    imageUrl:
      "https://th.bing.com/th/id/OIP.W_CTVxxNBillVFVUHSS_rAHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 2,
    title: "Flood",
    description: (
      <div>
        <h3 className="text-lg font-bold mt-2 mb-1">Description</h3>
        <p className="text-left">
          A flood is an overflow of water that submerges land that is usually
          dry.
        </p>
      </div>
    ),
    details: (
      <div>
        <h3 className="text-lg font-bold mt-2 mb-1">What to Do After Floods</h3>
        <ul className="list-disc pl-6 space-y-1 text-left">
          <li>Drink chlorinated or boiled water.</li>
          <li>Take clean and safe food.</li>
          <li>
            Sprinkle insecticides in the water ponds/ stagnant water.
          </li>
          
        </ul>
        <h3 className="text-lg font-bold mt-2 mb-1">Emergency Kit</h3>
        <ul className="list-disc pl-6 space-y-1 text-left">
          <li>
            Prepare a safety kit which should include a torch, sheets/blankets,
            waterproof clothing, battery-operated radio, bottled water,
            first-aid kit, medication, personal valuables, and personal
            documentation.
          </li>
        </ul>
      </div>
    ),
    imageUrl:
      "https://sergeantprepperssurvivalclub.com/wp-content/uploads/2020/10/Flood-tips-e1601945816429.jpg",
  },
  {
    id: 3,
    title: "Cyclone",
    description: (
      <div>
        <h3 className="text-lg font-bold mt-2 mb-1">
          Before the Cyclone Season
        </h3>
        <ul className="list-disc pl-6 space-y-1 text-left">
          <li>
            Check the house; secure loose tiles and carry out repairs of doors
            and windows.
          </li>
          <li>
            Remove dead branches or dying trees close to the house; anchor
            removable objects such as lumber piles, loose tin sheets, loose
            bricks, garbage cans, signboards, etc. which can fly in strong
            winds.
          </li>
          <li>
            Keep some wooden boards ready so that glass windows can be boarded
            if needed.
          </li>
          <li>
            Keep a hurricane lantern filled with kerosene, battery-operated
            torches, and enough dry cells.
            </li>
            <li>Demolish condemned buildings.</li>
          <li>Keep some extra batteries for transistors.</li>
          <li>
            Keep some dry non-perishable food always ready for use in
            emergencies.
          </li>
        </ul>
      </div>
    ),
    details: (
      <div>
        <h3 className="text-lg font-bold mt-2 mb-1">
          When Your Area is Under Cyclone Warning
        </h3>
        <ul className="list-disc pl-6 space-y-1 text-left">
          <li>
            Get away from low-lying beaches or other low-lying areas close to
            the coast.
          </li>
          <li>
            Leave early before your way to high ground or shelter gets flooded.
          </li>
          <li>
            Do not delay and run the risk of being marooned.
          </li>
          <li>
            If your house is securely built on high ground, take shelter in the
            safe part of the house. However, if asked to evacuate, do not
            hesitate to leave the place.
          </li>
          <li>
            Board up glass windows or put storm shutters in place. Provide
            strong, suitable support for outside doors.
          </li>
          <li>
            If you do not have wooden boards handy, paste paper strips on
            glasses to prevent splinters. However, this may not avoid breaking
            windows.
          </li>
          <li>
            Get extra food that can be eaten without cooking. Store extra
            drinking water in suitably covered vessels.
          </li>
          <li>
            If you have to evacuate the house, move your valuable articles to
            upper floors to minimize flood damage.
          </li>
          <li>
            Ensure that your hurricane lantern, torches, or other emergency
            lights are in working condition and keep them handy.
          </li>
          <li>
            Small and loose things that can fly in strong winds should be stored
            safely in a room.
          </li>
          <li>
            Be sure that a window and door can be opened only on the side
            opposite to the one facing the wind.
          </li>
          <li>
            Make provision for children and adults requiring special diets.
          </li>
          <li>
            If the centre of the cyclone is passing directly over your house,
            there will be a lull in the wind and rain lasting for half an hour
            or so. During this time, do not go out; because immediately after
            that, very strong winds will blow from the opposite direction.
          </li>
          <li>Switch off the electrical mains in your house.</li>
          <li>Remain calm.</li>
        </ul>
      </div>
    ),
    imageUrl:
      "https://i.pinimg.com/736x/bf/48/d7/bf48d704ccf51a7eb8db507f423112dc.jpg",
  },
  {
    id: 4,
    title: "Landslide",
    description: (
      <div>
        <h3 className="text-lg font-bold mt-2 mb-1">Do's</h3>
        <ul className="list-disc pl-6 space-y-1 text-left">
          <li>
            Prepare a tour to the hilly region according to information given by
            the weather department or news channel.
          </li>
          <li>
            Move away from the landslide path or downstream valleys quickly
            without wasting time.
          </li>
          <li>
            Keep drains clean and inspect them for litter, leaves, plastic bags,
            rubble, etc.
          </li>
          <li>Keep the weep holes open.</li>
          <li>
            Grow more trees that can hold the soil through roots.
          </li>
          <li>
            Identify areas of rockfall and subsidence of buildings, and cracks
            that indicate landslides, and move to safer areas. Even muddy river
            waters indicate landslides upstream.
          </li>
          <li>
            Notice such signals and contact the nearest Tehsil or District
            Headquarters.
          </li>
          <li>
            Ensure that the toe of the slope is not cut, remains protected, and
            do not uproot trees unless re-vegetation is planned.
          </li>
          <li>
            Listen for unusual sounds such as trees cracking or boulders
            knocking together.
          </li>
          <li>
            Stay alert, awake, and active (3A's) during the impact or
            probability of impact.
          </li>
          <li>Locate and go to shelters.</li>
          <li>Try to stay with your family and companions.</li>
          <li>Check for injured and trapped persons.</li>
          <li>
            Mark the path of tracking so that you can't be lost in the middle of
            the forest.
          </li>
          <li>
            Know how to give signs or how to communicate during emergency times
            to flying helicopters and rescue teams.
          </li>
        </ul>
      </div>
    ),
    details: (
      <div>
        <h3 className="text-lg font-bold mt-2 mb-1">Don'ts</h3>
        <ul className="list-disc pl-6 space-y-1 text-left">
          <li>Avoid construction and staying in vulnerable areas.</li>
          <li>Do not panic and lose energy by crying.</li>
          <li>
            Do not touch or walk over loose material and electrical wiring or
            poles.
          </li>
          <li>Do not build houses near steep slopes and near drainage paths.</li>
          <li>
            Do not drink contaminated water directly from rivers, springs, or
            wells, but rainwater if collected directly is fine.
          </li>
          <li>
            Do not move an injured person without rendering first aid unless the
            casualty is in immediate danger.
          </li>
        </ul>
      </div>
    ),
    imageUrl:
      "https://th.bing.com/th/id/OIP.XiX_tYaazoO1dIJgxr4_FgHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
];
const DisasterCard = ({ disaster, onClick }) => (
  <div
    onClick={() => onClick(disaster)}
    className="border border-gray-300 rounded-lg p-4 m-4 w-64 shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl"
  ><div  className="relative w-full aspect-w-16 aspect-h-9">
    <img
      src={disaster.imageUrl}
      alt={disaster.title}
      className="w-full h-40 object-cover rounded-lg mb-4 aspect-w-16 aspect-h-9"
    />
    </div>
    <h2 className="text-blue-500 text-xl font-semibold">{disaster.title}</h2>
  </div>
);

const DisasterDetails = ({ disaster, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-4 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full max-h-screen overflow-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <img
          src={disaster.imageUrl}
          alt={disaster.title}
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
        <h2 className="text-xl font-semibold text-blue-700 mb-4">{disaster.title}</h2>
        <div className="text-gray-700 space-y-4">
          {disaster.details}
        </div>
      </div>
    </div>,
    document.body
  );
};


const DisasterOverview = () => {
  const [selectedDisaster, setSelectedDisaster] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (disaster) => {
    setSelectedDisaster(disaster);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDisaster(null);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {disasters.map((disaster) => (
          <DisasterCard
            key={disaster.id}
            disaster={disaster}
            onClick={openModal}
          />
        ))}
      </div>
      {isModalOpen && selectedDisaster && (
        <DisasterDetails disaster={selectedDisaster} onClose={closeModal} />
      )}
    </div>
  );
};

export default DisasterOverview;