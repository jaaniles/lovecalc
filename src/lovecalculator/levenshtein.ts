import { SHA256 } from "crypto-js";
import levenshtein from "fast-levenshtein";
import { MerkleTree } from "merkletreejs";

const LOVE_DEFINITION = `What is love?
Oh baby, don't hurt me
Don't hurt me
No more
Baby, don't hurt me, don't hurt me
No more
What is love?
Yeah
No, I don't know why you're not fair
I give you my love, but you don't care
So what is right and what is wrong?
Gimme a sign
What is love?
Oh baby, don't hurt me
Don't hurt me
No more
What is love?
Oh baby, don't hurt me
Don't hurt me
No more
Whoa, whoa, oh
Whoa, whoa, oh
Oh, I don't know, what can I do?
What else can I say? It's up to you
I know we're one, just me and you
I can't go on
What is love?
Oh baby, don't hurt me
Don't hurt me
No more
What is love?
Oh baby, don't hurt me
Don't hurt me
No more
Whoa, whoa, oh
Whoa, whoa, oh
What is love?
What is love?
What is love?
Oh baby, don't hurt me
Don't hurt me
No more
Don't hurt me
Don't hurt me
I want no other, no other lover
This is our life, our time
If we are together, I need you forever
Is it love?
What is love?
Oh baby, don't hurt me
Don't hurt me
No more
What is love?
Oh baby, don't hurt me
Don't hurt me
No more
Yeah, yeah
Whoa, whoa, oh
Whoa, whoa, oh
What is love?
Oh baby, don't hurt me
Don't hurt me
No more
What is love?
Oh baby, don't hurt me
Don't hurt me
No more (whoa, whoa)
Oh baby, don't hurt me
Don't hurt me
No more (whoa, whoa)
Oh baby, don't hurt me
Don't hurt me
No more
What is love?`;

function sanitizeName(name: string) {
  return name.replace(/[\d\s]/g, "").toLowerCase();
}

export function calculateLove(first: string, second: string) {
  const loveStr = `${sanitizeName(first)} loves ${sanitizeName(second)}`;
  const leaves = Array.from(loveStr).map((c) => SHA256(c));
  const tree = new MerkleTree(leaves, SHA256);
  const loveRoot = tree.getRoot().toString("hex");
  const loveDefHash = SHA256(LOVE_DEFINITION).toString();

  const distance = levenshtein.get(loveRoot, loveDefHash);
  const maxPossibleChanges = Math.max(loveRoot.length, loveDefHash.length);

  return Math.round((distance / maxPossibleChanges) * 100);
}
