import { create } from "zustand";

const contents = [
  {
    id: "1255d451-7f77-45ba-adf2-5183a38862f9",
    check: false,
    name: "Marketplace",
    progress: 75.5,
    quantity: 2458,
    date: "12.Jan.2021",
  },
  {
    id: "5203d3ed-44e7-4228-9067-6ff30a3a9250",
    check: true,
    name: "Venus DB PRO",
    progress: 35.4,
    quantity: 1458,
    date: "21.Feb.2021",
  },
  {
    id: "a7b3a948-a28c-418d-94d9-34c436355a70",
    check: false,
    name: "Venus DS",
    progress: 25,
    quantity: 1024,
    date: "13.Mar.2021",
  },
  {
    id: "0b0c0ca7-b439-401d-86f3-52b26ad73406",
    check: false,
    name: "Venus 3D Asset",
    progress: 100,
    quantity: 858,
    date: "24.Jan.2021",
  },
  {
    id: "6e6a4a4b-a6e8-4dd6-974e-a4b6a6a326fc",
    check: false,
    name: "Marketplace",
    progress: 75.5,
    quantity: 2458,
    date: "12.Jan.2021",
  },
  {
    id: "df51499a-e3b2-49e3-b857-6045b107fe6b",
    check: true,
    name: "Venus DB PRO",
    progress: 35.4,
    quantity: 1458,
    date: "21.Feb.2021",
  },
  {
    id: "52c41a6a-ae7a-4a77-8703-b27c053c9cef",
    check: false,
    name: "Venus DS",
    progress: 25,
    quantity: 1024,
    date: "13.Mar.2021",
  },
  {
    id: "4b676edd-cdc6-43e4-b522-68f41115e3b6",
    check: false,
    name: "Venus 3D Asset",
    progress: 100,
    quantity: 858,
    date: "24.Jan.2021",
  },
];

interface CheckStoreProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;

  data: {
    id: string;
    check: boolean;
    name: string;
    progress: number;
    quantity: number;
    date: string;
  }[];
  addData: (newData: {
    id: string;
    check: boolean;
    name: string;
    progress: number;
    quantity: number;
    date: string;
  }) => void;
  delData: (id: string) => void;
  checkData: (id: string) => void;
}

export const useCheckStore = create<CheckStoreProps>((set) => ({
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
  checkData: (id) =>
    set((state) => ({
      data: state.data.map((item) =>
        item.id === id ? { ...item, check: !item.check } : item,
      ),
    })),
}));
