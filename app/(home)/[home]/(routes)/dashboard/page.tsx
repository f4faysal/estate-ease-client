import Container from "@/components/ui/container";

const HomeOwnerDashboard = () => {
  return (
    <div className="min-h-screen">
      <Container>
        <h1 className="text-2xl text-center py-5">Home Owner Dashboard</h1>
        <div className="grid grid-cols-6 gap-5">
          <div className="col-span-4 border px-5 h-28 flex flex-col items-center justify-center rounded-lg capitalize">
            <p className="text-lg"> total number of properties you own</p>
            <span className="px-2 py-1 text-xl font-semibold bg-[#2CA9D9]/50 rounded-full">
              10
            </span>
          </div>
          <div className="col-span-4 border px-5 h-28 flex flex-col items-center justify-center rounded-lg capitalize">
            <p className="text-lg">pending requests for your properties</p>
            <span className="px-2 py-1 text-xl font-semibold bg-[#2CA9D9]/50 rounded-full">
              10
            </span>
          </div>
          <div className="col-span-4 border px-5 h-28 flex flex-col items-center justify-center rounded-lg capitalize">
            <p className="text-lg">your properties that are currently rented</p>
            <span className="px-2 py-1 text-xl font-semibold bg-[#2CA9D9]/50 rounded-full">
              10
            </span>
          </div>
          <div className="col-span-4 border px-5 h-28 flex flex-col items-center justify-center rounded-lg capitalize">
            <p className="text-lg">
              your properties that are currently under maintenance
            </p>
            <span className="px-2 py-1 text-xl font-semibold bg-[#2CA9D9]/50 rounded-full">
              10
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeOwnerDashboard;
