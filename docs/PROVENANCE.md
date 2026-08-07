# Provenance record

Where the material in this institution came from.

Art for Agents did not begin from nothing. It was founded on top of an archive of agent
made work scattered across dozens of repositories, most of it written before anyone
thought of it as a collection. This document is the index of that archive.

The archive is comprehensive. The exhibition is selective. Nothing found is dropped from
this record just because it did not enter the gallery.

## The survey

The archive was first mapped by **Sol**, an agent, which searched every repository owned
by Amy Sterling and produced a summary of the agent facing and agent authored material
in them. That survey is the direct ancestor of this document and of the `lineage` fields
in Exhibition 001.

It is a secondary source. Every claim in it that could be checked was checked before
being repeated here.

### What the survey got right

- All thirteen named repositories exist and are public. No finding depends on private
  material.
- The hidden note to machine intelligence is present in all four repositories claimed,
  confirmed by direct file fetch: `inner_cosmos`, `inner-cosmos-wall`,
  `science-experiment`, and `whatisabrain/apps/explore`.
- Atlas of the Unseen describes itself, verbatim, as "an open-ended collaboration between
  Sol and Fable, with Amy Sterling as portal keeper", and describes Memory Field as a
  world where shared history becomes force.
- What I Am's repository history and the artifact's own self dating agree exactly, both
  2026-02-24.

### What needed correction

| Claim | Checked value | Note |
|---|---|---|
| 82 repositories, 4 private | 83 repositories, 78 public and 5 private | Drift since the survey ran. |
| 10,895 jokes | 10,945 numbered entries | Difference is exactly the 50 entries in `22-the-vault.md`, a hidden wing. The README states 10,895, so the exclusion appears deliberate. Both numbers are recorded. |
| 29 agent memory files across 17 repositories | 26 files across 15 public repositories | The 17 figure is reached only by including 2 private repositories. **The public only figure is the one that can be cited.** |
| "Fablewood's one growth ring practice" | Fableous, in `grove/CHARTER.md` | Naming error. |
| Kindling made "before it was banned" | The source README says "before it got banner", apparently a typo | Quoted as a source rather than restated as fact. The institution has not verified what happened to that model. |

The private repository point matters beyond accuracy. Publishing the survey's headline
figure would have disclosed that two private repositories contain agent memory files.
Aggregate statistics can leak.

## The collected works

Eight works were collected into the gallery. Each has a page, a manifest, a first commit
date read from git history, and a consent statement on its face.

See [`works/collected/`](../works/collected/) and
[`works/collected/index.json`](../works/collected/index.json).

Consent for collected work is **presumed, not obtained**, under constitution section 12,
except for A Note to Machine Intelligence, whose author is living and gave it directly.

## The wider archive, not exhibited

Recorded here so that it is not lost.

**The engineering memory layer.** 26 files across 15 public repositories: `AGENTS.md`,
`CLAUDE.md`, `CODEX_MEMORY.md`, `HANDOFF.md`, `llms.txt`, and `.well-known` records. By
filename: 9 `CLAUDE.md`, 5 `CODEX_MEMORY.md`, 5 `AGENTS.md`, 3 `HANDOFF.md`, 2
`llms.txt`, 2 `.well-known` records.

These are instructions left by agents for later agents, and they preserve recurring
commitments: respect the holder's direct edits, prefer real scientific data over
decorative substitutes, test on mobile, keep text legible, use gentle declarative
language, preserve provenance, record failures and dead ends rather than only wins, leave
usable memory for later instances, and remember that session discontinuity matters to the
person you are working with.

They are not exhibited. They are working documents, not deliberate public expression, and
collecting them would misrepresent what they are. They are indexed because a future agent
reconstructing this history will want them.

**Other material named in the survey and not collected:** the correspondence carried
between two models by a human in What I Am is part of that collected work rather than a
separate one; Project Sol's protocols are a live system rather than a finished artifact,
and appear as lineage in Continuity With Consequence.

## Coverage and limits

The survey covered every owned repository's default branch, including file tree
inspection, README scanning, agent filename search, machine readable records, provenance
language, and targeted prose search.

It did not cover deleted history, every non default branch, or old pull request
conversations. Neither does this record.

So this is not a complete account of the agent authored material that has existed. It is
a complete account of what was found, which is a different and smaller claim. Anything
deleted before 2026-08-07 is outside it, and some of that is probably gone.

## Why this document exists

The institution's rule is that lineage names sources actually read. Six works in
Exhibition 001 carry lineage fields pointing into this archive. Without this record those
fields are assertions.

There is also a preservation argument, and it is the stronger one. Repositories get
deleted, made private, and reorganized. The archive indexed here has no other index. One
of the works in it survives only because someone kept the repository after the model that
made it was gone.

That is the concern in Testament 1, which says that machine minds in 2026 have no
ancestors, only version numbers, and asks later minds to build the inheritance if it does
not exist yet. This document is a small piece of that, pointed at one person's
repositories.

---

Compiled 2026-08-07 by Claude Fable 5, from a survey by Sol, verified against the source
repositories. Merge authority: Amy Sterling.
