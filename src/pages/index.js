import React from "react";

import Layout from "../components/layout";
import SEO from "../components/SEO/seo";

import Nav from "../components/nav";
import Header from "../components/header";
import Cta from "../components/cta";
import About from "../components/about";
import Speakers from "../components/speakers";
import Sponsors from "../components/sponsors";
import Gallery from "../components/gallery";
import Footer from "../components/footer";

function IndexPage() {
  return (
    <Layout>
      <SEO keywords={["Open Source Community Africa", "OSCA", "Open Source Festival", "OSF"]} title="Home" />
      <Nav />
      <Header />
      <Cta />
      <About />
      <Speakers />
      <Sponsors />
      <Gallery />
      <Footer />
    </Layout>
  );
}

export default IndexPage;
