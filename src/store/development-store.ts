import { create } from "zustand";

const contents = [
  {
    id: "22fab469-8cf0-4de4-8a4c-b3aff5483af2",
    name: "Market",
    images: [
      "/tech-logos/apple-logo.png",
      "/tech-logos/android.png",
      "/tech-logos/windows.png",
    ],
    date: "12.Jan.2021",
    progress: 75.5,
  },
  {
    id: "9892a8fe-af1a-442f-8e52-baa1722908e9",
    name: "Venus DB PRO",
    images: ["/tech-logos/apple-logo.png"],
    date: "21.Feb.2021",
    progress: 35.4,
  },
  {
    id: "bb90bc75-7873-4ca4-bbac-7565edc86420",
    name: "Venus DS",
    images: ["/tech-logos/apple-logo.png", "/tech-logos/windows.png"],
    date: "13.Mar.2021",
    progress: 25,
  },
  {
    id: "bdc465b1-10c6-4e11-a6f9-a7e4d899108e",
    name: "Venus 3D Asset",
    images: [
      "/tech-logos/apple-logo.png",
      "/tech-logos/android.png",
      "/tech-logos/windows.png",
    ],
    date: "24.Jan.2021",
    progress: 100,
  },
  {
    id: "3c3c102a-991b-4bb6-bf5f-43a29a74ad60",
    name: "Marketplace",
    images: ["/tech-logos/apple-logo.png", "/tech-logos/windows.png"],
    date: "24.Oct.2022",
    progress: 75.5,
  },
];

interface DevelopmentStoreProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;

  data: {
    id: string;
    name: string;
    images: string[];
    date: string;
    progress: number;
  }[];
  addData: (newData: {
    id: string;
    name: string;
    images: string[];
    date: string;
    progress: number;
  }) => void;
  delData: (id: string) => void;
}

export const useDevelopmentStore = create<DevelopmentStoreProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),

  data: contents,
  addData: (newData) =>
    set((state) => ({
      data: [...state.data, newData],
    })),
  delData: (id) =>
    set((state) => ({
      data: state.data.filter((item) => item.id !== id),
    })),
}));
