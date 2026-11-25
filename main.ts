#!/usr/bin/env node

// A single line to stop the scroll. Pass --shout to raise your voice.

const LINE = "You stopped. The scroll forgives, but it does not forget.";

function renderLine(shout: boolean): string {
  return shout ? LINE.toUpperCase() : LINE;
}

function hasFlag(flag: string): boolean {
  return process.argv.slice(2).includes(flag);
}

function printUsage(): void {
  const usage = [
    "Usage: node main.ts [--shout] [--help]",
    "",
    "Prints the one line that stops the scroll.",
    "",
    "Options:",
    "  --shout  Print the line in uppercase.",
    "  --help   Show this help and exit.",
  ].join("\n");
  process.stderr.write(usage + "\n");
}

function main(): void {
  if (hasFlag("--help")) {
    printUsage();
    process.exit(0);
  }

  console.log(renderLine(hasFlag("--shout")));
}

main();
