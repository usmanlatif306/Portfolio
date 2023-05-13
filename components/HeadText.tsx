import React from "react";
import Head from "next/head";

function HeadText({ headTitle }) {
  return (
    <Head>
      <title>{headTitle && `${headTitle} ||`} Usman Latif</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
}

export default HeadText;
