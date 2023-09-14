const questions = [
	{
		category: "Entertainment: Board Games",
		type: "multiple",
		difficulty: "hard",
		question:
			"The board game &quot;Monopoly&quot; is a variation of what board game?",
		correct_answer: "The Landlord&#039;s Game",
		incorrect_answers: [
			"Territorial Dispute",
			"Property Feud",
			"The Monopolist&#039;s Game",
		],
	},
	{
		category: "Entertainment: Video Games",
		type: "multiple",
		difficulty: "medium",
		question:
			"When Halo 3: ODST was unveiled in 2008, it had a different title. What was the game formally called?",
		correct_answer: "Halo 3: Recon",
		incorrect_answers: [
			"Halo 3: Helljumpers",
			"Halo 3: Phantom",
			"Halo 3: Guerilla",
		],
	},
	{
		category: "Entertainment: Video Games",
		type: "multiple",
		difficulty: "easy",
		question:
			"Who&#039;s the voice actor for Thrall in the Warcraft game series?",
		correct_answer: "Chris Metzen",
		incorrect_answers: [
			"Ben Affleck",
			"Jason Derulo",
			"Jim Carrey",
		],
	},
	{
		category: "Celebrities",
		type: "multiple",
		difficulty: "medium",
		question:
			"Which actress&#039;s real name was Frances Ethel Gumm?",
		correct_answer: "Judy Garland",
		incorrect_answers: [
			"Doris Day",
			"Julie Andrews",
			"Marilyn Monroe",
		],
	},
	{
		category: "Entertainment: Music",
		type: "multiple",
		difficulty: "easy",
		question: "Who is the lead singer of Pearl Jam?",
		correct_answer: "Eddie Vedder",
		incorrect_answers: [
			"Ozzy Osbourne",
			"Stone Gossard",
			"Kurt Cobain",
		],
	},
	
	{
		category: "Science & Nature",
		type: "multiple",
		difficulty: "medium",
		question:
			"Which chemical element has the lowest boiling point?",
		correct_answer: "Helium",
		incorrect_answers: ["Hydrogen", "Neon", "Nitrogen"],
	},
	{
		category: "Entertainment: Film",
		type: "multiple",
		difficulty: "hard",
		question:
			"What did Alfred Hitchcock use as blood in the film &quot;Psycho&quot;? ",
		correct_answer: "Chocolate syrup",
		incorrect_answers: [
			"Ketchup",
			"Red food coloring",
			"Maple syrup",
		],
	},
	{
		category: "General Knowledge",
		type: "multiple",
		difficulty: "easy",
		question:
			"What is the shape of the toy invented by Hungarian professor Ernő Rubik?",
		correct_answer: "Cube",
		incorrect_answers: ["Sphere", "Cylinder", "Pyramid"],
	},
	{
		category: "Entertainment: Music",
		type: "multiple",
		difficulty: "medium",
		question:
			"What genre of EDM is the Dutch DJ, musician, and remixer Armin van Buuren most well-known for?",
		correct_answer: "Trance",
		incorrect_answers: [
			"House",
			"Drum and Bass",
			"Dubstep",
		],
	},
	{
		category: "Vehicles",
		type: "multiple",
		difficulty: "medium",
		question:
			"Which of the following vehicles featured a full glass roof at base model?",
		correct_answer: "Renault Avantime",
		incorrect_answers: [
			"Chevy Volt",
			"Mercedes-Benz A-Class",
			"Honda Odyssey",
		],
	},
	{
		category: "Entertainment: Video Games",
		type: "multiple",
		difficulty: "medium",
		question:
			"Excluding their instructor, how many members of Class VII are there in the game &quot;Legend of Heroes: Trails of Cold Steel&quot;?",
		correct_answer: "9",
		incorrect_answers: ["6", "10", "3"],
	},
	{
		category: "Entertainment: Cartoon & Animations",
		type: "multiple",
		difficulty: "easy",
		question:
			"When did the last episode of &quot;Futurama&quot; air?",
		correct_answer: "September 4, 2013",
		incorrect_answers: [
			"December 25, 2010",
			"March 28, 1999",
			"On Going",
		],
	},
	{
		category: "Entertainment: Music",
		type: "multiple",
		difficulty: "easy",
		question:
			"Finish these lyrics from the 2016 song &quot;Panda&quot; by Desiigner: &quot;I got broads in _______&quot;.",
		correct_answer: "Atlanta",
		incorrect_answers: ["Savannah", "Augusta", "Marietta"],
	},
	{
		category: "Entertainment: Video Games",
		type: "multiple",
		difficulty: "medium",
		question:
			"What is the name of the final boss in Turok: Dinosaur Hunter?",
		correct_answer: "The Campaigner",
		incorrect_answers: [
			"The Primagen",
			"Oblivion",
			"Lord Tyrannus",
		],
	},
	{
		category: "Entertainment: Japanese Anime & Manga",
		type: "multiple",
		difficulty: "medium",
		question:
			"When was the first episode of Soul Eater released?",
		correct_answer: "2008",
		incorrect_answers: ["2003", "2005", "2011"],
	},
	{
		category: "Entertainment: Japanese Anime & Manga",
		type: "multiple",
		difficulty: "easy",
		question:
			"What is the name of the corgi in Cowboy Bebop?",
		correct_answer: "Einstein",
		incorrect_answers: ["Edward", "Rocket", "Joel"],
	},
	{
		category: "Entertainment: Video Games",
		type: "multiple",
		difficulty: "medium",
		question:
			"&quot;Rollercoaster Tycoon&quot; was programmed mostly entirely in...",
		correct_answer: "x86 Assembly",
		incorrect_answers: ["C++", "C", "ALGOL"],
	},
	{
		category: "Celebrities",
		type: "multiple",
		difficulty: "medium",
		question:
			"Which of these people is NOT a part of the Internet comedy group Mega64?",
		correct_answer: "Jon Jafari",
		incorrect_answers: [
			"Rocco Botte",
			"Derrick Acosta",
			"Shawn Chatfield",
		],
	},
	{
		category: "Entertainment: Video Games",
		type: "multiple",
		difficulty: "medium",
		question:
			"One of the early prototypes of the Sega Dreamcast controller resembled which of the following?",
		correct_answer: "Television Remote",
		incorrect_answers: [
			"Tablet",
			"Hairdryer",
			"Flip Phone",
		],
	},
	{
		category: "Entertainment: Video Games",
		type: "multiple",
		difficulty: "easy",
		question:
			"Gordon Freeman is said to have burnt and destroyed what food in the break room microwave?",
		correct_answer: "Casserole",
		incorrect_answers: [
			"Sub Sandwich",
			"Chicken Soup",
			"Pepperoni Pizza",
		],
	},
	{
		category: "Entertainment: Comics",
		type: "multiple",
		difficulty: "hard",
		question:
			"In what Homestuck Update was [S] Game Over released?",
		correct_answer: "October 25th, 2014",
		incorrect_answers: [
			"April 13th, 2009",
			"April 8th, 2012",
			"August 28th, 2003",
		],
	},
	{
		category: "Entertainment: Music",
		type: "multiple",
		difficulty: "easy",
		question:
			"Which one of these songs did the group &quot;Men At Work&quot; NOT make?",
		correct_answer: "Safety Dance",
		incorrect_answers: [
			"Down Under",
			"Who Can It Be Now?",
			"It&#039;s a Mistake",
		],
	},
	{
		category: "Entertainment: Video Games",
		type: "multiple",
		difficulty: "medium",
		question:
			"Which is not a playable character in the 2005 video game Killer7?",
		correct_answer: "Frank Smith",
		incorrect_answers: [
			"Mask de Smith",
			"Dan Smith",
			"Coyote Smith",
		],
	},
	{
		category: "Entertainment: Comics",
		type: "multiple",
		difficulty: "medium",
		question:
			"Which of the following superheros did Wonder Woman NOT have a love interest in?",
		correct_answer: "Green Arrow",
		incorrect_answers: [
			"Superman",
			"Batman",
			"Steve Trevor",
		],
	},
	{
		category: "Entertainment: Video Games",
		type: "multiple",
		difficulty: "easy",
		question: "In what year was Hearthstone released?",
		correct_answer: "2014",
		incorrect_answers: ["2011", "2013", "2012"],
	},
	{
		category: "Entertainment: Video Games",
		type: "multiple",
		difficulty: "medium",
		question:
			"What was the name of the first MMORPG to popularize the genre?",
		correct_answer: "Ultima Online",
		incorrect_answers: [
			"World of Warcraft",
			"Meridian 59",
			"Guild Wars",
		],
	},
	{
		category: "General Knowledge",
		type: "multiple",
		difficulty: "medium",
		question:
			"What direction does the Statue of Liberty face?",
		correct_answer: "Southeast",
		incorrect_answers: [
			"Southwest",
			"Northwest",
			"Northeast",
		],
	},
	{
		category: "Celebrities",
		type: "multiple",
		difficulty: "medium",
		question:
			"Which radio personality calls himself &quot;The King of All Media&quot;?",
		correct_answer: "Howard Stern",
		incorrect_answers: [
			"Rush Limbaugh",
			"Pete Tong",
			"Ryan Seacrest",
		],
	},
	{
		category: "General Knowledge",
		type: "multiple",
		difficulty: "easy",
		question: "How tall is the Burj Khalifa?",
		correct_answer: "2,722 ft",
		incorrect_answers: ["2,717 ft", "2,546 ft", "3,024 ft"],
	},
	{
		category: "Entertainment: Video Games",
		type: "multiple",
		difficulty: "medium",
		question:
			"Which of the following Copy Abilities was only featured in &quot;Kirby &amp; The Amazing Mirror&quot;?",
		correct_answer: "Mini",
		incorrect_answers: ["Magic", "Smash", "Missile"],
	},
	{
		category: "Entertainment: Japanese Anime & Manga",
		type: "multiple",
		difficulty: "easy",
		question:
			"Which of the following originated as a manga?",
		correct_answer: "Akira",
		incorrect_answers: [
			"Cowboy Bebop",
			"High School DxD",
			"Gurren Lagann",
		],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "hard",
		question:
			"What was the first company to use the term &quot;Golden Master&quot;?",
		correct_answer: "Apple",
		incorrect_answers: ["IBM", "Microsoft", "Google"],
	},
	{
		category: "Entertainment: Video Games",
		type: "multiple",
		difficulty: "hard",
		question:
			"In &quot;Starbound&quot;, according to the asset files, the description of the &quot;Erchius Ghost&quot; is the same as which other assets?",
		correct_answer: "Spookit",
		incorrect_answers: [
			"Petricub",
			"Trictus",
			"Pyromantle",
		],
	},
	{
		category: "History",
		type: "multiple",
		difficulty: "easy",
		question: "What year did World War I begin?",
		correct_answer: "1914",
		incorrect_answers: ["1905", "1919", "1925"],
	},
	{
		category: "Entertainment: Cartoon & Animations",
		type: "multiple",
		difficulty: "hard",
		question:
			"In &quot;Rick and Morty&quot;, from which dimension do Rick and Morty originate from?",
		correct_answer: "C-137",
		incorrect_answers: ["J1977", "C-136", "C500-a"],
	},
	{
		category: "Entertainment: Video Games",
		type: "multiple",
		difficulty: "medium",
		question:
			"In what year was Pok&eacute;mon Diamond &amp; Pearl released in Japan?",
		correct_answer: "2006",
		incorrect_answers: ["2009", "2007", "2008"],
	},
	{
		category: "Geography",
		type: "multiple",
		difficulty: "hard",
		question:
			"How many stations does the Central Line have on the London Underground?",
		correct_answer: "49",
		incorrect_answers: ["51", "43", "47"],
	},
	{
		category: "Entertainment: Video Games",
		type: "multiple",
		difficulty: "medium",
		question:
			"Which stage was planned to be a part of &quot;Sonic the Hedgehog 2&quot;, but was scrapped during development?",
		correct_answer: "Genocide City Zone",
		incorrect_answers: [
			"Stardust Speedway Zone",
			"Sky High Zone ",
			"Clockwork Zone",
		],
	},
	{
		category: "Entertainment: Video Games",
		type: "multiple",
		difficulty: "medium",
		question:
			"Which of the following Mario Kart 8 Deluxe items will NOT make you invincible?",
		correct_answer: "Golden Mushroom",
		incorrect_answers: ["Star", "Bullet Bill", "Boo"],
	},
	{
		category: "Sports",
		type: "multiple",
		difficulty: "hard",
		question:
			"What team did England beat in the semi-final stage to win in the 1966 World Cup final?",
		correct_answer: "Portugal",
		incorrect_answers: [
			"West Germany",
			"Soviet Union",
			"Brazil",
		],
	},
	{
		category: "Entertainment: Film",
		type: "multiple",
		difficulty: "easy",
		question:
			"In &quot;ALF&quot;, what was ALF&#039;s real name?",
		correct_answer: "Gordon Shumway",
		incorrect_answers: [
			"Gordon Milipp",
			"Gordon Foster",
			"Gordon von Gam",
		],
	},
	{
		category: "Entertainment: Japanese Anime & Manga",
		type: "multiple",
		difficulty: "medium",
		question:
			"What colour hair does the main character of the Yu-Gi-Oh! original anime series have?",
		correct_answer: "Red, black and yellow",
		incorrect_answers: [
			"Red, yellow and green",
			"Red, black and green",
			"Red, purple and blue",
		],
	},
	{
		category: "Science & Nature",
		type: "multiple",
		difficulty: "hard",
		question:
			"In quantum physics, which of these theorised sub-atomic particles has yet to be observed?",
		correct_answer: "Graviton",
		incorrect_answers: ["Z boson", "Tau neutrino", "Gluon"],
	},
	{
		category: "Entertainment: Japanese Anime & Manga",
		type: "multiple",
		difficulty: "hard",
		question:
			"Who is the horror manga artist who made Uzumaki?",
		correct_answer: "Junji Ito",
		incorrect_answers: [
			"Kazuo Umezu",
			"Shintaro Kago",
			"Sui Ishida",
		],
	},
	{
		category: "Entertainment: Film",
		type: "multiple",
		difficulty: "medium",
		question:
			"Which actor plays the role of the main antagonist in the 2011 movie &quot;Tower Heist?&quot;",
		correct_answer: "Alan Alda",
		incorrect_answers: [
			"Eddie Murphy",
			"Alec Baldwin",
			"Kevin Nealon",
		],
	},
	{
		category: "Entertainment: Video Games",
		type: "multiple",
		difficulty: "easy",
		question:
			"In Final Fantasy XIV, what is the name of the Deep Dungeon that was introduced in the expansion pack, Heavensward?",
		correct_answer: "Palace of the Dead",
		incorrect_answers: [
			"Heaven on High",
			"Aetherochemical Research Facility",
			"Sunken Temple of Qarn",
		],
	},
	{
		category: "Entertainment: Video Games",
		type: "multiple",
		difficulty: "medium",
		question:
			"Which unlockable character in Super Smash Bros. For Wii U and 3DS does not have to be fought to be unlocked?",
		correct_answer: "Mii Fighters",
		incorrect_answers: ["Ness", "R.O.B.", "Mewtwo"],
	},
	{
		category: "Entertainment: Comics",
		type: "multiple",
		difficulty: "hard",
		question:
			"Which pulp hero made appearances in Hellboy and BPRD comics before getting his own spin-off?",
		correct_answer: "Lobster Johnson",
		incorrect_answers: [
			"Roger the Homunculus",
			"The Spider",
			"The Wendigo",
		],
	},
	{
		category: "Science: Mathematics",
		type: "multiple",
		difficulty: "medium",
		question:
			"In the complex plane, multiplying a given function by i rotates it anti-clockwise by how many degrees?",
		correct_answer: "90",
		incorrect_answers: ["180", "270", "0"],
	},
];
module.exports = questions;
