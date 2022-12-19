import Link from "next/link";
import React from "react";
import EntryHyperlink from "./entry-hyperlink";

const Paragraph = ({ content, node }) => {
  return (
    <p>
      {node.content?.map((nodeData) => {
        if (nodeData?.nodeType === "entry-hyperlink") {
          return (
            <EntryHyperlink
              entryId={nodeData?.data?.target?.sys?.id}
              content={nodeData}
              key={nodeData?.data?.target?.sys?.id}
            />
          );
        }
        return nodeData?.value;
      })}
    </p>
  );
};

export default Paragraph;
