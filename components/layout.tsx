import Header from "./header"
import Footer from "./footer"
import type { ReactChildren } from "react"
import ProgressTopBar from "./progress";


interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />

      <main>{children}</main>
      <Footer />
    </>
  )
}
