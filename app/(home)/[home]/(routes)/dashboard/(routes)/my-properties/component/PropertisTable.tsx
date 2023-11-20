"use client";

import { DataTable } from "@/components/data-table";
import { usePropertysQuery } from "@/redux/api/propertysApi";
import { columns } from "./columns";

const PropertisTable = () => {
  //   const [properties, setProperties] = useState([]);

  const { data, isLoading } = usePropertysQuery({});

  const { property, meta }: any = data || [];

  const properties = property?.map((item: any) => ({
    status: item.homeStatus,
    title: item.home.title,
    price: item.home.price,
    offerPrice: item.home.offerPrice,
    residential: item.home.residential,
    homeSize: item.home.homeSize,
    createdAt: item.createdAt,
  }));

  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <DataTable searchKey="title" columns={columns} data={properties || []} />
    </div>
  );
};

export default PropertisTable;
