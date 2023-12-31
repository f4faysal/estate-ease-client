import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function DashboardMainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  const routesDashboard = [
    {
      href: `/en/dashboard`,
      label: "Account",
      active: pathname === `/en/dashboard`,
    },
    {
      href: `/en/dashboard/my-properties`,
      label: "My Property",
      active: pathname === `/en/dashboard/my-properties`,
    },
    {
      href: `/en/dashboard/add-property`,
      label: "Add Property",
      active: pathname === `/en/dashboard/add-property`,
    },
    {
      href: `/en/dashboard`,
      label: "My Favorites",
      active: pathname === `/en/dashboard/my-favorites`,
    },
    {
      href: `/en/dashboard`,
      label: "Notification",
      active: pathname === `/en/dashboard/notification`,
    },
    {
      href: `/en/dashboard`,
      label: "Settings",
      active: pathname === `/en/dashboard/settings`,
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {routesDashboard.map((route) => (
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
      ))}
    </nav>
  );
}
