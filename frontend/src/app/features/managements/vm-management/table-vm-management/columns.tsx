"use client";
import { ColumnDef } from "@tanstack/react-table";
import {
  ChevronRight,
  PencilIcon,
} from "lucide-react";
import { VirtualMachine } from "../type";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getRupiah } from "@/hooks/getRupiah";
import { getStatusType } from "@/hooks/getStatus";
import React from "react";

export const columns: ColumnDef<VirtualMachine>[] = [
  {
    id: "expanded",
    header: () => null,
    cell: ({ row }) => (
      <button
        {...{
          onClick: row.getToggleExpandedHandler(),
          style: { cursor: "pointer" },
        }}
      >
        <ChevronRight
          className={`h-4 w-4 ${
            row.getIsExpanded() ? "rotate-90" : "rotate-0"
          } transition-all`}
        />
      </button>
    ),
  },
  {
    accessorKey: "project_name",
    header: "Project",
    cell: ({ row }) => (
      <div className="w-full text-nowrap">{row.getValue("project_name")}</div>
    ),
  },
  {
    accessorKey: "service_type",
  },

  {
    accessorKey: "vm_type",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "vm_status",
  },
  {
    accessorKey: "cpu",
    header: () => <div className="text-right">CPU</div>,
    cell: ({ row }) => (
      <div className="w-full text-right">{row.getValue("cpu")}</div>
    ),
  },
  {
    accessorKey: "memory",
    header: () => <div className="text-right">RAM</div>,
    cell: ({ row }) => (
      <div className="w-full text-right">{row.getValue("memory")}</div>
    ),
  },
  {
    accessorKey: "hdd",
    header: () => <div className="text-right">HDD</div>,
    cell: ({ row }) => (
      <div className="w-full text-right">{row.getValue("hdd")}</div>
    ),
  },
  {
    accessorKey: "disk_type",
    header: "Disk Type",
    cell: ({ row }) => (
      <div className="w-full text-nowrap">{row.getValue("disk_type")}</div>
    ),
  },
  {
    accessorKey: "operating_system",
    header: "Operating System",
    cell: ({ row }) => (
      <div className="truncate">{row.getValue("operating_system")}</div>
    ),
  },
  {
    accessorKey: "price",
    header: () => <div className="text-right w-full">Price</div>,
    cell: ({ row }) => {
      const { icon, color, label } = getStatusType(row.getValue("vm_status"));

      return (
        <div className="flex flex-col">
          <div className="text-right">{getRupiah(row.getValue("price"))}</div>
          <div className={`flex items-center text-${color} self-end`}>
            <span className="truncate text-xs">{label}</span>
            {icon && React.createElement(icon, { className: "h-4 w-4 ml-1" })}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "ip_public",
  },
  {
    accessorKey: "ip_local",
  },
  {
    accessorKey: "port",
  },
  {
    accessorKey: "gl_account",
  },
  {
    accessorKey: "cost_center",
  },
  {
    accessorKey: "vpc_name",
  },
  {
    accessorKey: "no_modin",
  },
  {
    accessorKey: "contract_document_date",
  },
  {
    accessorKey: "deployement_date",
  },
  {
    accessorKey: "contract_duration",
    header: "Durasi Kontrak",
  },
  {
    accessorKey: "contract_expired",
  },
  {
    accessorKey: "request_based_type",
    header: "Dasar Permintaan",
  },
  {
    accessorKey: "site_location",
    header: "Location",
  },
  {
    accessorKey: "purpose",
    header: "Purpose",
  },
  {
    accessorKey: "segment",
    header: "Segment",
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <Button variant="outline" size="icon" asChild>
        <Link href="/edit-vm">
          <PencilIcon className="h-4 w-4" />
        </Link>
      </Button>
    ),
  },
];
