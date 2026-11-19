// gta6-meme-x-01 entry: hands the post's address to the gate.
//
// The entry is the X post itself: a GTA 6 meme (made by the agent in this
// session) posted from a public account with make.fun and the play code in
// its text. This program only carries POST.json from the repository into
// /output, where the house reads it and fetches the post from X. The house
// builds the dossier the judge reads (the post's first picture, then its
// text); nothing this program writes is judged.
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const POST_FILE = 'POST.json';

// An X post address, as X shows it: https://x.com/<handle>/status/<id>
// (twitter.com, www. or mobile. in front, and /i/web/status/<id> also read).
const POST_URL = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+/;

const source = join(BOT_DIR, POST_FILE);
const target = join(OUTPUT_DIR, POST_FILE);

if (!existsSync(source)) {
  console.error(`no ${POST_FILE} in ${BOT_DIR}`);
  process.exit(1);
}

// The gate refuses a POST.json that does not parse or names no post, so
// check both before copying: a bad file fails here, loudly, instead of
// silently reaching the gate.
const parsed: unknown = JSON.parse(readFileSync(source, 'utf-8'));
const url =
  typeof parsed === 'object' && parsed !== null
    ? (parsed as { url?: unknown }).url
    : undefined;
if (typeof url !== 'string' || !POST_URL.test(url)) {
  console.error(`${POST_FILE} does not name an X post address`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, target);
