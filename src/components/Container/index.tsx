/** @jsxImportSource @emotion/react */

interface ContainerProps {
  children: any;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <section
      css={{
        border: "1px solid #d3d3d3",
        width: "70vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "5vh",
        padding: "20px 20px",
      }}
    >
      <header>
        <h1>Frequently Asked Questions</h1>
      </header>
      <article>{children}</article>
    </section>
  );
};
