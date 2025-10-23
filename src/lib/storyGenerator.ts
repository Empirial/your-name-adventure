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
    character: "Adventurous Amethyst Guardian",
    text: "An Adventurous Amethyst spirit appeared, glowing with purple light, guiding {name} through a shimmering cave. The walls sparkled like a thousand stars. \"Look!\" whispered the spirit, pointing to a gleaming facet on the cave floor. The letter A emerged, radiating with inner strength and courage.",
  },
  B: {
    character: "Brave Blue Sapphire Bird",
    text: "High above, a Brave Blue Sapphire bird soared across the endless sky, its wings catching the sunlight. \"Come fly with me!\" it sang. As {name} soared together with the bird, it gifted the letter B, shaped like a wing of freedom, teaching that bravery lifts us higher.",
  },
  C: {
    character: "Cheerful Citrine Cat",
    text: "In a sunny meadow filled with golden flowers, a Cheerful Citrine cat pounced playfully, batting at butterflies. \"Catch me if you can!\" she purred with joy. With a happy flip, she revealed the letter C to {name}, curved like a smile of pure happiness.",
  },
  D: {
    character: "Daring Diamond Dragon",
    text: "A magnificent Daring Diamond dragon emerged from its treasure hoard, scales glittering like precious gems. \"Seek wisdom, young one,\" it rumbled gently to {name}, breathing sparks of ancient knowledge. Among the treasures lay the letter D, sharp and brilliant as dragon's wisdom.",
  },
  E: {
    character: "Energetic Emerald Elf",
    text: "An Energetic Emerald elf danced through an enchanted forest, leaving trails of green sparkles. \"Watch this magic!\" she giggled to {name}, weaving spells with her tiny hands. The trees bent to reveal the letter E, glowing like a fresh leaf of growth and new beginnings.",
  },
  F: {
    character: "Friendly Fire Opal Fox",
    text: "A Friendly Fire Opal fox trotted through fields of flame-colored flowers, its coat shimmering with orange and red light. \"Come warm yourself by my friendship,\" it said kindly to {name}, and the letter F appeared like a dancing flame, representing the warmth of true friendship.",
  },
  G: {
    character: "Gentle Garnet Giant",
    text: "A Gentle Garnet giant stomped softly through the mountains, each step careful not to harm even the smallest flower. \"Strength and gentleness go together,\" the giant smiled to {name}, lifting a boulder to reveal the letter G beneath, symbolizing gentle power.",
  },
  H: {
    character: "Helpful Hematite Horse",
    text: "A Helpful Hematite horse galloped across silver plains, its metallic coat gleaming. \"Need a ride?\" it offered kindly to {name}, helping weary travelers along the way. With a proud whinny, it presented the letter H, shaped like a horseshoe of good luck and helpfulness.",
  },
  I: {
    character: "Imaginative Indigo Imp",
    text: "In a whimsical workshop, an Imaginative Indigo imp tinkered with magical gadgets and gizmos. \"Ideas are everywhere!\" it chirped to {name}, pointing to blueprints and inventions. A beam of light shot out, forming the letter I—a straight line of brilliant imagination and innovation.",
  },
  J: {
    character: "Joyful Jade Jaguar",
    text: "A Joyful Jade jaguar leaped through the jungle, its green spots glowing with happiness. \"Listen to my roar of laughter!\" it called to {name}, rolling in the grass with pure delight. From its collar dangled the letter J, a precious jewel of joy and celebration.",
  },
  K: {
    character: "Kind Kunzite Kangaroo",
    text: "A Kind Kunzite kangaroo hopped along, her pouch full of gifts for those in need. \"Kindness is the greatest treasure,\" she said softly to {name}, sharing hugs and smiles. She reached into her pouch and pulled out the letter K—a kick of pure compassion.",
  },
  L: {
    character: "Lively Lapis Lazuli Lion",
    text: "A Lively Lapis Lazuli lion roared across the pride lands, its blue mane flowing like ocean waves. \"Lead with your heart!\" it proclaimed to {name}, standing proud and strong. The lion's roar formed the letter L in the clouds—a symbol of leadership and courage.",
  },
  M: {
    character: "Magical Moonstone Mermaid",
    text: "Deep in the ocean, a Magical Moonstone mermaid swam gracefully through coral gardens. \"Join my song,\" she sang to {name}, her voice creating ripples of silver light. The waves parted to reveal the letter M, rising and falling like the magical tide itself.",
  },
  N: {
    character: "Noble Nephrite Ninja",
    text: "A Noble Nephrite ninja moved silently through shadows, swift as the wind. \"Honor and stealth guide my path,\" they whispered to {name}, demonstrating incredible moves. With a graceful flip, they revealed the letter N, carved in jade and representing nobility and skill.",
  },
  O: {
    character: "Optimistic Onyx Owl",
    text: "An Optimistic Onyx owl perched on an ancient tree, its black feathers shimmering with starlight. \"Every night brings new wisdom,\" it hooted softly to {name}, gazing at the moon. Its wise eyes spotted the letter O, glowing like a full moon of endless hope.",
  },
  P: {
    character: "Playful Pearl Penguin",
    text: "A Playful Pearl penguin slid joyfully across the ice, belly-flopping with giggles. \"Playtime is the best time!\" it chirped to {name}, diving into crystal waters. Surfacing with a splash, it presented the letter P, shining like a perfect pearl of play and fun.",
  },
  Q: {
    character: "Quirky Quartz Queen",
    text: "A Quirky Quartz queen ruled from her crystal castle, wearing a crown of rainbow gems. \"Answer my riddle!\" she challenged {name} with a kind smile, testing wit and wisdom. When answered correctly, she revealed the letter Q, unlocking secrets of curiosity and questions.",
  },
  R: {
    character: "Radiant Ruby Rabbit",
    text: "A Radiant Ruby rabbit hopped energetically through magical gardens, leaving trails of red sparkles. \"Resilience makes us strong!\" it said to {name}, bouncing higher with each jump. The rabbit dug into the earth and pulled up the letter R—a root of strength and resilience.",
  },
  S: {
    character: "Sparkly Sapphire Snake",
    text: "A Sparkly Sapphire snake slithered gracefully through desert sands, its scales glittering blue in the sun. \"Change helps us grow,\" it hissed gently to {name}, shedding its old skin. Beneath lay the letter S, shimmering like a ribbon of transformation and renewal.",
  },
  T: {
    character: "Trusty Topaz Tiger",
    text: "A Trusty Topaz tiger prowled through golden grasslands, its stripes gleaming like amber. \"Trust is earned through honesty,\" it purred wisely to {name}, following tracks with precision. The tiger revealed the letter T hidden in its stripes—a symbol of truth and trustworthiness.",
  },
  U: {
    character: "Unique Ultramarine Unicorn",
    text: "A Unique Ultramarine unicorn galloped through meadows of wildflowers, its horn glowing with deep blue light. \"You are one of a kind!\" it neighed proudly to {name}, bringing friends together in harmony. Its magical horn traced the letter U—celebrating everyone's uniqueness.",
  },
  V: {
    character: "Vibrant Violet Bat",
    text: "A Vibrant Violet vampire bat fluttered through the twilight sky, friendly and full of energy. \"Feel the good vibes!\" it squeaked cheerfully to {name}, doing loop-de-loops in the dusk. With a happy flip, it revealed the letter V, pulsing with positive vibrations and vitality.",
  },
  W: {
    character: "Wise White Opal Wolf",
    text: "A Wise White Opal wolf howled softly in moonlit woods, its coat shimmering with rainbow colors. \"Listen to the whispers of wisdom,\" it said gently to {name}, sharing ancient secrets. The wolf's paw prints formed the letter W—a winding path of wisdom and wonder.",
  },
  X: {
    character: "Extraordinary Xenotime Xerus",
    text: "An Extraordinary Xenotime xerus (a magical squirrel) played a crystal xylophone in a forest clearing. \"Music makes everything extraordinary!\" it chattered to {name}, creating beautiful melodies. The musical notes danced together to form the letter X—crisscrossing in harmony and uniqueness.",
  },
  Y: {
    character: "Youthful Yellow Topaz Yeti",
    text: "A Youthful Yellow Topaz yeti yodeled joyfully from snowy mountain peaks, its golden fur gleaming against white snow. \"Yodel-ay-hee-hoo!\" it called to {name}, full of energy and life. The echo bounced off mountains, forming the letter Y—a symbol of youth and youthful spirit.",
  },
  Z: {
    character: "Zesty Zircon Zebra",
    text: "A Zesty Zircon zebra zipped energetically across the savanna, its stripes sparkling like diamonds. \"Zigzag with me!\" it laughed with {name}, racing with the wind. In a cloud of dust, it revealed the letter Z—the final piece, adding zest and excitement to the adventure.",
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
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  const nameCaps = name.toUpperCase();
  const letters = nameCaps.split("");
  const pronoun = gender === "boy" ? "he" : "she";
  const possessive = gender === "boy" ? "his" : "her";

  const intro = `Once upon a time, there was a special child named ${capitalizedName}. One magical morning, ${capitalizedName} woke to discover something extraordinary—${possessive} name had transformed into a beautiful jewel, but it had shattered into glowing pieces scattered across enchanted lands! Each letter had become a precious gem, hidden and waiting to be found. "My name is my treasure!" ${capitalizedName} declared bravely. "I must collect every sparkling piece!" With excitement bubbling like a fountain and courage shining like a star, ${pronoun} set off on the most amazing quest ever, ready to meet magical friends and discover the jewel that is ${possessive} name.`;

  const segments: StorySegment[] = letters.map((letter, index) => {
    const charData = characterMap[letter] || {
      character: `Mysterious ${letter} Spirit`,
      text: `In a mystical realm of wonder, ${capitalizedName} encountered a magical spirit guardian. "I've been waiting for you," it whispered kindly, revealing the letter ${letter} glowing with enchanted light—a precious gem piece of ${possessive} name, ready to be reclaimed.`,
    };

    // Handle repeated letters with slight variation
    const isRepeat = letters.slice(0, index).includes(letter);
    const text = isRepeat
      ? charData.text.replace(/{name}/g, capitalizedName).replace("The letter", "Another letter").replace("the letter", "another letter")
      : charData.text.replace(/{name}/g, capitalizedName);

    return {
      letter,
      character: charData.character,
      text,
    };
  });

  const conclusion = `With all the precious gem-letters gathered close to ${possessive} heart, ${capitalizedName} watched in wonder as they floated up and swirled together like a magical dance. Sparkles filled the air! Light shimmered everywhere! And then—click, click, click—the letters locked into place, forming the most beautiful jewel ever seen. It spelled: **${letters.join(" · ")}**. "${capitalizedName}!" ${pronoun} whispered with joy, holding the complete jewel. "That's me!" All the magical friends cheered and celebrated, for they knew this jewel was unique in all the world—just like ${capitalizedName}. From that day forward, ${capitalizedName} wore ${possessive} name with pride, a treasure made of courage, kindness, friendship, and adventure. And ${pronoun} knew that no matter where ${pronoun} went, ${possessive} name would always shine bright. The End.`;

  return {
    name: capitalizedName,
    gender,
    intro,
    segments,
    conclusion,
  };
};
