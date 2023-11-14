import Container from "@/components/ui/container";
import { DashboardMainNav } from "./dashboard-main-nav";

const DashboardNav = () => {
  return (
    <nav className="border-b bg-[#f0f3f7]">
      <Container>
        <div className="flex h-12 items-center ">
          <DashboardMainNav className="" />
        </div>
      </Container>
    </nav>
  );
};

export default DashboardNav;
