/** @jsxImportSource @emotion/react */

function showCurrentTime() {
  var today = new Date();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return time;
}

export const Component = () => {
  return (
    <section
      css={{
        display: "flex",
        justifyContent: "center",
        marginTop: "5%",
        fontSize: "50px",
      }}
    >
      {showCurrentTime()}
    </section>
  );
};
