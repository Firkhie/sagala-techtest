import DevelopmentModal from "@/components/modals/development-modal";
import CheckModal from "@/components/modals/check-modal";
import ColumnModal from "@/components/modals/column-modal";
import ComplexModal from "@/components/modals/complex-modal";

export default function ModalProvider() {
  return (
    <>
      <DevelopmentModal />
      <CheckModal />
      <ColumnModal />
      <ComplexModal />
    </>
  );
}
