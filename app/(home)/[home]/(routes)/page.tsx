import HomeBanner from "@/components/homePage/HomeBanner";
import HomeBuying from "@/components/homePage/HomeBuying";
import RentalJureny from "@/components/homePage/RentalJureny";
import Container from "@/components/ui/container";

const HomePage = () => {
  return (
    <section>
      <Container>
        <HomeBanner />
        <HomeBuying />
        <RentalJureny />
      </Container>
    </section>
  );
};

export default HomePage;
