import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1rem;
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const IssueTitle = styled.h2`
  color: #2a5d84;
`;

const PapersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Paper = styled.article`
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 6px;
  background-color: #fafafa;
`;

const PaperTitle = styled.h3`
  margin-top: 0;
`;

const PaperLink = styled.a`
  color: #0077cc;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const CurrentIssue = () => {
  const papers = [
    {
      title: "Exploring Quantum Computing",
      authors: "Author A, Author B",
      abstract: "This paper explores the foundational concepts of quantum computing and its potential applications.",
      link: "/papers/quantum-computing.pdf"
    },
    {
      title: "AI in Healthcare: A Revolutionary Approach",
      authors: "Author C, Author D",
      abstract: "The paper investigates the role of Artificial Intelligence in modern healthcare systems.",
      link: "/papers/ai-healthcare.pdf"
    },
    {
      title: "Advancements in Renewable Energy",
      authors: "Author E, Author F",
      abstract: "In this research, we examine the latest advancements in renewable energy technologies.",
      link: "/papers/renewable-energy.pdf"
    }
  ];

  return (
    <Container>
      <Header>
        <h1>Current Issue</h1>
        <p>International Journal of Research in Engineering Technology and Applications (IJRETA)</p>
      </Header>

      <section>
        <IssueTitle>Volume 10, Issue 2 - April 2025</IssueTitle>
        <p>Explore the latest research articles published in this issue.</p>

        <PapersList>
          {papers.map((paper, index) => (
            <Paper key={index}>
              <PaperTitle>{paper.title}</PaperTitle>
              <p><strong>Authors:</strong> {paper.authors}</p>
              <p><strong>Abstract:</strong> {paper.abstract}</p>
              <PaperLink href={paper.link} target="_blank" rel="noopener noreferrer">Download PDF</PaperLink>
            </Paper>
          ))}
        </PapersList>
      </section>
    </Container>
  );
};

export default CurrentIssue;
