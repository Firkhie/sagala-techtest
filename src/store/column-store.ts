import { create } from "zustand";

const contents = [
  {
    id: "1255d451-7f77-45ba-adf2-5183a38862f9",
    name: "Marketplace",
    progress: 75.5,
    quantity: 2458,
    date: "12.Jan.2021",
  },
  {
    id: "5203d3ed-44e7-4228-9067-6ff30a3a9250",
    name: "Venus DB PRO",
    progress: 35.4,
    quantity: 1458,
    date: "21.Feb.2021",
  },
  {
    id: "a7b3a948-a28c-418d-94d9-34c436355a70",
    name: "Venus DS",
    progress: 25,
    quantity: 1024,
    date: "13.Mar.2021",
  },
  {
    id: "0b0c0ca7-b439-401d-86f3-52b26ad73406",
    name: "Venus 3D Asset",
    progress: 100,
    quantity: 858,
    date: "24.Jan.2021",
  },
];

interface ColumnStoreProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;

  data: {
    id: string;
    name: string;
    progress: number;
    quantity: number;
    date: string;
  }[];
  addData: (newData: {
    id: string;
    name: string;
    progress: number;
    quantity: number;
    date: string;
  }) => void;
  delData: (id: string) => void;
}

export const useColumnStore = create<ColumnStoreProps>((set) => ({
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
