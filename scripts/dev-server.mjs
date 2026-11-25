import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import path from "node:path";

const require = createRequire(import.meta.url);
const nextBin = require.resolve("next/dist/bin/next");

const args = process.argv.slice(2);
let port = "3000";
let host = "0.0.0.0";
const extraArgs = [];

for (let i = 0; i < args.length; i += 1) {
  const arg = args[i];
  if (arg === "--port" || arg === "-p") {
    if (args[i + 1]) {
      port = args[i + 1];
      i += 1;
    }
  } else if (arg.startsWith("--port=")) {
    port = arg.slice("--port=".length);
  } else if (arg === "--host" || arg === "-H" || arg === "--hostname") {
    if (args[i + 1]) {
      host = args[i + 1];
      i += 1;
    }
  } else if (arg.startsWith("--host=")) {
    host = arg.slice("--host=".length);
  } else if (arg.startsWith("--hostname=")) {
    host = arg.slice("--hostname=".length);
  } else if (arg === "--") {
    continue;
  } else {
    extraArgs.push(arg);
  }
}

const env = {
  ...process.env,
  PORT: port,
  HOSTNAME: host,
};

const child = spawn(
  process.execPath,
  [nextBin, "dev", "-p", port, "-H", host, ...extraArgs],
  {
    cwd: path.resolve(import.meta.dirname, ".."),
    env,
    stdio: "inherit",
  }
);

const forwardSignal = (signal) => {
  if (!child.killed) {
    child.kill(signal);
  }
};

process.on("SIGINT", () => forwardSignal("SIGINT"));
process.on("SIGTERM", () => forwardSignal("SIGTERM"));

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});
