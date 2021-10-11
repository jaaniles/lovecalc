import React, { FC, useState } from "react";
import CountUp from "react-countup";

import { Button } from "~/atoms/Button";
import { Column } from "~/atoms/Column";
import { PageContent } from "~/atoms/PageContent";
import { Row } from "~/atoms/Row";
import { TextField } from "~/atoms/TextField";
import { H1 } from "~/atoms/typography/H1";
import { H3 } from "~/atoms/typography/H3";
import { calculateLove } from "~/lovecalculator/levenshtein";

export const IndexPage: FC = () => {
  const [name, setName] = useState("");
  const [love, setLove] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    const perc = calculateLove(name, "Fraktio");
    setLove(perc);
  };

  return (
    <PageContent>
      <Row>
        <Column alignCenter>
          <H3>LASKE RAKKAUDEN YHTEENSOPIVUUS FRAKTION KANSSA</H3>
          <TextField onChange={handleChange} id="name" />
          <Button onClick={handleSubmit}>LASKE RAKKAUS</Button>
        </Column>
        <Column>
          <H1>
            <CountUp start={0} end={love} duration={5} />
          </H1>
        </Column>
      </Row>
    </PageContent>
  );
};
