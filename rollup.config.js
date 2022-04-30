import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import builtins from "builtin-modules";

export default {
    plugins: [resolve({ preferBuiltins: true }), commonjs(), json({ compact: true }), typescript()],
    external: [
        ...builtins,
        "ethers",
        "axios",
        "axios-retry",
        /^defender-relay-client(\/.*)?$/,
        /^defender-kvstore-client(\/.*)?$/,
    ],
};
