interface StorySegment {
  letter: string;
  character: string;
  text: string;
}

interface CharacterData {
  character: string;
  text: string;
}

const characterMap: Record<string, CharacterData> = {
  A: {
    character: "Aardvark {royalTitle}",
    text: "The young {royalTitle} wandered into a moonlit burrow where the Aardvark {royalTitle}, with a crown of starry termite mounds, awaited. 'To find your jewel's A, you must dig deep like me, unearthing hidden strengths in the earth,' said the aardvark, using its long snout to reveal the glowing fragment. As they shared stories of nocturnal adventures in the Kalahari, {name} learned patience and perseverance, adding the A to {possessive} quest."
  },
  B: {
    character: "Baboon {royalTitle}",
    text: "Atop a rocky kopje, the Baboon {royalTitle}, adorned with a mane like a royal cloak, greeted {name}. 'The B of your jewel teaches balance in the troop—watch how we protect our family in the bushveld,' it chattered, handing over the piece after a playful game of tag. {name} discovered the value of community and cleverness, strengthening {possessive} royal resolve."
  },
  C: {
    character: "Cheetah {royalTitle}",
    text: "In the golden grasslands, the Cheetah {royalTitle}, wearing spots like jeweled armor, dashed forth. 'Speed and focus claim the C—pursue your goals like I chase prey across the plains,' it purred, gifting the fragment after a swift lesson in agility. {name} embraced determination and grace, racing ahead in {possessive} adventure."
  },
  D: {
    character: "Duiker {royalTitle}",
    text: "Hidden in dense thickets, the Duiker {royalTitle}, with antlers like a scepter, emerged shyly. 'The D whispers of discretion—navigate dangers quietly, as I do in the forests,' it advised, revealing the jewel piece from a leafy hideout. {name} learned wisdom and caution, vital for a true ruler."
  },
  E: {
    character: "Elephant {royalTitle}",
    text: "By a watering hole, the mighty Elephant {royalTitle}, tusks gleaming like ivory crowns, trumpeted a welcome. 'Memory and might hold the E—remember your roots like my herd in the Kruger,' it shared, using its trunk to lift the fragment. {name} gained insight into loyalty and leadership, feeling the earth's ancient power."
  },
  F: {
    character: "Flamingo {royalTitle}",
    text: "At a shimmering salt pan, the Flamingo {royalTitle}, legs like elegant stilts and feathers a pink robe, posed gracefully. 'The F floats on fellowship—stand together in flocks, filtering life's lessons,' it honked, presenting the piece from the shallows. {name} understood harmony and adaptability in changing tides."
  },
  G: {
    character: "Giraffe {royalTitle}",
    text: "Towering over the acacia trees, the Giraffe {royalTitle}, neck adorned with leafy garlands, looked down kindly. 'Reach high for the G—see beyond horizons like I do in the savanna,' it murmured, plucking the fragment from a tall branch. {name} learned vision and ambition, standing taller in spirit."
  },
  H: {
    character: "Hippo {royalTitle}",
    text: "In a lazy river, the Hippo {royalTitle}, with a yawn like a royal decree, surfaced. 'The H hides strength beneath calm waters—protect your realm fiercely, as I guard my pool,' it bellowed, bubbling up the jewel piece. {name} discovered inner power and peace amid turmoil."
  },
  I: {
    character: "Impala {royalTitle}",
    text: "Leaping through the veld, the Impala {royalTitle}, horns curved like a coronet, bounded near. 'Agility claims the I—evade obstacles with grace, as I pronk in the open,' it advised, tossing the fragment mid-jump. {name} embraced quick thinking and elegance."
  },
  J: {
    character: "Jackal {royalTitle}",
    text: "Under the stars, the cunning Jackal {royalTitle}, fur like a shadowy mantle, slinked forward. 'The J joys in clever journeys—adapt and outwit, scavenging wisdom in the night,' it yipped, digging up the piece. {name} learned resourcefulness and wit for royal challenges."
  },
  K: {
    character: "Kudu {royalTitle}",
    text: "Amid spiral-horned majesty, the Kudu {royalTitle}, antlers a twisted throne, stood proud. 'The K kindles knowledge—tread ancient paths like me in the bush,' it intoned, bestowing the fragment. {name} gained insight into tradition and quiet strength."
  },
  L: {
    character: "Lion {royalTitle}",
    text: "On a sun-baked pride rock, the Lion {royalTitle}, mane a golden crown, roared regally. 'Courage roars with the L—lead your pride boldly, as I rule the plains,' it declared, pawing over the piece. {name} ignited bravery and sovereignty."
  },
  M: {
    character: "Meerkat {royalTitle}",
    text: "From a sandy sentry post, the Meerkat {royalTitle}, alert with a vigilant gaze, popped up. 'The M musters mindfulness—watch for allies in the desert clan,' it chirped, sharing the fragment after a lookout lesson. {name} learned vigilance and teamwork."
  },
  N: {
    character: "Nyala {royalTitle}",
    text: "In lush riverine forests, the Nyala {royalTitle}, stripes like royal ribbons, approached. 'The N nurtures nobility—thrive in hidden groves, blending beauty and caution,' it whispered, offering the piece. {name} appreciated subtlety and poise."
  },
  O: {
    character: "Ostrich {royalTitle}",
    text: "Striding across the Karoo, the Ostrich {royalTitle}, feathers a plumed headdress, kicked up dust. 'The O opens opportunities—run swift and bury fears, as I do,' it clucked, unearthing the fragment. {name} discovered resilience and forward momentum."
  },
  P: {
    character: "Penguin {royalTitle}",
    text: "Along the chilly Cape coast, the African Penguin {royalTitle}, tuxedo feathers a formal suit, waddled forth. 'The P paddles through perseverance—dive deep for dreams in the waves,' it squawked, flipping the piece from the sea. {name} embraced endurance and joy."
  },
  Q: {
    character: "Quelea {royalTitle}",
    text: "In a swirling flock over fields, the Quelea {royalTitle}, wings a feathered cape, landed. 'The Q quests in quantity—unite in vast numbers, weaving strength in the sky,' it twittered, dropping the fragment. {name} learned the power of collective unity."
  },
  R: {
    character: "Rhino {royalTitle}",
    text: "Charging through thorny bush, the Rhino {royalTitle}, horn a mighty scepter, halted. 'The R reinforces resolve—stand firm like my armored hide in the veld,' it grunted, nudging the piece forward. {name} fortified determination and protection."
  },
  S: {
    character: "Springbok {royalTitle}",
    text: "Pronking in the open plains, the Springbok {royalTitle}, leaps like a joyful dance, arrived. 'The S springs with spirit—bound over barriers with national pride,' it gazelled, presenting the fragment. {name} ignited energy and freedom."
  },
  T: {
    character: "Tortoise {royalTitle}",
    text: "Slowly ambling on ancient paths, the Leopard Tortoise {royalTitle}, shell a domed palace, emerged. 'The T treasures time—pace wisely through life's long journey,' it rasped, extending the piece. {name} valued patience and longevity."
  },
  U: {
    character: "Unicorn Beetle {royalTitle}",
    text: "In a hidden glen, the Unicorn Beetle {royalTitle}, with a protruding horn like a mythical spike, buzzed near. 'The U unveils uniqueness—embrace rare gifts, burrowing through challenges,' it hummed, revealing the fragment. {name} celebrated individuality."
  },
  V: {
    character: "Vulture {royalTitle}",
    text: "Circling high above, the Vulture {royalTitle}, wings a soaring mantle, descended. 'The V views from vantage—cleanse and renew, scouting the lands,' it croaked, dropping the piece. {name} grasped perspective and renewal."
  },
  W: {
    character: "Warthog {royalTitle}",
    text: "Rooting in the mud, the Warthog {royalTitle}, tusks curved like battle horns, snorted. 'The W wields wildness—charge with humor and grit through the bush,' it grunted, uprooting the fragment. {name} laughed into boldness and authenticity."
  },
  X: {
    character: "Xerus {royalTitle}",
    text: "Darting from a burrow, the Xerus {royalTitle} (Ground Squirrel), tail a fluffy banner, chattered. 'The X explores extremes—adapt to arid realms with clever caches,' it squeaked, sharing the piece. {name} learned survival and ingenuity in harsh environments."
  },
  Y: {
    character: "Yellow Mongoose {royalTitle}",
    text: "Slithering through grasslands, the Yellow Mongoose {royalTitle}, fur a sunny robe, peeked out. 'The Y yields youthful curiosity—hunt secrets in packs, fearless and fun,' it yipped, offering the fragment. {name} sparked exploration and playfulness."
  },
  Z: {
    character: "Zebra {royalTitle}",
    text: "Galloping in striped splendor, the Zebra {royalTitle}, patterns a hypnotic cloak, joined. 'The Z zigs with zeal—blend in yet stand out in the herd,' it neighed, kicking up the piece. {name} understood identity and camouflage."
  }
};

export interface GeneratedStory {
  name: string;
  gender: "boy" | "girl";
  intro: string;
  segments: StorySegment[];
  conclusion: string;
}

export const generateStory = (name: string, gender: "boy" | "girl"): GeneratedStory => {
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  const nameCaps = name.toUpperCase();
  const letters = nameCaps.split("");
  const pronoun = gender === "boy" ? "he" : "she";
  const possessive = gender === "boy" ? "his" : "her";
  const royalTitle = gender === "boy" ? "Prince" : "Princess";

  const intro = `Once upon a time, in the vibrant wilds of South Africa, there lived a young ${royalTitle} named ${capitalizedName}. One morning, ${capitalizedName} woke in ${possessive} royal hut to a startling discovery—${possessive} name, a precious enchanted jewel symbolizing ${possessive} unique spirit and heritage, had shattered! A mischievous wind spirit had scattered the glowing gem-letters across the savannas, rivers, and mountains. To reclaim ${possessive} identity and restore the jewel's power, ${capitalizedName} knew ${pronoun} must journey through the wilderness, where wise animal guardians, each a noble ${royalTitle} of their species, protected the fragments. With courage in ${possessive} heart and adventure in ${possessive} eyes, ${capitalizedName} set off into the wild to collect each precious letter.`;

  const segments: StorySegment[] = letters.map((letter, index) => {
    const charData = characterMap[letter] || {
      character: `Mystery Guardian ${royalTitle} of ${letter}`,
      text: `In a distant corner of South Africa, ${capitalizedName} met the Guardian ${royalTitle} of the letter ${letter}, a magical creature of the wilderness. After sharing wisdom about nature and courage, the guardian revealed the precious ${letter}, another piece of ${capitalizedName}'s jewel. With gratitude, ${capitalizedName} accepted the gift and continued on ${possessive} royal quest.`,
    };

    // Handle repeated letters with slight variation
    const isRepeat = letters.slice(0, index).includes(letter);
    let text = charData.text
      .replace(/{name}/g, capitalizedName)
      .replace(/{pronoun}/g, pronoun)
      .replace(/{possessive}/g, possessive)
      .replace(/{royalTitle}/g, royalTitle);
    
    if (isRepeat) {
      text = "Once again, " + text;
    }

    return {
      letter,
      character: charData.character.replace(/{royalTitle}/g, royalTitle),
      text,
    };
  });

  const conclusion = `With all the gem-letters safely gathered, ${capitalizedName} stood tall beneath the African sky. One by one, ${pronoun} placed the glowing fragments together, and they began to shine brighter and brighter. With a brilliant flash of golden light, the letters formed ${possessive} complete name: **${letters.join(" · ")}**! The enchanted jewel was whole again, more radiant than the sun over the savanna. ${capitalizedName} realized that ${possessive} name was a treasure as unique and enduring as the African wilderness itself—a jewel of courage, kindness, and royal spirit. Surrounded by all the noble animal friends ${pronoun} had made, ${royalTitle} ${capitalizedName} knew ${possessive} name would shine forever across the beautiful land of South Africa. The End.`;

  return {
    name: capitalizedName,
    gender,
    intro,
    segments,
    conclusion,
  };
};
