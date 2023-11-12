import HomeBanner from "@/components/homePage/HomeBanner";
import HomeBuying from "@/components/homePage/HomeBuying";
import Container from "@/components/ui/container";

const HomePage = () => {
  return (
    <section>
      <Container>
        <HomeBanner />
        <HomeBuying />
      </Container>
    </section>
  );
};

export default HomePage;
