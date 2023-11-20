"use client";

import { DataTable } from "@/components/data-table";
import { usePropertysQuery } from "@/redux/api/propertysApi";
import { columns } from "./columns";

const PropertisTable = () => {
  //   const [properties, setProperties] = useState([]);

  const { data, isLoading } = usePropertysQuery({});

  const properties: any = data?.property;

  console.log("properties", properties);

  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <DataTable searchKey="name" columns={columns} data={properties || []} />
    </div>
  );
};

export default PropertisTable;
