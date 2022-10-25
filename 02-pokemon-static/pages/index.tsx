import { Button } from "@nextui-org/react";
import { NextPage } from "next";
import { Layout } from '../components/layouts';

const HomePage: NextPage = () => {
  return (
    
    <Layout title="Listado de pokemons">
    <Button color="gradient">Holis</Button>
    </Layout>
    
  );
};

export default HomePage;
