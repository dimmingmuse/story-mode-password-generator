// Word lists for passphrase generator
// All words chosen for high imageability and memorability

const words = {
  // Nouns with singular and plural forms
  nouns: [
    { s: "fox", p: "foxes" },
    { s: "wolf", p: "wolves" },
    { s: "bear", p: "bears" },
    { s: "tiger", p: "tigers" },
    { s: "eagle", p: "eagles" },
    { s: "shark", p: "sharks" },
    { s: "whale", p: "whales" },
    { s: "frog", p: "frogs" },
    { s: "snake", p: "snakes" },
    { s: "owl", p: "owls" },
    { s: "crow", p: "crows" },
    { s: "duck", p: "ducks" },
    { s: "goat", p: "goats" },
    { s: "horse", p: "horses" },
    { s: "mouse", p: "mice" },
    { s: "rabbit", p: "rabbits" },
    { s: "penguin", p: "penguins" },
    { s: "dragon", p: "dragons" },
    { s: "monkey", p: "monkeys" },
    { s: "parrot", p: "parrots" },
    { s: "robot", p: "robots" },
    { s: "wizard", p: "wizards" },
    { s: "knight", p: "knights" },
    { s: "pirate", p: "pirates" },
    { s: "ninja", p: "ninjas" },
    { s: "giant", p: "giants" },
    { s: "ghost", p: "ghosts" },
    { s: "chef", p: "chefs" },
    { s: "clown", p: "clowns" },
    { s: "king", p: "kings" },
    { s: "queen", p: "queens" },
    { s: "thief", p: "thieves" },
    { s: "pilot", p: "pilots" },
    { s: "doctor", p: "doctors" },
    { s: "farmer", p: "farmers" },
    { s: "sailor", p: "sailors" },
    { s: "dancer", p: "dancers" },
    { s: "singer", p: "singers" },
    { s: "hunter", p: "hunters" },
    { s: "baker", p: "bakers" },
    { s: "cake", p: "cakes" },
    { s: "pizza", p: "pizzas" },
    { s: "donut", p: "donuts" },
    { s: "taco", p: "tacos" },
    { s: "mango", p: "mangos" },
    { s: "lemon", p: "lemons" },
    { s: "melon", p: "melons" },
    { s: "cookie", p: "cookies" },
    { s: "pickle", p: "pickles" },
    { s: "waffle", p: "waffles" },
    { s: "pretzel", p: "pretzels" },
    { s: "sword", p: "swords" },
    { s: "shield", p: "shields" },
    { s: "hammer", p: "hammers" },
    { s: "arrow", p: "arrows" },
    { s: "rocket", p: "rockets" },
    { s: "piano", p: "pianos" },
    { s: "guitar", p: "guitars" },
    { s: "trumpet", p: "trumpets" },
    { s: "violin", p: "violins" },
    { s: "castle", p: "castles" },
    { s: "tower", p: "towers" },
    { s: "bridge", p: "bridges" },
    { s: "tunnel", p: "tunnels" },
    { s: "island", p: "islands" },
    { s: "volcano", p: "volcanos" },
    { s: "mountain", p: "mountains" },
    { s: "forest", p: "forests" },
    { s: "river", p: "rivers" },
    { s: "ocean", p: "oceans" },
    { s: "planet", p: "planets" },
    { s: "comet", p: "comets" },
    { s: "crystal", p: "crystals" },
    { s: "diamond", p: "diamonds" },
    { s: "trophy", p: "trophies" },
    { s: "coin", p: "coins" },
    { s: "jewel", p: "jewels" },
    { s: "crown", p: "crowns" },
    { s: "mirror", p: "mirrors" },
    { s: "candle", p: "candles" },
    { s: "lantern", p: "lanterns" },
    { s: "barrel", p: "barrels" },
    { s: "basket", p: "baskets" },
    { s: "bottle", p: "bottles" },
    { s: "anchor", p: "anchors" },
    { s: "compass", p: "compasses" },
    { s: "ladder", p: "ladders" },
    { s: "wagon", p: "wagons" },
    { s: "balloon", p: "balloons" },
    { s: "kite", p: "kites" },
    { s: "blanket", p: "blankets" },
    { s: "pillow", p: "pillows" },
    { s: "puppet", p: "puppets" },
    { s: "trumpet", p: "trumpets" },
    { s: "marble", p: "marbles" },
    { s: "puzzle", p: "puzzles" },
    { s: "ticket", p: "tickets" },
    { s: "secret", p: "secrets" },
    { s: "dream", p: "dreams" },
    { s: "storm", p: "storms" }
  ],

  // Verbs with singular (3rd person) and plural/base forms
  verbs: [
    { s: "steals", p: "steal" },
    { s: "chases", p: "chase" },
    { s: "finds", p: "find" },
    { s: "hides", p: "hide" },
    { s: "throws", p: "throw" },
    { s: "catches", p: "catch" },
    { s: "drops", p: "drop" },
    { s: "grabs", p: "grab" },
    { s: "kicks", p: "kick" },
    { s: "breaks", p: "break" },
    { s: "builds", p: "build" },
    { s: "burns", p: "burn" },
    { s: "buries", p: "bury" },
    { s: "carries", p: "carry" },
    { s: "climbs", p: "climb" },
    { s: "cooks", p: "cook" },
    { s: "counts", p: "count" },
    { s: "crushes", p: "crush" },
    { s: "draws", p: "draw" },
    { s: "drinks", p: "drink" },
    { s: "eats", p: "eat" },
    { s: "fights", p: "fight" },
    { s: "flies", p: "fly" },
    { s: "follows", p: "follow" },
    { s: "freezes", p: "freeze" },
    { s: "guards", p: "guard" },
    { s: "haunts", p: "haunt" },
    { s: "hugs", p: "hug" },
    { s: "hunts", p: "hunt" },
    { s: "ignores", p: "ignore" },
    { s: "invents", p: "invent" },
    { s: "joins", p: "join" },
    { s: "jumps", p: "jump" },
    { s: "launches", p: "launch" },
    { s: "leads", p: "lead" },
    { s: "lifts", p: "lift" },
    { s: "loves", p: "love" },
    { s: "melts", p: "melt" },
    { s: "mixes", p: "mix" },
    { s: "moves", p: "move" },
    { s: "needs", p: "need" },
    { s: "obeys", p: "obey" },
    { s: "opens", p: "open" },
    { s: "paints", p: "paint" },
    { s: "plants", p: "plant" },
    { s: "plays", p: "play" },
    { s: "pulls", p: "pull" },
    { s: "pushes", p: "push" },
    { s: "rescues", p: "rescue" },
    { s: "rides", p: "ride" },
    { s: "rocks", p: "rock" },
    { s: "saves", p: "save" },
    { s: "seeks", p: "seek" },
    { s: "sells", p: "sell" },
    { s: "shakes", p: "shake" },
    { s: "shares", p: "share" },
    { s: "shields", p: "shield" },
    { s: "shows", p: "show" },
    { s: "shrinks", p: "shrink" },
    { s: "sings", p: "sing" },
    { s: "slaps", p: "slap" },
    { s: "smashes", p: "smash" },
    { s: "sniffs", p: "sniff" },
    { s: "solves", p: "solve" },
    { s: "spins", p: "spin" },
    { s: "splashes", p: "splash" },
    { s: "stacks", p: "stack" },
    { s: "summons", p: "summon" },
    { s: "swaps", p: "swap" },
    { s: "tames", p: "tame" },
    { s: "tastes", p: "taste" },
    { s: "teaches", p: "teach" },
    { s: "tests", p: "test" },
    { s: "tickles", p: "tickle" },
    { s: "toasts", p: "toast" },
    { s: "tosses", p: "toss" },
    { s: "tracks", p: "track" },
    { s: "trades", p: "trade" },
    { s: "trains", p: "train" },
    { s: "traps", p: "trap" },
    { s: "trusts", p: "trust" },
    { s: "unlocks", p: "unlock" },
    { s: "visits", p: "visit" },
    { s: "wants", p: "want" },
    { s: "washes", p: "wash" },
    { s: "watches", p: "watch" },
    { s: "waves", p: "wave" },
    { s: "wears", p: "wear" },
    { s: "wins", p: "win" },
    { s: "wraps", p: "wrap" }
  ],

  // Adverbs for 5+ word phrases
  adverbs: [
    "always", "angrily", "badly", "barely", "blindly", "boldly", "bravely",
    "briefly", "briskly", "calmly", "carefully", "cheaply", "clearly", "closely",
    "coldly", "coolly", "crazily", "daily", "deeply", "eagerly", "easily",
    "even", "fairly", "finally", "fiercely", "fondly", "freely", "fully",
    "gently", "gladly", "gracefully", "greedily", "happily", "hardly", "harshly",
    "hastily", "honestly", "hopefully", "hungrily", "joyfully", "justly", "keenly",
    "kindly", "lazily", "lightly", "likely", "loudly", "lovingly", "madly",
    "mainly", "merely", "mostly", "nearly", "neatly", "nervously", "never",
    "nicely", "noisily", "oddly", "often", "only", "openly", "partly",
    "perfectly", "politely", "poorly", "possibly", "proudly", "purely", "quickly",
    "quietly", "rarely", "rapidly", "readily", "really", "richly", "rightly",
    "roughly", "rudely", "sadly", "safely", "secretly", "sharply", "shyly",
    "silently", "simply", "slowly", "slyly", "smoothly", "sneakily", "softly",
    "solely", "sometimes", "soon", "speedily", "steadily", "strangely", "strongly",
    "suddenly", "swiftly", "tenderly", "tightly", "totally", "truly", "usually",
    "vastly", "warmly", "weakly", "weirdly", "wildly", "wisely", "wrongly"
  ],

  // Adjectives
  adjectives: [
    "angry", "brave", "calm", "clever", "clumsy", "crazy", "creepy", "curious",
    "dancing", "daring", "dizzy", "dreamy", "dusty", "eager", "evil", "fancy",
    "fierce", "flying", "foggy", "frozen", "funny", "fuzzy", "gentle", "giant",
    "gloomy", "golden", "greedy", "grumpy", "guilty", "hairy", "happy", "hidden",
    "hollow", "hungry", "icy", "itchy", "jazzy", "jealous", "jolly", "jumpy",
    "kind", "lazy", "lonely", "lost", "lucky", "magic", "mighty", "misty",
    "muddy", "nervous", "noble", "noisy", "odd", "orange", "peaceful", "pink",
    "playful", "proud", "purple", "quick", "quiet", "random", "royal", "rusty",
    "sad", "salty", "scary", "secret", "shiny", "shy", "silent", "silly",
    "silver", "sleepy", "slimy", "slow", "sly", "small", "smelly", "smoky",
    "sneaky", "soggy", "spicy", "spooky", "spotted", "starving", "sticky", "stormy",
    "strange", "strong", "stubborn", "sunny", "swift", "talking", "tall", "thirsty",
    "tiny", "tired", "tricky", "twisted", "ugly", "unlucky", "violet", "wacky",
    "wandering", "wealthy", "weird", "wicked", "wild", "windy", "wise", "worried",
    "young", "zany", "zealous", "zippy"
  ],

  // Words organized by starting letter for alliterative mode
  byLetter: {
    b: {
      adj: ["brave", "bold", "bumpy", "bright", "broken", "bushy", "bitter", "blazing"],
      adv: ["badly", "barely", "blindly", "boldly", "bravely", "briefly", "briskly"],
      noun: [
        { s: "bear", p: "bears" }, { s: "baker", p: "bakers" }, { s: "balloon", p: "balloons" },
        { s: "barrel", p: "barrels" }, { s: "basket", p: "baskets" }, { s: "blanket", p: "blankets" },
        { s: "bottle", p: "bottles" }, { s: "bridge", p: "bridges" }, { s: "bandit", p: "bandits" },
        { s: "beetle", p: "beetles" }, { s: "buffalo", p: "buffalos" }, { s: "bunny", p: "bunnies" }
      ],
      verb: [
        { s: "builds", p: "build" }, { s: "breaks", p: "break" }, { s: "burns", p: "burn" },
        { s: "buries", p: "bury" }, { s: "bounces", p: "bounce" }, { s: "battles", p: "battle" },
        { s: "blocks", p: "block" }, { s: "blasts", p: "blast" }
      ]
    },
    c: {
      adj: ["calm", "clever", "clumsy", "crazy", "creepy", "curious", "crafty", "cloudy"],
      adv: ["calmly", "carefully", "cheaply", "clearly", "closely", "coldly", "coolly", "crazily"],
      noun: [
        { s: "cat", p: "cats" }, { s: "chef", p: "chefs" }, { s: "clown", p: "clowns" },
        { s: "castle", p: "castles" }, { s: "cake", p: "cakes" }, { s: "candle", p: "candles" },
        { s: "captain", p: "captains" }, { s: "cobra", p: "cobras" }, { s: "coin", p: "coins" },
        { s: "cookie", p: "cookies" }, { s: "compass", p: "compasses" }, { s: "crystal", p: "crystals" }
      ],
      verb: [
        { s: "catches", p: "catch" }, { s: "carries", p: "carry" }, { s: "climbs", p: "climb" },
        { s: "cooks", p: "cook" }, { s: "counts", p: "count" }, { s: "crushes", p: "crush" },
        { s: "chases", p: "chase" }, { s: "carves", p: "carve" }
      ]
    },
    d: {
      adj: ["dancing", "daring", "dizzy", "dreamy", "dusty", "dark", "damp", "deadly"],
      adv: ["daily", "deeply", "dearly", "dimly", "directly", "doubtfully", "dryly"],
      noun: [
        { s: "dragon", p: "dragons" }, { s: "dancer", p: "dancers" }, { s: "doctor", p: "doctors" },
        { s: "donut", p: "donuts" }, { s: "diamond", p: "diamonds" }, { s: "duck", p: "ducks" },
        { s: "dolphin", p: "dolphins" }, { s: "demon", p: "demons" }, { s: "druid", p: "druids" },
        { s: "dwarf", p: "dwarves" }, { s: "dagger", p: "daggers" }, { s: "drum", p: "drums" }
      ],
      verb: [
        { s: "drops", p: "drop" }, { s: "draws", p: "draw" }, { s: "drinks", p: "drink" },
        { s: "dances", p: "dance" }, { s: "digs", p: "dig" }, { s: "dives", p: "dive" },
        { s: "dodges", p: "dodge" }, { s: "drags", p: "drag" }
      ]
    },
    f: {
      adj: ["fierce", "flying", "foggy", "frozen", "funny", "fuzzy", "fancy", "famous"],
      adv: ["fairly", "finally", "fiercely", "fondly", "freely", "fully", "furiously"],
      noun: [
        { s: "fox", p: "foxes" }, { s: "farmer", p: "farmers" }, { s: "falcon", p: "falcons" },
        { s: "forest", p: "forests" }, { s: "frog", p: "frogs" }, { s: "fish", p: "fish" },
        { s: "fighter", p: "fighters" }, { s: "flame", p: "flames" }, { s: "flute", p: "flutes" },
        { s: "fossil", p: "fossils" }, { s: "fountain", p: "fountains" }, { s: "feather", p: "feathers" }
      ],
      verb: [
        { s: "finds", p: "find" }, { s: "fights", p: "fight" }, { s: "flies", p: "fly" },
        { s: "follows", p: "follow" }, { s: "freezes", p: "freeze" }, { s: "flips", p: "flip" },
        { s: "flings", p: "fling" }, { s: "floods", p: "flood" }
      ]
    },
    g: {
      adj: ["giant", "gloomy", "golden", "greedy", "grumpy", "guilty", "gentle", "graceful"],
      adv: ["gently", "gladly", "gracefully", "greedily", "grimly", "grossly"],
      noun: [
        { s: "ghost", p: "ghosts" }, { s: "giant", p: "giants" }, { s: "goat", p: "goats" },
        { s: "goblin", p: "goblins" }, { s: "guitar", p: "guitars" }, { s: "garden", p: "gardens" },
        { s: "goose", p: "geese" }, { s: "grape", p: "grapes" }, { s: "gem", p: "gems" },
        { s: "glove", p: "gloves" }, { s: "gadget", p: "gadgets" }, { s: "gopher", p: "gophers" }
      ],
      verb: [
        { s: "grabs", p: "grab" }, { s: "guards", p: "guard" }, { s: "grows", p: "grow" },
        { s: "glides", p: "glide" }, { s: "grinds", p: "grind" }, { s: "gulps", p: "gulp" },
        { s: "gathers", p: "gather" }, { s: "guides", p: "guide" }
      ]
    },
    h: {
      adj: ["happy", "hairy", "hidden", "hollow", "hungry", "humble", "hasty", "hazy"],
      adv: ["happily", "hardly", "harshly", "hastily", "honestly", "hopefully", "hungrily"],
      noun: [
        { s: "horse", p: "horses" }, { s: "hunter", p: "hunters" }, { s: "hammer", p: "hammers" },
        { s: "hawk", p: "hawks" }, { s: "hero", p: "heroes" }, { s: "hippo", p: "hippos" },
        { s: "helmet", p: "helmets" }, { s: "hound", p: "hounds" }, { s: "hermit", p: "hermits" },
        { s: "hornet", p: "hornets" }, { s: "harp", p: "harps" }, { s: "hedgehog", p: "hedgehogs" }
      ],
      verb: [
        { s: "hides", p: "hide" }, { s: "haunts", p: "haunt" }, { s: "hugs", p: "hug" },
        { s: "hunts", p: "hunt" }, { s: "hurls", p: "hurl" }, { s: "hops", p: "hop" },
        { s: "hoards", p: "hoard" }, { s: "helps", p: "help" }
      ]
    },
    j: {
      adj: ["jazzy", "jealous", "jolly", "jumpy", "jaded", "joyful", "jumbo", "jagged"],
      adv: ["jaggedly", "jauntily", "jokingly", "joyfully", "justly"],
      noun: [
        { s: "jaguar", p: "jaguars" }, { s: "jester", p: "jesters" }, { s: "jewel", p: "jewels" },
        { s: "jacket", p: "jackets" }, { s: "journal", p: "journals" }, { s: "jungle", p: "jungles" },
        { s: "javelin", p: "javelins" }, { s: "jelly", p: "jellies" }, { s: "judge", p: "judges" },
        { s: "jackal", p: "jackals" }, { s: "jet", p: "jets" }, { s: "jar", p: "jars" }
      ],
      verb: [
        { s: "jumps", p: "jump" }, { s: "joins", p: "join" }, { s: "juggles", p: "juggle" },
        { s: "jolts", p: "jolt" }, { s: "jabs", p: "jab" }, { s: "jingles", p: "jingle" },
        { s: "judges", p: "judge" }, { s: "journeys", p: "journey" }
      ]
    },
    l: {
      adj: ["lazy", "lonely", "lost", "lucky", "loud", "lumpy", "lively", "loopy"],
      adv: ["lazily", "lightly", "likely", "loosely", "loudly", "lovingly"],
      noun: [
        { s: "lion", p: "lions" }, { s: "ladder", p: "ladders" }, { s: "lantern", p: "lanterns" },
        { s: "lemon", p: "lemons" }, { s: "llama", p: "llamas" }, { s: "leopard", p: "leopards" },
        { s: "lobster", p: "lobsters" }, { s: "lizard", p: "lizards" }, { s: "legend", p: "legends" },
        { s: "lawyer", p: "lawyers" }, { s: "lotus", p: "lotuses" }, { s: "locket", p: "lockets" }
      ],
      verb: [
        { s: "leads", p: "lead" }, { s: "lifts", p: "lift" }, { s: "loves", p: "love" },
        { s: "launches", p: "launch" }, { s: "leaps", p: "leap" }, { s: "licks", p: "lick" },
        { s: "locks", p: "lock" }, { s: "lures", p: "lure" }
      ]
    },
    m: {
      adj: ["magic", "mighty", "misty", "muddy", "mysterious", "merry", "moody", "massive"],
      adv: ["madly", "mainly", "merely", "mightily", "mildly", "mostly", "mysteriously"],
      noun: [
        { s: "monkey", p: "monkeys" }, { s: "mouse", p: "mice" }, { s: "mirror", p: "mirrors" },
        { s: "mountain", p: "mountains" }, { s: "mango", p: "mangos" }, { s: "marble", p: "marbles" },
        { s: "monster", p: "monsters" }, { s: "mermaid", p: "mermaids" }, { s: "merchant", p: "merchants" },
        { s: "moose", p: "moose" }, { s: "mushroom", p: "mushrooms" }, { s: "mammoth", p: "mammoths" }
      ],
      verb: [
        { s: "melts", p: "melt" }, { s: "mixes", p: "mix" }, { s: "moves", p: "move" },
        { s: "matches", p: "match" }, { s: "marches", p: "march" }, { s: "munches", p: "munch" },
        { s: "milks", p: "milk" }, { s: "mines", p: "mine" }
      ]
    },
    n: {
      adj: ["nervous", "noble", "noisy", "nifty", "nimble", "nutty", "nasty", "narrow"],
      adv: ["namely", "nastily", "neatly", "nervously", "never", "nicely", "noisily"],
      noun: [
        { s: "ninja", p: "ninjas" }, { s: "knight", p: "knights" }, { s: "newt", p: "newts" },
        { s: "nurse", p: "nurses" }, { s: "needle", p: "needles" }, { s: "nest", p: "nests" },
        { s: "noodle", p: "noodles" }, { s: "narwhal", p: "narwhals" }, { s: "noble", p: "nobles" },
        { s: "nomad", p: "nomads" }, { s: "napkin", p: "napkins" }, { s: "nugget", p: "nuggets" }
      ],
      verb: [
        { s: "needs", p: "need" }, { s: "nibbles", p: "nibble" }, { s: "nudges", p: "nudge" },
        { s: "nabs", p: "nab" }, { s: "names", p: "name" }, { s: "notices", p: "notice" },
        { s: "nurses", p: "nurse" }, { s: "nuzzles", p: "nuzzle" }
      ]
    },
    p: {
      adj: ["playful", "proud", "purple", "peaceful", "pink", "plucky", "pointy", "puffy"],
      adv: ["partly", "perfectly", "politely", "poorly", "possibly", "proudly", "purely"],
      noun: [
        { s: "pirate", p: "pirates" }, { s: "penguin", p: "penguins" }, { s: "pilot", p: "pilots" },
        { s: "parrot", p: "parrots" }, { s: "pizza", p: "pizzas" }, { s: "piano", p: "pianos" },
        { s: "pickle", p: "pickles" }, { s: "planet", p: "planets" }, { s: "pretzel", p: "pretzels" },
        { s: "panda", p: "pandas" }, { s: "puzzle", p: "puzzles" }, { s: "phoenix", p: "phoenixes" }
      ],
      verb: [
        { s: "plays", p: "play" }, { s: "pulls", p: "pull" }, { s: "pushes", p: "push" },
        { s: "paints", p: "paint" }, { s: "plants", p: "plant" }, { s: "pokes", p: "poke" },
        { s: "polishes", p: "polish" }, { s: "punches", p: "punch" }
      ]
    },
    r: {
      adj: ["royal", "rusty", "random", "rainy", "rapid", "rotten", "rowdy", "restless"],
      adv: ["randomly", "rapidly", "rarely", "readily", "really", "richly", "roughly", "rudely"],
      noun: [
        { s: "robot", p: "robots" }, { s: "rabbit", p: "rabbits" }, { s: "rocket", p: "rockets" },
        { s: "river", p: "rivers" }, { s: "raven", p: "ravens" }, { s: "ranger", p: "rangers" },
        { s: "riddle", p: "riddles" }, { s: "rhino", p: "rhinos" }, { s: "raft", p: "rafts" },
        { s: "ring", p: "rings" }, { s: "ruby", p: "rubies" }, { s: "raccoon", p: "raccoons" }
      ],
      verb: [
        { s: "rides", p: "ride" }, { s: "rescues", p: "rescue" }, { s: "rocks", p: "rock" },
        { s: "races", p: "race" }, { s: "rattles", p: "rattle" }, { s: "roasts", p: "roast" },
        { s: "rolls", p: "roll" }, { s: "robs", p: "rob" }
      ]
    },
    s: {
      adj: ["sneaky", "silly", "spooky", "stormy", "strange", "strong", "shy", "salty"],
      adv: ["sadly", "safely", "secretly", "sharply", "shyly", "silently", "simply", "slowly", "slyly", "smoothly", "sneakily", "softly", "speedily", "strangely", "strongly", "suddenly", "swiftly"],
      noun: [
        { s: "shark", p: "sharks" }, { s: "snake", p: "snakes" }, { s: "sailor", p: "sailors" },
        { s: "singer", p: "singers" }, { s: "spider", p: "spiders" }, { s: "sword", p: "swords" },
        { s: "shield", p: "shields" }, { s: "storm", p: "storms" }, { s: "secret", p: "secrets" },
        { s: "squirrel", p: "squirrels" }, { s: "skeleton", p: "skeletons" }, { s: "sphinx", p: "sphinxes" }
      ],
      verb: [
        { s: "steals", p: "steal" }, { s: "saves", p: "save" }, { s: "seeks", p: "seek" },
        { s: "shakes", p: "shake" }, { s: "shares", p: "share" }, { s: "shows", p: "show" },
        { s: "sings", p: "sing" }, { s: "smashes", p: "smash" }
      ]
    },
    t: {
      adj: ["tiny", "tired", "tricky", "twisted", "tall", "thirsty", "talking", "tough"],
      adv: ["tenderly", "tightly", "totally", "truly", "terribly", "thankfully"],
      noun: [
        { s: "tiger", p: "tigers" }, { s: "thief", p: "thieves" }, { s: "tower", p: "towers" },
        { s: "tunnel", p: "tunnels" }, { s: "trophy", p: "trophies" }, { s: "turtle", p: "turtles" },
        { s: "taco", p: "tacos" }, { s: "trumpet", p: "trumpets" }, { s: "ticket", p: "tickets" },
        { s: "toad", p: "toads" }, { s: "tornado", p: "tornados" }, { s: "troll", p: "trolls" }
      ],
      verb: [
        { s: "throws", p: "throw" }, { s: "trades", p: "trade" }, { s: "trains", p: "train" },
        { s: "traps", p: "trap" }, { s: "tosses", p: "toss" }, { s: "tickles", p: "tickle" },
        { s: "tracks", p: "track" }, { s: "trusts", p: "trust" }
      ]
    },
    w: {
      adj: ["wild", "wise", "wicked", "windy", "weird", "wealthy", "wacky", "wobbly"],
      adv: ["warmly", "weakly", "weirdly", "widely", "wildly", "wisely", "wrongly"],
      noun: [
        { s: "wolf", p: "wolves" }, { s: "wizard", p: "wizards" }, { s: "whale", p: "whales" },
        { s: "wagon", p: "wagons" }, { s: "warrior", p: "warriors" }, { s: "waffle", p: "waffles" },
        { s: "walrus", p: "walruses" }, { s: "wombat", p: "wombats" }, { s: "witch", p: "witches" },
        { s: "weasel", p: "weasels" }, { s: "wrench", p: "wrenches" }, { s: "widow", p: "widows" }
      ],
      verb: [
        { s: "watches", p: "watch" }, { s: "wants", p: "want" }, { s: "washes", p: "wash" },
        { s: "waves", p: "wave" }, { s: "wears", p: "wear" }, { s: "wins", p: "win" },
        { s: "wraps", p: "wrap" }, { s: "wrestles", p: "wrestle" }
      ]
    }
  },

  // Themed word groups for scene mode
  themes: {
    kitchen: {
      adj: ["hungry", "salty", "spicy", "frozen", "crispy", "burnt", "fresh", "greasy"],
      adv: ["hungrily", "quickly", "slowly", "messily", "carefully", "greedily", "eagerly"],
      noun: [
        { s: "chef", p: "chefs" }, { s: "baker", p: "bakers" }, { s: "cook", p: "cooks" },
        { s: "pizza", p: "pizzas" }, { s: "cake", p: "cakes" }, { s: "cookie", p: "cookies" },
        { s: "donut", p: "donuts" }, { s: "waffle", p: "waffles" }, { s: "taco", p: "tacos" },
        { s: "pretzel", p: "pretzels" }, { s: "mango", p: "mangos" }, { s: "lemon", p: "lemons" },
        { s: "pickle", p: "pickles" }, { s: "melon", p: "melons" }, { s: "pepper", p: "peppers" }
      ],
      verb: [
        { s: "cooks", p: "cook" }, { s: "chops", p: "chop" }, { s: "fries", p: "fry" },
        { s: "bakes", p: "bake" }, { s: "toasts", p: "toast" }, { s: "tastes", p: "taste" },
        { s: "mixes", p: "mix" }, { s: "burns", p: "burn" }, { s: "eats", p: "eat" }
      ]
    },
    ocean: {
      adj: ["salty", "foggy", "stormy", "deep", "frozen", "murky", "calm", "wavy"],
      adv: ["deeply", "swiftly", "silently", "fiercely", "calmly", "suddenly", "bravely"],
      noun: [
        { s: "shark", p: "sharks" }, { s: "whale", p: "whales" }, { s: "dolphin", p: "dolphins" },
        { s: "pirate", p: "pirates" }, { s: "sailor", p: "sailors" }, { s: "captain", p: "captains" },
        { s: "anchor", p: "anchors" }, { s: "compass", p: "compasses" }, { s: "island", p: "islands" },
        { s: "lobster", p: "lobsters" }, { s: "octopus", p: "octopi" }, { s: "mermaid", p: "mermaids" },
        { s: "jellyfish", p: "jellyfish" }, { s: "kraken", p: "krakens" }, { s: "coral", p: "corals" }
      ],
      verb: [
        { s: "swims", p: "swim" }, { s: "sails", p: "sail" }, { s: "dives", p: "dive" },
        { s: "floats", p: "float" }, { s: "splashes", p: "splash" }, { s: "catches", p: "catch" },
        { s: "hunts", p: "hunt" }, { s: "explores", p: "explore" }, { s: "rescues", p: "rescue" }
      ]
    },
    fantasy: {
      adj: ["magic", "ancient", "golden", "cursed", "enchanted", "mighty", "wicked", "noble"],
      adv: ["bravely", "fiercely", "secretly", "boldly", "wisely", "darkly", "swiftly"],
      noun: [
        { s: "dragon", p: "dragons" }, { s: "wizard", p: "wizards" }, { s: "knight", p: "knights" },
        { s: "king", p: "kings" }, { s: "queen", p: "queens" }, { s: "castle", p: "castles" },
        { s: "sword", p: "swords" }, { s: "shield", p: "shields" }, { s: "crown", p: "crowns" },
        { s: "goblin", p: "goblins" }, { s: "phoenix", p: "phoenixes" }, { s: "unicorn", p: "unicorns" },
        { s: "troll", p: "trolls" }, { s: "crystal", p: "crystals" }, { s: "potion", p: "potions" }
      ],
      verb: [
        { s: "battles", p: "battle" }, { s: "casts", p: "cast" }, { s: "guards", p: "guard" },
        { s: "summons", p: "summon" }, { s: "enchants", p: "enchant" }, { s: "slays", p: "slay" },
        { s: "curses", p: "curse" }, { s: "conquers", p: "conquer" }, { s: "rescues", p: "rescue" }
      ]
    },
    space: {
      adj: ["cosmic", "frozen", "glowing", "distant", "alien", "giant", "spinning", "blazing"],
      adv: ["silently", "swiftly", "boldly", "suddenly", "slowly", "endlessly", "finally"],
      noun: [
        { s: "rocket", p: "rockets" }, { s: "planet", p: "planets" }, { s: "comet", p: "comets" },
        { s: "robot", p: "robots" }, { s: "pilot", p: "pilots" }, { s: "alien", p: "aliens" },
        { s: "meteor", p: "meteors" }, { s: "galaxy", p: "galaxies" }, { s: "crater", p: "craters" },
        { s: "satellite", p: "satellites" }, { s: "astronaut", p: "astronauts" }, { s: "laser", p: "lasers" },
        { s: "asteroid", p: "asteroids" }, { s: "nebula", p: "nebulas" }, { s: "station", p: "stations" }
      ],
      verb: [
        { s: "launches", p: "launch" }, { s: "orbits", p: "orbit" }, { s: "explores", p: "explore" },
        { s: "crashes", p: "crash" }, { s: "beams", p: "beam" }, { s: "scans", p: "scan" },
        { s: "blasts", p: "blast" }, { s: "discovers", p: "discover" }, { s: "lands", p: "land" }
      ]
    },
    jungle: {
      adj: ["wild", "fierce", "sneaky", "giant", "striped", "spotted", "hungry", "ancient"],
      adv: ["silently", "fiercely", "swiftly", "suddenly", "carefully", "wildly", "hungrily"],
      noun: [
        { s: "tiger", p: "tigers" }, { s: "monkey", p: "monkeys" }, { s: "parrot", p: "parrots" },
        { s: "snake", p: "snakes" }, { s: "panther", p: "panthers" }, { s: "gorilla", p: "gorillas" },
        { s: "hunter", p: "hunters" }, { s: "explorer", p: "explorers" }, { s: "vine", p: "vines" },
        { s: "temple", p: "temples" }, { s: "jaguar", p: "jaguars" }, { s: "toucan", p: "toucans" },
        { s: "spider", p: "spiders" }, { s: "frog", p: "frogs" }, { s: "treasure", p: "treasures" }
      ],
      verb: [
        { s: "hunts", p: "hunt" }, { s: "swings", p: "swing" }, { s: "climbs", p: "climb" },
        { s: "hides", p: "hide" }, { s: "stalks", p: "stalk" }, { s: "chases", p: "chase" },
        { s: "discovers", p: "discover" }, { s: "guards", p: "guard" }, { s: "traps", p: "trap" }
      ]
    },
    winter: {
      adj: ["frozen", "icy", "cold", "frosty", "snowy", "shivering", "cozy", "bitter"],
      adv: ["coldly", "slowly", "silently", "suddenly", "bravely", "deeply", "fiercely"],
      noun: [
        { s: "penguin", p: "penguins" }, { s: "polar bear", p: "polar bears" }, { s: "snowman", p: "snowmen" },
        { s: "igloo", p: "igloos" }, { s: "sled", p: "sleds" }, { s: "blizzard", p: "blizzards" },
        { s: "icicle", p: "icicles" }, { s: "glacier", p: "glaciers" }, { s: "yeti", p: "yetis" },
        { s: "mammoth", p: "mammoths" }, { s: "walrus", p: "walruses" }, { s: "seal", p: "seals" },
        { s: "mitten", p: "mittens" }, { s: "cabin", p: "cabins" }, { s: "snowflake", p: "snowflakes" }
      ],
      verb: [
        { s: "freezes", p: "freeze" }, { s: "shivers", p: "shiver" }, { s: "slides", p: "slide" },
        { s: "melts", p: "melt" }, { s: "huddles", p: "huddle" }, { s: "trudges", p: "trudge" },
        { s: "buries", p: "bury" }, { s: "builds", p: "build" }, { s: "throws", p: "throw" }
      ]
    }
  }
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = words;
}
