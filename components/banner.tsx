"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { AlertTriangle, CheckCircleIcon } from "lucide-react";

import Loading from "@/app/loading";
import { cn } from "@/lib/utils";
import { useMyProfileQuery } from "@/redux/api/authApi";
import Container from "./ui/container";

const bannerVariants = cva(
  "border text-center p-4 text-sm flex items-center w-full",
  {
    variants: {
      variant: {
        warning: "bg-yellow-200/80 border-yellow-30 text-primary",
        success: "bg-emerald-700 border-emerald-800 text-secondary",
      },
    },
    defaultVariants: {
      variant: "warning",
    },
  }
);

interface BannerProps extends VariantProps<typeof bannerVariants> {
  label: string;
}

const iconMap = {
  warning: AlertTriangle,
  success: CheckCircleIcon,
};

export const Banner = ({ label, variant }: BannerProps) => {
  const Icon = iconMap[variant || "warning"];

  const { data, isLoading } = useMyProfileQuery({});

  const isVerified = data?.nidVerified ? "hidden" : "block";

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={cn(bannerVariants({ variant }), isVerified)}>
      <Container>
        <div className="flex gap-2">
          <Icon className="h-4 w-4 mr-2" />
          {label}
        </div>
      </Container>
    </div>
  );
};
