import React from "react";
import Head from "next/head";
import { FunctionComponent } from "react";

const HeadText: FunctionComponent<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};

export default HeadText;
