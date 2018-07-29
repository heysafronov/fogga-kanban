const fs = require("fs");
const path = require("path");
const minimist = require("minimist");
const args = minimist(process.argv.slice(2));

const componentTemplate = `
import React from "react";

class ${args.myClass} extends React.PureComponent {
  state = {};

  render() {
    const {} = this.props;
    return (
      <div className="">
      
      </div>
    );
  }
}

export default ${args.myClass};
`;

fs.mkdirSync(path.resolve(__dirname, "..", "src", "components", args.myClass));

fs.writeFileSync(
  path.resolve(
    __dirname,
    "..",
    "src",
    "components",
    args.myClass,
    `${args.myClass}.jsx`
  ),
  componentTemplate,
  { flag: "w+" }
);

fs.writeFileSync(
  path.resolve(
    __dirname,
    "..",
    "src",
    "components",
    args.myClass,
    `${args.myClass}.scss`
  ),
  `.${args.myClass} {
  
  }
  `,
  { flag: "w+" }
);
