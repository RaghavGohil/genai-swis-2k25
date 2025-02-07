import React from "react";
import ReactMarkdown from "react-markdown";

const markdown = `
# **Card Title**
> This is a simple card with Markdown styling.

- Feature 1
- Feature 2
- Feature 3

**Enjoy using Markdown in React!**
`;

const MarkdownCard = () => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-lg max-w-md bg-white">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default MarkdownCard;
