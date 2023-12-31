"use client";

import Loading from "@/app/loading";
import { DataTable } from "@/components/data-table";
import { usePropertysQuery } from "@/redux/api/propertysApi";
import { getUserInfo } from "@/services/auth.service";
import { columns } from "./columns";

const PropertisTable = () => {
  const { userId }: any = getUserInfo();
  //   const [properties, setProperties] = useState([]);

  const { data, isLoading } = usePropertysQuery({
    page: 1,
    limit: 10000,
  });

  const { property, meta }: any = data || [];

  const filteredProperty = property?.filter(
    (item: any) => item?.homeOwnerId?._id === userId
  );

  console.log("property", filteredProperty);

  const properties = filteredProperty?.map((item: any) => ({
    id: item?.id,
    status: item?.homeStatus,
    title: item?.home?.title,
    price: item?.home?.price,
    offerPrice: item?.home?.offerPrice,
    residential: item?.home?.residential,
    homeSize: item?.home?.homeSize,
    createdAt: item?.createdAt,
  }));

  if (isLoading) return <Loading />;

  return (
    <div>
      <DataTable searchKey="title" columns={columns} data={properties || []} />
    </div>
  );
};

export default PropertisTable;
