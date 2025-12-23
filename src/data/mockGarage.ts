export type BuildTag = "drift" | "rally" | "sleeper" | "subtle";

// Vite will bundle these and turn them into usable URLs.
// In JSX, you can pass these directly into <img src={...} />.
import garageMockUrl from "../assets/garage-mock.jpg";
import engineBayMockUrl from "../assets/engine-bay-mock.jpg";
import interiorMockUrl from "../assets/interior-mock.jpg";

export type PartSectionId =
  | "shell"
  | "engine"
  | "transmission"
  | "diff"
  | "suspension"
  | "brakes"
  | "wheels_tires"
  | "ecu_tune";

export type ServiceEvent = {
  id: string;
  date: string; // ISO-ish for demo
  mileage: number;
  title: string;
  notes: string;
};

export type PassportSection = {
  id: PartSectionId;
  title: string;
  subtitle?: string;
  items: Array<{ label: string; value: string }>;
};

export type CarPassport = {
  id: string;
  displayName: string;
  year: number;
  make: string;
  model: string;
  trim?: string;
  location: string;
  buildTags: BuildTag[];
  summary: string;

  vin: string;
  gallery: Array<{ id: string; src: string; alt: string }>;

  sections: PassportSection[];
  serviceHistory: ServiceEvent[];
};

export type CommunityPost = {
  id: string;
  author: string;
  handle: string;
  time: string;
  text: string;
  carId?: string;
  likes:  number;
  comments: number;
};

export const mockCar: CarPassport = {
  id: "car_e36m3_01",
  displayName: "E36 M3 — FrankenVIN Passport",
  year: 1998,
  make: "BMW",
  model: "M3",
  trim: "Coupe",
  location: "Denver, CO",
  buildTags: ["drift", "sleeper"],
  summary:
    "Streetable drift setup: clean on the outside. Documented swap chain, part provenance, and service timeline.",

  // fake VIN
  vin: "WBSBG9320WEH00042",

  gallery: [
    { id: "g1", src: garageMockUrl, alt: "E36 M3 in a dark garage" },
    { id: "g2", src: engineBayMockUrl, alt: "Engine bay" },
    { id: "g3", src: interiorMockUrl, alt: "Interior" },
  ],

  sections: [
    {
      id: "shell",
      title: "Shell / Chassis",
      subtitle: "Where the VIN lives",
      items: [
        { label: "VIN", value: "WBSBG9320WEH00042 (fake)" },
        { label: "Donor", value: "1998 BMW M3 Coupe (US spec)" },
        {
          label: "Chassis notes",
          value: "Seam-checked, rear subframe reinforced",
        },
        { label: "Build type", value: "Drift + sleeper aesthetic" },
      ],
    },
    {
      id: "engine",
      title: "Engine",
      subtitle: "Swap provenance + engine number",
      items: [
        { label: "Engine", value: "GM LS3 6.2L (crate, “as-if”)" },
        { label: "Engine #", value: "LS3-9X2-042 (fake)" },
        { label: "Mounts", value: "Custom poly mounts" },
        { label: "Cooling", value: "Aluminum radiator + SPAL fans" },
        { label: "Exhaust", value: 'Dual 2.5" into single 3" (quiet-ish)' },
      ],
    },
    {
      id: "transmission",
      title: "Transmission",
      items: [
        { label: "Gearbox", value: "T56 Magnum (swap)" },
        { label: "Clutch", value: "Twin-disc (streetable)" },
        { label: "Shifter", value: "Short throw + solid bushings" },
      ],
    },
    {
      id: "diff",
      title: "Differential",
      items: [
        { label: "Diff", value: "3.46 LSD (rebuild “as-if”)" },
        { label: "Bushings", value: "Poly" },
        { label: "Axles", value: "Upgraded CVs (mock)" },
      ],
    },
    {
      id: "suspension",
      title: "Suspension",
      items: [
        { label: "Coilovers", value: "Height adjustable (mock)" },
        { label: "Arms", value: "Adjustable front + rear" },
        { label: "Alignment", value: "-3.2° front camber / 0 toe (drift)" },
      ],
    },
    {
      id: "brakes",
      title: "Brakes",
      items: [
        { label: "Front", value: "Big brake kit (mock)" },
        { label: "Rear", value: "Stock calipers + performance pads" },
        { label: "Fluid", value: "High temp DOT4" },
      ],
    },
    {
      id: "wheels_tires",
      title: "Wheels / Tires",
      items: [
        { label: "Wheels", value: "17x9 +35 (square)" },
        { label: "Tires", value: "255/40R17 (front) / 255/40R17 (rear)" },
        {
          label: "Notes",
          value: "Spare drift spares: 6 tires in the van (lol)",
        },
      ],
    },
    {
      id: "ecu_tune",
      title: "ECU / Tune",
      items: [
        { label: "ECU", value: "Standalone (mock)" },
        { label: "Tune", value: "93 octane street tune + “sketch” limiter" },
        { label: "Gauges", value: "CAN dash (mock)" },
      ],
    },
  ],

  serviceHistory: [
    {
      id: "s1",
      date: "2025-09-02",
      mileage: 128340,
      title: "Baseline inspection + fluids",
      notes:
        "Oil, trans, diff, brake fluid. Found minor seep at power steering line.",
    },
    {
      id: "s2",
      date: "2025-09-20",
      mileage: 128910,
      title: "Cooling system refresh",
      notes:
        "New radiator, hoses, fans. Burped system, verified temps in traffic.",
    },
    {
      id: "s3",
      date: "2025-10-11",
      mileage: 129700,
      title: "Alignment + corner balance",
      notes:
        "Set up for drift days but still streetable. Less nervous on highway.",
    },
    {
      id: "s4",
      date: "2025-11-03",
      mileage: 130220,
      title: "Track day: pads + bleed",
      notes:
        "Swapped pads, bled brakes. Added heat shielding near trans tunnel.",
    },
  ],
};

export const mockGarage: CarPassport[] = [mockCar];

export const mockCommunityFeed: CommunityPost[] = [
  {
    id: "p1",
    author: "Avery",
    handle: "@sideways_avery",
    time: "2h",
    text: "Finally got the FrankenVIN passport cleaned up. Love seeing the swap chain documented like a literal vehicle history report—except it’s all the weird parts we did ourselves.",
    carId: mockCar.id,
    likes: 128,
    comments: 17,
  },
  {
    id: "p2",
    author: "Marco",
    handle: "@marco_mech",
    time: "6h",
    text: "Hot take: service timeline > dyno sheet. If you can’t show receipts + notes, it’s just vibes 😅",
    likes: 74,
    comments: 9,
  },
  {
    id: "p3",
    author: "Jules",
    handle: "@rally_jules",
    time: "1d",
    text: "Need this for rally builds: shell from here, motor from there, trans from wherever. FrankenVIN is the vibe.",
    likes: 301,
    comments: 42,
  },
];
