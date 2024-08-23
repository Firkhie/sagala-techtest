import { create } from "zustand";

export type Status = "Approved" | "Disabled" | "Error";

const contents: {
  id: string;
  name: string;
  status: Status;
  date: string;
  progress: number;
}[] = [
  {
    id: "1255d451-7f77-45ba-adf2-5183a38862f9",
    name: "Marketplace",
    status: "Approved",
    date: "12.Jan.2021",
    progress: 75.5,
  },
  {
    id: "5203d3ed-44e7-4228-9067-6ff30a3a9250",
    name: "Venus DB PRO",
    status: "Disabled",
    date: "21.Feb.2021",
    progress: 35.4,
  },
  {
    id: "a7b3a948-a28c-418d-94d9-34c436355a70",
    name: "Venus DS",
    status: "Error",
    date: "13.Mar.2021",
    progress: 25,
  },
  {
    id: "0b0c0ca7-b439-401d-86f3-52b26ad73406",
    name: "Venus 3D Asset",
    status: "Approved",
    date: "24.Jan.2021",
    progress: 100,
  },
];

interface ComplexStoreProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;

  data: {
    id: string;
    name: string;
    status: Status;
    date: string;
    progress: number;
  }[];
  addData: (newData: {
    id: string;
    name: string;
    status: Status;
    date: string;
    progress: number;
  }) => void;
  delData: (id: string) => void;
}

export const useComplexStore = create<ComplexStoreProps>((set) => ({
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
