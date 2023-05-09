import Link from "next/link";
import styled from "styled-components";

const CardCustom = styled.div`
  background-color: red;
  min-height: 25vh;
  border-radius: 1em;
  &:hover {
    background-color: black;
  }
`;

const Content = styled.div`
  color: white;
  padding: 0.7em;
  justify-content: left;
  word-break: break-word;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
`;
const Title = styled.p`
  font-size: 2em;
`;

export const CardButton = ({ data }: any) => {
  return (
    <Link href="">
      <CardCustom /*onClick={() => alert("aaaaaaa")}*/>
        <Content>
          <Title>{data.title}</Title>
        </Content>
      </CardCustom>
    </Link>
  );
};
