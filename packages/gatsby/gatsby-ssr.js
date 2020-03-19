import React from "react";

export function onRenderBody({setHeadComponents, setPreBodyComponents, setPostBodyComponents}) {
  console.log(`foo`);

  setHeadComponents([
    <link rel={`stylesheet`} href={`https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css`}/>,
    <script type={`text/javascript`} src={`https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js`}/>,
  ]);

  setPostBodyComponents([
  ]);
}
