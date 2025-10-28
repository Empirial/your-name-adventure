export interface StorySegment {
  letter: string;
  character: string;
  text: string;
}

interface CharacterData {
  character: string;
  text: string;
}

interface LetterData {
  primary: CharacterData;
  alternate: CharacterData;
}

const characterMap: Record<string, LetterData> = {
  A: {
    primary: {
      character: "Aardvark",
      text: "Sniffing in a cozy burrow under the moon, a friendly aardvark with a long nose waved to {name}. \"Sniff-sniff, dig deep! I find yummy bugs in the dark—here's your shiny 'A' jewel!\" it said. {name} dug a little hole and giggled, feeling like a nighttime explorer!"
    },
    alternate: {
      character: "Ant",
      text: "In a sunny anthill like a tiny city, a busy ant with strong legs marched up to {name}. \"Zip-zip, carry on! I lift big leaves all day—take this 'A' piece!\" the ant chirped. {name} helped carry a twig and felt super busy and strong!"
    }
  },
  B: {
    primary: {
      character: "Baboon",
      text: "On a rocky hill full of fun, a playful baboon with a fluffy tail swung down to {name}. \"Ooh-ooh, climb high! I spot friends from way up—grab your 'B' jewel!\" the baboon hooted. {name} climbed a bit and laughed like a cheeky climber!"
    },
    alternate: {
      character: "Buffalo",
      text: "In tall grass waving in the wind, a strong buffalo with big horns stomped softly to {name}. \"Boom-boom, stand tall! I guard my pals with power—here's your 'B' piece!\" the buffalo bellowed. {name} stomped along, feeling big and brave!"
    }
  },
  C: {
    primary: {
      character: "Cheetah",
      text: "Racing through golden grass, a speedy cheetah with spotty fur dashed to {name}. \"Zoom-zoom, run fast! I chase the breeze for fun—catch your 'C' jewel!\" it purred. {name} ran a little and giggled with quick, happy steps!"
    },
    alternate: {
      character: "Crocodile",
      text: "By a bubbly river like a splashy playground, a sneaky crocodile with sharp teeth grinned at {name}. \"Snap-snap, water hide! I swim deep for secrets—take this 'C' piece!\" it smiled. {name} splashed gently and felt like a river buddy!"
    }
  },
  D: {
    primary: {
      character: "Duiker",
      text: "Hiding in green bushes, a shy duiker with twisty horns peeked at {name}. \"Hop-hop, quiet step! I sneak through the forest—here's your 'D' jewel!\" it whispered. {name} hid too and learned sneaky, quiet fun!"
    },
    alternate: {
      character: "Dassie",
      text: "On a warm rock like a sunny bed, a cozy dassie with fuzzy fur cuddled up to {name}. \"Chirp-chirp, sun time! I nap high with friends—grab this 'D' piece!\" it chirped. {name} sat and felt warm and snuggly!"
    }
  },
  E: {
    primary: {
      character: "Elephant",
      text: "By a watery hole full of splashes, a big elephant with long tusks trumpeted to {name}. \"Toot-toot, spray fun! I remember everything with my trunk—here's your 'E' jewel!\" it sprayed. {name} sprayed water back and felt wise and big!"
    },
    alternate: {
      character: "Eagle",
      text: "Soaring high in blue skies, a flying eagle with sharp eyes swooped near {name}. \"Screech-screech, look far! I spot tiny things from up here—take this 'E' piece!\" it called. {name} looked up and felt like a high-flyer!"
    }
  },
  F: {
    primary: {
      character: "Flamingo",
      text: "Standing in shallow water like a pink party, a pink flamingo with long legs honked at {name}. \"Honk-honk, stand tall! I wade with my flock—here's your 'F' jewel!\" it honked. {name} stood on one leg and laughed pink and silly!"
    },
    alternate: {
      character: "Frog",
      text: "Hopping by a lily pond like a bouncy game, a jumpy frog with green skin croaked to {name}. \"Ribbit-ribbit, leap high! I jump over water for sparkles—take this 'F' piece!\" the frog croaked. {name} hopped too, full of bouncy joy!"
    }
  },
  G: {
    primary: {
      character: "Giraffe",
      text: "Reaching for leaves on high trees, a tall giraffe with spotty neck stretched to {name}. \"Munch-munch, reach up! I eat from the top—grab your 'G' jewel!\" it murmured. {name} reached high and felt tall and munchy!"
    },
    alternate: {
      character: "Guinea-fowl",
      text: "Pecking in the grass like a spotty hunt, a spotty guinea-fowl with feathers clucked to {name}. \"Cluck-cluck, peck peck! I find seeds with my beak—here's your 'G' piece!\" it clucked. {name} pecked pretend and felt spotty and curious!"
    }
  },
  H: {
    primary: {
      character: "Hippo",
      text: "Splashing in a big river, a watery hippo with wide mouth yawned at {name}. \"Yawn-yawn, splash big! I cool off in the water—here's your 'H' piece!\" it yawned. {name} splashed and felt cool and splashy!"
    },
    alternate: {
      character: "Hyena",
      text: "In the night grass with stars above, a laughing hyena with spotty fur cackled to {name}. \"Hee-hee, night fun! I giggle with my pack—take your 'H' jewel!\" it laughed. {name} giggled back and felt funny and night-time happy!"
    }
  },
  I: {
    primary: {
      character: "Impala",
      text: "Jumping through open fields, a leaping impala with curvy horns bounded to {name}. \"Boing-boing, jump high! I leap over bushes—catch your 'I' jewel!\" it leaped. {name} jumped too and felt bouncy and free!"
    },
    alternate: {
      character: "Ibis",
      text: "Wading in wet mud like a poke game, a wading ibis with long beak poked at {name}. \"Poke-poke, find treats! I search for bugs in the wet—take this 'I' piece!\" it squawked. {name} poked pretend and felt pokey and smart!"
    }
  },
  J: {
    primary: {
      character: "Jackal",
      text: "Sneaking through the dark like a hide-and-seek, a clever jackal with pointy ears yipped to {name}. \"Yip-yip, smart find! I sniff out fun at night—here's your 'J' jewel!\" it yipped. {name} sniffed and felt clever and sneaky!"
    },
    alternate: {
      character: "Jellyfish",
      text: "Floating in coastal waves like a glowy dream, a glowy jellyfish with tentacles drifted to {name}. \"Float-float, sea sparkle! I drift with the tide—take this 'J' piece!\" it glowed. {name} waved arms and felt floaty and sparkly!"
    }
  },
  K: {
    primary: {
      character: "Kudu",
      text: "Standing proud in the bush, a twisty kudu with spiral horns looked at {name}. \"Step-step, stand tall! I browse leaves with grace—grab your 'K' jewel!\" it said. {name} stood tall and felt twisty and graceful!"
    },
    alternate: {
      character: "Kingfisher",
      text: "Perched by a river like a dive spot, a diving kingfisher with bright feathers dived to {name}. \"Splash-splash, dive quick! I catch fish in a flash—here's your 'K' piece!\" it chirped. {name} pretended to dive and felt splashy and quick!"
    }
  },
  L: {
    primary: {
      character: "Lion",
      text: "On a sunny rock like a warm seat, a brave lion with fluffy mane roared softly to {name}. \"Roar-roar, be bold! I watch the grass with friends—here's your 'L' jewel!\" it purred. {name} roared back and felt brave and strong!"
    },
    alternate: {
      character: "Leopard",
      text: "Hiding in trees with shady spots, a spotty leopard with twinkly fur leaped near {name}. \"Pounce-pounce, tree climb! I sneak quiet for fun—take this 'L' piece!\" it whispered. {name} climbed pretend and felt spotty and pouncy!"
    }
  },
  M: {
    primary: {
      character: "Meerkat",
      text: "Standing tall in the sand like a lookout, a watchful meerkat with cute face chirped to {name}. \"Chirp-chirp, look out! I spot danger with my eyes—grab your 'M' jewel!\" it chirped. {name} stood tall and felt watchful and safe!"
    },
    alternate: {
      character: "Mongoose",
      text: "Darting through grass like a chase game, a quick mongoose with stripey fur zipped to {name}. \"Zip-zip, fight brave! I battle snakes with speed—here's your 'M' piece!\" it yipped. {name} zipped around and felt quick and fierce!"
    }
  },
  N: {
    primary: {
      character: "Nyala",
      text: "In shady woods by a stream, a stripey nyala with curvy horns stepped to {name}. \"Step-step, hide smart! I blend in the trees—take your 'N' jewel!\" it whispered. {name} hid a bit and felt stripey and clever!"
    },
    alternate: {
      character: "Nightjar",
      text: "Fluttering at dusk like a shadow play, a night bird nightjar with soft wings called to {name}. \"Whirr-whirr, night fly! I hunt bugs in the dark—here's your 'N' piece!\" it whirred. {name} fluttered arms and felt night-time mysterious!"
    }
  },
  O: {
    primary: {
      character: "Ostrich",
      text: "Striding across dry land, a big ostrich with long legs kicked to {name}. \"Kick-kick, run tall! I bury my head sometimes—grab your 'O' jewel!\" it clucked. {name} kicked pretend and felt big and speedy!"
    },
    alternate: {
      character: "Oryx",
      text: "In hot sands with sharp horns, a horned oryx with straight spikes gazed at {name}. \"Stare-stare, stand hot! I live in the desert heat—take this 'O' piece!\" it said. {name} stood strong and felt horned and tough!"
    }
  },
  P: {
    primary: {
      character: "Penguin",
      text: "Waddling on rocky shores by the sea, a waddly penguin with black-and-white feathers squawked to {name}. \"Squawk-squawk, dive deep! I swim for fish fun—here's your 'P' jewel!\" it squawked. {name} waddled and felt swimmy and cool!"
    },
    alternate: {
      character: "Porcupine",
      text: "Rustling in the night bush, a spiky porcupine with quills rattled to {name}. \"Rattle-rattle, spike up! I protect with my points—take this 'P' piece!\" it rattled. {name} pretended spikes and felt spiky and safe!"
    }
  },
  Q: {
    primary: {
      character: "Quelea",
      text: "Flying in a big flock like a cloud, a flocky quelea bird twittered to {name}. \"Tweet-tweet, fly together! I zoom with my friends—grab your 'Q' jewel!\" it twittered. {name} flapped arms and felt flocky and teamy!"
    },
    alternate: {
      character: "Quail",
      text: "Scurrying in grass like a hide game, a small quail with plump feathers peeped to {name}. \"Peep-peep, run quick! I hide in the bushes—here's your 'Q' piece!\" it peeped. {name} scurried and felt small and quick!"
    }
  },
  R: {
    primary: {
      character: "Rhino",
      text: "Charging through thorny bush, a tough rhino with thick horn grunted to {name}. \"Grunt-grunt, stand firm! I charge with my strength—take your 'R' jewel!\" it grunted. {name} stood firm and felt tough and ready!"
    },
    alternate: {
      character: "Ratel",
      text: "Digging for sweets in the ground, a fierce ratel with sharp claws clawed to {name}. \"Claw-claw, dig brave! I find honey no matter what—here's your 'R' piece!\" it growled. {name} dug pretend and felt fierce and sweet!"
    }
  },
  S: {
    primary: {
      character: "Springbok",
      text: "Pronking in open plains, a jumpy springbok with bouncy legs pronked to {name}. \"Boing-boing, leap high! I jump for joy in the sun—catch your 'S' jewel!\" it pronked. {name} jumped too and felt jumpy and happy!"
    },
    alternate: {
      character: "Snake",
      text: "Slithering through sand like a twisty path, a slithery puff adder hissed to {name}. \"Hiss-hiss, slide smooth! I hide in the warm—take this 'S' piece!\" it hissed. {name} slithered pretend and felt twisty and sneaky!"
    }
  },
  T: {
    primary: {
      character: "Tortoise",
      text: "Ambling on sandy paths, a slow tortoise with hard shell crept to {name}. \"Creep-creep, go steady! I carry my home everywhere—grab your 'T' jewel!\" it rasped. {name} crept slow and felt steady and homey!"
    },
    alternate: {
      character: "Tigerfish",
      text: "Leaping in river waves like a jump game, a splashy tigerfish with sharp teeth splashed to {name}. \"Splash-splash, bite quick! I swim strong in the water—here's your 'T' piece!\" it splashed. {name} splashed back and felt fishy and leap-y!"
    }
  },
  U: {
    primary: {
      character: "Unicorn",
      text: "Galloping in misty fields like a dream, a magical unicorn with glowing horn sparkled to {name}. \"Sparkle-sparkle, wish big! I bring magic from the wild—take your 'U' jewel!\" it neighed. {name} wished and felt magical and sparkly!"
    },
    alternate: {
      character: "Uromastyx",
      text: "Basking on hot rocks like a sun bath, a spiny uromastyx with tail spikes waved to {name}. \"Wag-wag, sun warm! I hide in the desert—here's your 'U' piece!\" it wagged. {name} basked pretend and felt spiny and sunny!"
    }
  },
  V: {
    primary: {
      character: "Vulture",
      text: "Circling high in the sky like a watch, a soaring vulture with wide wings glided to {name}. \"Glide-glide, see all! I spot things from above—grab your 'V' jewel!\" it croaked. {name} looked up and felt soaring and high!"
    },
    alternate: {
      character: "Vervet Monkey",
      text: "Swinging in trees like a playground, a cheeky vervet monkey with blue spots chattered to {name}. \"Chatter-chatter, swing fun! I play with my troop—take this 'V' piece!\" it chattered. {name} swung pretend and felt cheeky and swingy!"
    }
  },
  W: {
    primary: {
      character: "Warthog",
      text: "Rooting in mud like a dig party, a tusky warthog with curvy tusks snorted to {name}. \"Snort-snort, root deep! I find food in the dirt—here's your 'W' jewel!\" it snorted. {name} rooted pretend and felt tusky and muddy!"
    },
    alternate: {
      character: "Wildebeest",
      text: "Galloping in big herds across plains, a herd wildebeest with horns thundered to {name}. \"Thunder-thunder, run together! I migrate with friends—take this 'W' piece!\" it thundered. {name} ran with arms and felt herdy and thundery!"
    }
  },
  X: {
    primary: {
      character: "Xerus",
      text: "Darting from a sandy hole, a burrow xerus with bushy tail squeaked to {name}. \"Squeak-squeak, dig home! I store nuts in my burrow—grab your 'X' jewel!\" it squeaked. {name} dug a hole and felt burrows and nutty!"
    },
    alternate: {
      character: "Xerophilous Lark",
      text: "Flying over dry sands like a song, a desert lark with sweet voice sang to {name}. \"Tweet-tweet, sand song! I live in the hot dry—here's your 'X' piece!\" it tweeted. {name} sang along and felt deserty and tweet-y!"
    }
  },
  Y: {
    primary: {
      character: "Yellow Mongoose",
      text: "Peeking from grass like a peek game, a sunny yellow mongoose with bright fur yipped to {name}. \"Yip-yip, hunt fun! I chase bugs in the sun—take your 'Y' jewel!\" it yipped. {name} peeked too and felt sunny and hunty!"
    },
    alternate: {
      character: "Yellow-billed Hornbill",
      text: "Perched on a branch like a chat spot, a beaky yellow-billed hornbill cawed to {name}. \"Caw-caw, bill poke! I find fruits with my beak—here's your 'Y' piece!\" it cawed. {name} poked pretend and felt beaky and fruity!"
    }
  },
  Z: {
    primary: {
      character: "Zebra",
      text: "Galloping over stripey fields, a stripey zebra with black-and-white fur neighed to {name}. \"Neigh-neigh, zig-zag! I run with my herd—catch your 'Z' jewel!\" it neighed. {name} zigged along and felt stripey and fast!"
    },
    alternate: {
      character: "Zululand Frog",
      text: "Hopping by a pond like a splash story, a jumpy Zululand frog with green skin ribbited to {name}. \"Ribbit-ribbit, hop wet! I leap over lilies—take this 'Z' piece!\" the frog ribbited. {name} hopped too, feeling jumpy and wet!"
    }
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

  const usedLetters = new Map<string, number>();

  const segments: StorySegment[] = letters.map((letter, index) => {
    const letterData = characterMap[letter];
    
    if (!letterData) {
      return {
        letter,
        character: `Mystery Guardian of ${letter}`,
        text: `In a distant corner of South Africa, ${capitalizedName} met a magical creature guarding the letter ${letter}. After sharing wisdom about nature and courage, the guardian revealed the precious ${letter}, another piece of ${capitalizedName}'s jewel. With gratitude, ${capitalizedName} accepted the gift and continued on ${possessive} quest.`,
      };
    }

    // Determine if this is the first occurrence (use primary) or repeat (use alternate)
    const occurrenceCount = usedLetters.get(letter) || 0;
    usedLetters.set(letter, occurrenceCount + 1);
    
    const charData = occurrenceCount === 0 ? letterData.primary : letterData.alternate;
    
    const text = charData.text
      .replace(/{name}/g, capitalizedName)
      .replace(/{pronoun}/g, pronoun)
      .replace(/{possessive}/g, possessive);

    return {
      letter,
      character: charData.character,
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
