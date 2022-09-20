/** @jsxImportSource @emotion/react */

import { Link } from "react-router-dom";

const App = () => {
  return (
    <section
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <header>
        <h1>Sean's Components Practise</h1>
      </header>
      <section
        css={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Link to="/faqs">FAQ</Link>
        <Link to="/imageCarousel">Image Carousel</Link>
        <Link to="/tree">Tree Visulisation component</Link>
        <Link to="/interview">Atlassian Interview Route</Link>
      </section>
    </section>
  );
};

export default App;
