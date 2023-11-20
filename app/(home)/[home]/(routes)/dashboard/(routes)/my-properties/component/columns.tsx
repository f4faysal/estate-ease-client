"use client";

import { ColumnDef } from "@tanstack/react-table";
import dayjs from "dayjs";
import { CellAction } from "./cell-action";

export type AdminColumn = {
  id: string;
  name: string;
  email: string;
  dateOfBirth: string;
  contactNo: string;
  emergencyNo: string;
  gender: string;
  designation: string;
  createdAt: string;
};

export const columns: ColumnDef<AdminColumn>[] = [
  //   {
  //     accessorKey: "id",
  //     header: ({ column }) => (
  //       <div
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //         className="flex items-center cursor-pointer"
  //       >
  //         ID
  //         {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
  //       </div>
  //     ),
  //     cell: ({ row }) => <div className="text-red-600">{row.original.id}</div>,
  //   },

  {
    accessorKey: "homeStatus",
    header: ({ column }) => <div className="font-bold">Status</div>,
    cell: ({ row }: any) => (
      <div>
        {row.original.homeStatus === "available" ? (
          <div className="text-green-600">Available</div>
        ) : row.original.homeStatus === "rentedOut" ? (
          <div className="text-red-600">Rented Out</div>
        ) : row.original.homeStatus === "rentedOutApproval" ? (
          <div className="text-yellow-600">Rented Out Approval</div>
        ) : row.original.homeStatus === "pending" ? (
          <div className="text-yellow-600">Pending</div>
        ) : row.original.homeStatus === "unavailableApproval" ? (
          <div className="text-yellow-600">Unavailable Approval</div>
        ) : (
          <div className="text-red-600">Unavailable</div>
        )}
      </div>
    ),
  },
  {
    accessorKey: "home.title",
    header: "Title",
    cell: ({ row }: any) => <p>{row.original.home.title.slice(0, 20)} ..</p>,
  },
  {
    accessorKey: "home.price",
    header: "Price",
  },
  {
    accessorKey: "home.offerPrice",
    header: "Offer Price",
  },
  {
    accessorKey: "home.residential",
    header: "Residential",
  },
  {
    accessorKey: "home.homeSize",
    header: "Size",
  },

  {
    accessorKey: "createdAt",
    header: "Created Date",
    cell: ({ row }) => (
      <div>
        {/* {new Date(row.original.createdAt).toLocaleDateString()} */}
        {dayjs(row.original.createdAt).format("D MMM YYYY hh:mmA")}
      </div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
