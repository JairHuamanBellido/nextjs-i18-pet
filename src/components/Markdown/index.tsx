import ReactMarkdown from "markdown-to-jsx";
import CustomLinkComponent from "./components/CustomLinkComponent";

interface IMarkdownComponent {
  textHtml: string;
}
export default function MarkdownComponent({ textHtml }: IMarkdownComponent) {
  return (
    <ReactMarkdown
      options={{
        overrides: {
          a: {
            component: (args) => {
              const label = args.children[0];
              return <CustomLinkComponent label={label} {...args} />;
            },
          },
        },
      }}
    >
      {textHtml}
    </ReactMarkdown>
  );
}
