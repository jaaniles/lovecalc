import React, { FC, useState } from "react";
import CountUp from "react-countup";

import { Column } from "~/atoms/Column";
import { PageContent } from "~/atoms/PageContent";
import { Row } from "~/atoms/Row";
import { TextField } from "~/atoms/TextField";

export const IndexPage: FC = () => {
  const [name, setName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <PageContent>
      <Row>
        <Column alignCenter>
          <p>
            Hei
            {` ${name || "rakas"} `}
            anna nimi
          </p>
          <TextField onChange={handleChange} id="name" />
        </Column>
        <Column>
          <CountUp start={0} end={100} duration={5} />
        </Column>
      </Row>
    </PageContent>
  );
};
