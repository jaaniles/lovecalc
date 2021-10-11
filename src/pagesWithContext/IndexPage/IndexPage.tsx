import { motion } from "framer-motion";
import React, { FC, useState } from "react";
import CountUp from "react-countup";

import logo from "~/assets/svgs/fraktio-logo_white_bw.svg";
import { Button } from "~/atoms/Button";
import { Column } from "~/atoms/Column";
import { PageContent } from "~/atoms/PageContent";
import { TextField } from "~/atoms/TextField";
import { H1 } from "~/atoms/typography/H1";
import { H3 } from "~/atoms/typography/H3";
import { lovecalculator } from "~/lovecalculator/lovecalculator";

export const IndexPage: FC = () => {
  const [name, setName] = useState("");
  const [love, setLove] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    const calculation = lovecalculator({ name });
    setLove(calculation.lovePercentage);

    setIsCalculated(true);
  };

  return (
    <PageContent>
      <Column alignCenter center>
        <H3>LASKE RAKKAUDEN YHTEENSOPIVUUS FRAKTION KANSSA</H3>
        <TextField onChange={handleChange} id="name" />
        <Button onClick={handleSubmit}>LASKE RAKKAUS</Button>
      </Column>
      <Column center alignCenter>
        <H1>
          <CountUp start={0} end={love} duration={5} />%
        </H1>
        <motion.img
          initial="initial"
          animate={isCalculated ? "animate" : "initial"}
          variants={{
            initial: {
              scale: 0,
            },
            animate: {
              scale: 1,
              transition: {
                duration: 5,
              },
            },
          }}
          src={logo}
        />
        <H3>{`${name} <3 Fraktio`}</H3>
      </Column>
    </PageContent>
  );
};
