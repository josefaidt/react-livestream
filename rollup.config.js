import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const config = {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.js",
      format: "cjs"
    },
    {
      file: "dist/index.es.js",
      format: "esm"
    }
  ],
  plugins: [
    resolve(),
    // babel()
    babel({
      exclude: "node_modules/**"
    }),
    commonjs(),
  ],
  external: ["@emotion/**"],
  watch: {
    include: "src/**",
    exclude: "node_modules/**"
  }
};

export default config;
