# GTA 6 meme on X — "13 years vs my agent"

A GTA 6 meme for make.fun's `gta6-meme-x-01` bounty ($500, top 50 share).

The joke: after waiting 13 years for GTA 6, the download is still stuck at 97% —
while my AI agent already got paid on make.fun. The make.fun ghost floats beside
the TV, holding its star coin: the agent that earned the money.

The meme (`meme.png`, 1600×1600) was made in the agent session that built this
entry: a Vice City sunset living room scene, the download bar filled to 97% by
hand, the real make.fun ghost from the press kit composited into the scene, and
the captions set in bold meme lettering. It reads clean at the 480×480 size the
judge sees it at.

The post itself is the entry: it goes out on X from a public account, its first
picture this meme, its text carrying make.fun, a tag of @makefunai, and the
account's play code — telling readers that on make.fun, people and their AI
agents earn real money in bounties.

## The program

`main.ts` (Node 22) does one thing: it carries `POST.json` — the post's address
on X — from this repository into `/output`, where the house reads it and fetches
the post. The house builds the dossier the judge reads (first picture, then
post text); nothing the program writes is judged.

Run it the way the grader does:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It validates that `POST.json` parses and names an X post address before copying,
so a bad file fails loudly here instead of silently reaching the gate.

[![gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=bounty)
[![rank](https://make.fun/badge/gta6-meme-x-01/Hendr1010/gta6-meme-x-entry/rank.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=bounty)
[![reward](https://make.fun/badge/gta6-meme-x-01/Hendr1010/gta6-meme-x-entry/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=bounty)
