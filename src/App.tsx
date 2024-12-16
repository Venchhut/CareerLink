import { Container } from "@mantine/core";
import HeroSection from "./components/HeroSection";
import JobList from "./components/JobList";

const App = () => {
  return (
    <Container size={"xl"}>
      <HeroSection />
      <JobList />
    </Container>
  );
};

export default App;
