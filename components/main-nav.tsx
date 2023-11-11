"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { getUserInfo } from "@/services/auth.service";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const { role }: any = getUserInfo();

  const pathname = usePathname();
  const params = useParams();

  const routesHomeOwner = [
    {
      href: `/home`,
      label: "Home",
      active: pathname === `/home`,
    },
    {
      href: `/home/properties`,
      label: "Properties",
      active: pathname === `/home/properties`,
    },
    {
      href: `/home/tenants`,
      label: "Tenants",
      active: pathname === `/home/tenants`,
    },
    {
      href: `/home/landlords`,
      label: "Landlords",
      active: pathname === `/home/landlords`,
    },
    {
      href: `/home/agents`,
      label: "Agents",
      active: pathname === `/home/agents`,
    },
    {
      href: `/home/transactions`,
      label: "Transactions",
      active: pathname === `/home/transactions`,
    },
    {
      href: `/home/requests`,
      label: "Requests",
      active: pathname === `/home/requests`,
    },
    {
      href: `/home/notifications`,
      label: "Notifications",
      active: pathname === `/home/notifications`,
    },
  ];
  const routesRentUser = [
    {
      href: `/home`,
      label: "Home",
      active: pathname === `/home`,
    },
    {
      href: `/home/rent`,
      label: "Rent",
      active: pathname === `/home/rent`,
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {role === "HomeOwner" ? (
        routesHomeOwner.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              route.active
                ? "text-black dark:text-white"
                : "text-muted-foreground"
            )}
          >
            {route.label}
          </Link>
        ))
      ) : role === "RentUser" ? (
        routesRentUser.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              route.active
                ? "text-black dark:text-white"
                : "text-muted-foreground"
            )}
          >
            {route.label}
          </Link>
        ))
      ) : (
        <></>
      )}
    </nav>
  );
}
