import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import markdownStyles from "./markdown-styles.module.css";
import Paragraph from "./paragraph";
import RichTextAsset from "./rich-text-asset";
import UnorderedList from "./unordered-list";

const customMarkdownOptions = (content) => {
  return {
    renderMark: {
      [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    },
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <RichTextAsset
          id={node.data.target.sys.id}
          assets={content.links.assets.block}
        />
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <Paragraph content={children} />;
      },
      [BLOCKS.UL_LIST]: (node, children) => {
        return <UnorderedList content={children} />;
      },
    },
  };
};

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl">
      <div className={markdownStyles["markdown"]}>
        {documentToReactComponents(
          content.json,
          customMarkdownOptions(content)
        )}
      </div>
    </div>
  );
}
