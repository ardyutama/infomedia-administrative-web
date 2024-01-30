import { Button } from "@/components/ui/button";
import { NameValueItem } from "@/ui/name-value-item";
import { Trash2 } from "lucide-react";
import { DataTable } from "./table-section/data-table";
import { columns } from "./table-section/columns";
// import { data } from "./mock-data";
import { renderSubComponent } from "./table-section/subcomponent";
import { ButtonNavigation } from "@/ui/button/button";
import { getRupiah } from "@/hooks/getRupiah";
import { format } from "date-fns";


export const LayananDetailsSection = async ({ data, children }: { data: any, children: React.ReactNode }) => {
 
  return (
    <div className="mx-16 my-6 gap-6 flex flex-col">
      <h2 className="text-3xl font-bold">Layanan Details</h2>
      <div className="w-full justify-between flex">
        <div className="flex gap-6">
          <NameValueItem name="Nama Layanan" value={data.service_name} />
          <NameValueItem name="Project Name" value={data.project_name} />
          <NameValueItem name="Segmen" value={data.sso} />
        </div>
        <div className="flex gap-6">
          <NameValueItem name="Revenue" value={getRupiah(data.revenue)} />
          <NameValueItem
            name="Created Date"
            value={format(data.CreatedAt, "P")}
          />
          <NameValueItem
            name="Last Update"
            value={format(data.UpdatedAt, "P")}
          />
          <ButtonNavigation href="/tambah-vm" title="Add VM" />
          <Button className="bg-red-500">
            <Trash2 className="h-4 w-4" />
            <p>Delete</p>
          </Button>
        </div>
      </div>
      <div className="w-full grow">
        {/* <DataTable
          columns={columns}
          data={data}
          getRowCanExpand={() => true}
          renderSubComponent={renderSubComponent}
        /> */}
        {children}
      </div>
    </div>
  );
};
