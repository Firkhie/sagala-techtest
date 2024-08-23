import CheckTable from "@/components/tables/check-table";
import ColumnTable from "@/components/tables/column-table";
import ComplexTable from "@/components/tables/complex-table";
import DevelopmentTable from "@/components/tables/development-table";

export default function DataTablesPage() {
  return (
    <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-2">
      <DevelopmentTable />
      <CheckTable />
      <ColumnTable />
      <ComplexTable />
    </div>
  );
}
