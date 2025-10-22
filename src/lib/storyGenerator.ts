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
    character: "Adventurous Alligator",
    text: "First, {name} wandered into a sunny meadow and met an Adventurous Alligator named Albie. Albie was sunbathing by a sparkling river, snapping his jaws at butterflies. \"I've lost my name!\" {name} explained. Albie grinned with his toothy smile. \"Well, I'll help you! Here's the letter A—it looks just like my pointy teeth!\" Together, they skipped along, and {name} felt a bit more complete.",
  },
  B: {
    character: "Bouncy Bear",
    text: "Next, {name} discovered a Bouncy Bear named Bella in a honey-sweet meadow. Bella was doing somersaults and juggling berries. \"My name is missing!\" {name} cried. Bella laughed warmly. \"Don't worry! Take this letter B—it's round like my belly after eating honey!\" With a bounce and a giggle, they continued the quest.",
  },
  C: {
    character: "Curious Cat",
    text: "Then, {name} met a Curious Cat named Cleo perched on a rainbow-colored fence. Cleo's whiskers twitched with excitement. \"Looking for something?\" she purred. \"Yes, my name!\" {name} replied. Cleo stretched gracefully. \"Here's the letter C—it curves like my tail when I'm happy!\" Purring contentedly, they journeyed on.",
  },
  D: {
    character: "Dancing Dragon",
    text: "Deep in a mountain cave, {name} found a Dancing Dragon named Dusty, twirling with flames of joy. \"I've lost my name!\" {name} shouted over the music. Dusty spun around happily. \"Fear not! Here's the letter D—it stands tall like my wings when I dance!\" With a fiery flourish, the adventure continued.",
  },
  E: {
    character: "Energetic Elephant",
    text: "In an enchanted grove filled with glowing flowers, {name} encountered an Energetic Elephant named Ellie. Ellie was trumpeting tunes and spraying water from her trunk like a fountain. \"Help! I've lost my name!\" {name} pleaded. Ellie flapped her big ears happily. \"I've got just the thing! Here's the letter E—it's strong and sturdy, like my trunk!\" Trumpeting a victory song, they marched on.",
  },
  F: {
    character: "Friendly Fox",
    text: "Under a willow tree, {name} met a Friendly Fox named Finn, his tail bushy and bright. \"Lost something?\" Finn asked cleverly. \"My name!\" {name} answered. Finn's eyes sparkled. \"Perfect! Here's the letter F—it's sharp like my ears listening for adventure!\" With a knowing nod, they pressed forward.",
  },
  G: {
    character: "Giggling Giraffe",
    text: "By a tall tree, {name} spotted a Giggling Giraffe named Grace, her spots shimmering in the sun. \"What's wrong?\" she asked gently. \"I can't find my name!\" {name} said. Grace bent down with a smile. \"Here's the letter G—it's tall like me reaching for the clouds!\" Giggling together, they continued the search.",
  },
  H: {
    character: "Happy Hedgehog",
    text: "{name} discovered a Happy Hedgehog named Hugo rolling through a field of daisies. \"Need help?\" Hugo chirped cheerfully. \"Yes, I've lost my name!\" Hugo uncurled with a grin. \"Take the letter H—it's prickly but kind, just like me!\" Rolling with joy, they moved along.",
  },
  I: {
    character: "Imaginative Iguana",
    text: "On a sunny rock, {name} found an Imaginative Iguana named Iris, painting the sky with her tail. \"Missing something?\" Iris asked dreamily. \"My name!\" {name} replied. Iris nodded wisely. \"Here's the letter I—it stands straight like me basking in creativity!\" With colorful imagination, they ventured on.",
  },
  J: {
    character: "Joyful Jellyfish",
    text: "In a crystal-clear lagoon, {name} met a Joyful Jellyfish named Jasper, glowing with rainbow lights. \"What brings you here?\" Jasper asked softly. \"I'm searching for my name!\" Jasper pulsed with light. \"Take the letter J—it dangles like my tentacles!\" Floating gracefully, they continued together.",
  },
  K: {
    character: "Kind Kangaroo",
    text: "{name} hopped into a golden field where a Kind Kangaroo named Kira was bouncing with her joey. \"Need a hand?\" Kira asked warmly. \"I've lost my name!\" {name} explained. Kira smiled and reached into her pouch. \"Here's the letter K—it hops like me!\" Bouncing with kindness, they journeyed on.",
  },
  L: {
    character: "Lively Leopard",
    text: "The path led to a lush jungle where vines swung like playground ropes. There, swinging from branch to branch, was a Lively Leopard named Luna. Luna had spots as shiny as stars and could leap higher than the treetops. \"My name's missing!\" {name} said. Luna purred with excitement. \"No worries! Take this letter L—it's curvy like my tail when I chase fireflies!\" With Luna's help, they bounded forward.",
  },
  M: {
    character: "Musical Monkey",
    text: "High in the trees, {name} heard drums and found a Musical Monkey named Max playing on hollow logs. \"Lost something special?\" Max asked between beats. \"My name!\" {name} answered. Max grinned and handed over a drumstick shaped like the letter M. \"Here you go—it has two peaks like my ears!\" Drumming happily, they swung onward.",
  },
  N: {
    character: "Noble Nightingale",
    text: "As twilight fell, {name} met a Noble Nightingale named Nina singing the most beautiful song. \"What troubles you?\" Nina asked melodiously. \"I can't find my name!\" Nina's voice shimmered. \"Take the letter N—it rises and falls like my song!\" Singing sweetly, they flew through the evening.",
  },
  O: {
    character: "Optimistic Owl",
    text: "In a moonlit forest, {name} found an Optimistic Owl named Oliver perched on an ancient oak. \"Seeking wisdom?\" Oliver hooted kindly. \"Yes, and my name!\" Oliver blinked wisely. \"Here's the letter O—it's round like the full moon guiding you home!\" Hooting with hope, they soared ahead.",
  },
  P: {
    character: "Playful Penguin",
    text: "On an icy shore, {name} slid toward a Playful Penguin named Penny waddling with joy. \"What are you looking for?\" Penny asked. \"My name!\" {name} replied. Penny flapped her flippers excitedly. \"Take the letter P—it stands proud like me on the ice!\" Sliding together, they pressed on.",
  },
  Q: {
    character: "Quiet Quail",
    text: "In a peaceful meadow, {name} spotted a Quiet Quail named Quinn nestled in soft grass. \"Need something?\" Quinn whispered gently. \"My name is lost!\" Quinn nodded softly. \"Here's the letter Q—it's unique and gentle, like me!\" With a quiet coo, they continued the journey.",
  },
  R: {
    character: "Radiant Rabbit",
    text: "{name} hopped through a garden and met a Radiant Rabbit named Ruby, her fur glowing in the sunlight. \"What's missing?\" Ruby asked brightly. \"My name!\" Ruby twitched her nose. \"Take the letter R—it bounces like me through the flowers!\" Hopping with radiance, they moved forward.",
  },
  S: {
    character: "Silly Seahorse",
    text: "Diving into a coral reef, {name} found a Silly Seahorse named Sam twirling through the waves. \"Lost at sea?\" Sam asked playfully. \"I've lost my name!\" Sam spiraled with laughter. \"Here's the letter S—it curves like me swimming!\" Swirling together, they swam ahead.",
  },
  T: {
    character: "Thoughtful Turtle",
    text: "By a calm pond, {name} met a Thoughtful Turtle named Theo, slowly sunbathing on a lily pad. \"What do you seek?\" Theo asked patiently. \"My name!\" {name} said. Theo smiled wisely. \"Here's the letter T—it stands steady like me!\" Moving with patience, they continued on.",
  },
  U: {
    character: "Upbeat Unicorn",
    text: "In a magical clearing, {name} encountered an Upbeat Unicorn named Una, her horn sparkling with stardust. \"Need some magic?\" Una asked brightly. \"Yes, I need my name!\" Una tossed her mane joyfully. \"Take the letter U—it holds magic like my horn!\" Galloping with wonder, they raced ahead.",
  },
  V: {
    character: "Vibrant Vulture",
    text: "Soaring through the sky, {name} met a Vibrant Vulture named Vera gliding on warm winds. \"Looking for something?\" Vera called down. \"My name!\" {name} shouted up. Vera swooped gracefully. \"Here's the letter V—it points like my wings in flight!\" Flying together, they soared onward.",
  },
  W: {
    character: "Wise Whale",
    text: "Out in the deep blue ocean, {name} met a Wise Whale named Wanda who sang songs of the sea. \"Lost something precious?\" Wanda asked in a deep voice. \"My name!\" {name} replied. Wanda's voice rumbled warmly. \"Take the letter W—it waves like the ocean!\" Singing together, they swam on.",
  },
  X: {
    character: "Extraordinary Xerus",
    text: "At the top of a misty mountain where clouds danced like cotton candy, {name} found an Extraordinary Xerus (that's a fancy squirrel!) named Xavi playing a xylophone. The melody echoed through the peaks. \"My name is almost found, but I need one more piece!\" {name} shouted. Xavi twinkled his eyes. \"Perfect timing! Here's the letter X—it's crisscross like the paths on my treasure map!\" With a final chime, the name clicked into place.",
  },
  Y: {
    character: "Youthful Yak",
    text: "In snowy peaks, {name} met a Youthful Yak named Yara, her fur fluffy and warm. \"What brings you to the mountains?\" Yara asked kindly. \"I'm searching for my name!\" Yara nodded thoughtfully. \"Here's the letter Y—it branches like the paths we choose!\" Trudging warmly together, they climbed on.",
  },
  Z: {
    character: "Zany Zebra",
    text: "In a vibrant savanna, {name} spotted a Zany Zebra named Zeke, his stripes dazzling in zigzags. \"Need something?\" Zeke asked with a laugh. \"My name!\" {name} called. Zeke pranced playfully. \"Take the letter Z—it zigzags like my stripes and my dance!\" Galloping with energy, they completed the quest.",
  },
};

export interface GeneratedStory {
  name: string;
  gender: "boy" | "girl";
  intro: string;
  segments: StorySegment[];
  conclusion: string;
}

export const generateStory = (name: string, gender: "boy" | "girl"): GeneratedStory => {
  const nameCaps = name.toUpperCase();
  const letters = nameCaps.split("");
  const pronoun = gender === "boy" ? "he" : "she";
  const child = gender === "boy" ? "boy" : "girl";

  const intro = `Once upon a time, in a cozy little house at the edge of a whispering forest, there lived a curious ${child} named ${name}. But one starry night, something magical happened—${name}'s name vanished! Poof! Gone like a puff of smoke. "Oh no!" cried ${name}. "I must find my name!" So, with a backpack full of snacks and a heart full of bravery, ${name} set off on an epic adventure.`;

  const segments: StorySegment[] = letters.map((letter) => {
    const charData = characterMap[letter] || {
      character: `Magic ${letter}`,
      text: `${name} found the magical letter ${letter} glowing with enchantment. "This is part of my name!" ${name} exclaimed with joy. With the letter safely collected, the adventure continued.`,
    };

    return {
      letter,
      character: charData.character,
      text: charData.text.replace(/{name}/g, name),
    };
  });

  const conclusion = `Hand in hand (or paw in trunk in tail), the friends returned home. ${name}'s name shone brightly once more, spelled out in the stars: ${letters.join("-")}. From that day on, ${name} knew that names are made of magic, friends, and a dash of adventure. And they all lived happily ever after, sharing stories under the moonlit sky. The End.`;

  return {
    name,
    gender,
    intro,
    segments,
    conclusion,
  };
};
