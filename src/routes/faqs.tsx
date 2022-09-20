/** @jsxImportSource @emotion/react */
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { Container } from "./../components/Container";
import { Expandable } from "./../components/Expandable";

interface Question {
  id: number;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [data, setData] = useState<Question[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const URL = " http://localhost:3004/data";
    setLoading(true);
    fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loading && <CircularProgress css={{ maringTop: "50px" }} />}
      {error && (
        <h2 css={{ color: "red" }}>
          Sorry, there was a problem fetching questions
        </h2>
      )}
      <Container>
        {data.map((item: Question) => {
          return (
            <Expandable
              key={item.id}
              title={item.question}
              description={item.answer}
            />
          );
        })}
      </Container>
    </section>
  );
};

export default FAQ;
