import Head from "next/head"
import { FC, PropsWithChildren } from "react"

interface Props {
    children?: React.ReactNode;
    title?: string
  };

  
export const Layout: FC<PropsWithChildren<Props>> = ({children, title}) => {
  return (
    <>
    <Head>
        <title> {title || 'PokemonApp'} </title>
        <meta name="author" content="Erick Hernández" />
        <meta name="description" content={`Información sobre el Pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

    </Head>

    {/* Navbar */}

    <main>
        {children}
    </main>
    </>
  )
}
