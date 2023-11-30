import { FC } from "react";
import { useActions } from "../../hooks/useActions";
import { useShowcase } from "../../hooks/useShowCase";
import HomeLayout from "./ui/HomeLayout/HomeLayout";

const Home: FC = () => {
  const { showcase } = useShowcase();

  const mass = [...showcase];

  const { addToMarket } = useActions();

  return <HomeLayout massive={mass} addToMarket={addToMarket} />;
};

export default Home;
