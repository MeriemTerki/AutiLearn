import Cell from "../../assets/dashboard/cell.svg";
import Genetic from "../../assets/dashboard/genetic.svg";
import Apple from "../../assets/dashboard/apple.svg";
import Tv from "../../assets/dashboard/tv.svg";
import { Link, useOutletContext } from "react-router-dom";

// Courses Gradient and text color constants

const GRADIENTS = {
  Biology: "bg-gradient-to-bl from-orange-500 via-red-600 to-rose-700",
  Physics: "bg-gradient-to-bl from-lime-400 via-emerald-500 to-green-600",
};

const TEXT_COLORS = {
  Biology: "#621f1f",
  Physics: "#205a3d",
};

// Courses data
const biologyCourses = [
  {
    id: 1,
    title: "Powering the Cell",
    img: Cell,
    subject: "Biology",
    courseContent:
      "## The Amazing World of Cells!\n\nHey there!  Let's learn about the tiniest building blocks of life: **cells!**\n\n### What is a Cell?\n\nImagine a tiny house. That's kind of like a cell! It's the smallest part of a living thing that can do all the things needed to stay alive.  Some living things are made of only one cell, like bacteria.  But you and I are made of *trillions* of cells!\n\n###  Different Cells, Different Jobs\n\nJust like you have lots of jobs you do, cells have different jobs too!  There are:\n\n* **Nerve Cells:** These are like messengers, sending messages throughout your body! They can be really long, like from your feet to your brain! \n* **Brain Cells:** These are the cells that help you think and learn.  You have billions of them!\n* **Muscle Cells:** These are the cells that help you move. They make your muscles contract and relax, letting you run, jump, and dance! \n\nThere are many other kinds of cells that do all sorts of things to keep you alive.  \n\n### Parts of a Cell\n\nLet's take a tour inside a cell! It's a busy place! Here's what you'll find:\n\n**1. Membrane:** This is the outer layer of the cell, like the walls of your house.  It keeps things inside the cell safe, but it also lets some things in and out. \n\n**2. Mitochondria:** These are like power plants! They take food and oxygen and turn them into energy for the cell to use. \n\n**3. Ribosomes:** Imagine these are like tiny factories. They build things the cell needs, like proteins.  Proteins are very important for keeping the cell working!\n\n**4. Nucleus:** This is the brain of the cell! It has all the instructions for the cell, like a recipe book.  It's surrounded by a special membrane, like a little safe, to keep the instructions safe. \n\n**5. Cytoplasm:** This is the jelly-like stuff that fills up the cell.  It's like the air in your house.  All the other cell parts float around in the cytoplasm.\n\n**6. Lysosomes:** These are like little garbage trucks! They clean up the cell, getting rid of waste and unwanted things.\n\n### Fun Facts About Cells\n\n* **Cells were discovered by a scientist named Robert Hooke.** He looked at a piece of cork under a microscope and saw tiny compartments. He called them \"cells\" because they looked like little rooms!\n* **One of the biggest cells is the ostrich egg!**  It can weigh over 3 pounds!\n* **When many cells of the same kind are together, it's called tissue.** Just like bricks build a house, cells build tissues.\n* **The word cell comes from the Latin word \"cellula,\" which means small compartment.** It's fitting since cells are like tiny compartments! \n* **Humans actually carry more bacteria cells than human cells!**  Bacteria live on our skin and in our intestines. Most of them are good for us!\n\n### Learn More!\n\nThere's so much more to learn about cells!  Keep asking questions and exploring the fascinating world of the tiny building blocks of life! \n",
    quizContent:
      '##  The Amazing Cell Quiz! \n\nGet ready to test your knowledge about cells! Choose the best answer for each question.\n\n**Question 1: What is a cell?** \n\na) A tiny house  \nb) The smallest part of a living thing that can stay alive \nc)  A brick \nd)  A large box \n\n**Answer: b) The smallest part of a living thing that can stay alive** \n\n**Explanation:**  Cells are like tiny building blocks for everything that is alive! \n\n**Question 2:  What kind of cells help you move your body?**\n\na) Brain Cells\nb) Nerve Cells\nc) Muscle Cells \nd)  Plant Cells\n\n**Answer: c) Muscle Cells**\n\n**Explanation:** Muscle cells are like tiny engines that help you run, jump, and dance! \n\n**Question 3:  Which part of the cell is like the brain of the cell?**\n\na) Membrane \nb) Mitochondria\nc) Nucleus \nd)  Cytoplasm \n\n**Answer: c) Nucleus**\n\n**Explanation:** The nucleus is the control center of the cell. It has all the instructions for the cell to follow! \n\n**Question 4:  What part of the cell helps make energy?**\n\na) Mitochondria \nb) Ribosomes \nc) Lysosomes \nd)  Cytoplasm\n\n**Answer: a) Mitochondria** \n\n**Explanation:** Mitochondria are like tiny power plants. They take food and oxygen and turn them into energy! \n\n**Question 5:  What is cytoplasm?**\n\na) The walls of the cell \nb) The jelly-like stuff that fills the cell \nc)  Tiny factories inside the cell \nd)  Garbage trucks inside the cell \n\n**Answer: b) The jelly-like stuff that fills the cell** \n\n**Explanation:** Cytoplasm is like the air inside a house. All the other cell parts float around in it! \n\n**Question 6: What is a group of cells that are all the same kind called?**\n\na) Tissue\nb) Organ\nc) System\nd)  Organism\n\n**Answer: a) Tissue**\n\n**Explanation:** Cells work together like a team!  When many cells of the same kind are together, they form a tissue! \n\n**Question 7: Who discovered cells?**\n\na) Albert Einstein \nb) Robert Hooke \nc)  Marie Curie \nd)  Isaac Newton \n\n**Answer: b) Robert Hooke**\n\n**Explanation:**  Robert Hooke was a scientist who looked at cork under a microscope and saw tiny compartments he called "cells" because they looked like little rooms! \n\n**Question 8: What is one of the biggest cells?**\n\na) A nerve cell \nb) A muscle cell \nc) A brain cell\nd) An ostrich egg\n\n**Answer: d) An ostrich egg**\n\n**Explanation:**  An ostrich egg is a single cell!  It\'s one of the biggest cells you can find! \n\n**You did a great job!  Now you know a lot about the amazing world of cells!** \n',
  },
  {
    id: 2,
    title: "The Human Body",
    img: Genetic,
    subject: "Biology",
    courseContent:
      "## Welcome to the Amazing Human Body! \n\nThis course is all about learning about the human body. We will explore how it works, what its parts are, and some fun facts along the way! \n\n### Let's start with the basics:\n\n* **What is the human body?** The human body is a very complicated machine made up of many different parts. \n* **What are those parts?**  The human body has many different parts, like your head, neck, arms, legs, and even tiny things you can't see! \n* **How do all the parts work together?** Each part has a special job to do, and they all work together to keep you alive and healthy.\n\n###  The Body's Main Parts\n\nImagine your body is like a house. Each room in the house has a special purpose.  \n\n* **The Head:** Like the roof of a house, your head is the top part of your body. It holds your brain, which is like the control center of your body.\n* **The Neck:** The neck is like the doorway to your house. It connects your head to your body, letting you move your head around.\n* **The Trunk:** The trunk is the biggest part of your body, like the walls and floors of your house. It holds your heart, lungs, and stomach, which are all very important for keeping you alive.\n* **The Limbs:** Your limbs are like the doors and windows of your house. They help you move around, pick things up, and do many other things! Your arms and legs are your limbs.\n\n### Your Five Amazing Senses:\n\nYour body has special ways to learn about the world around you. These are called your senses:\n\n* **Sight (Eyes):** Your eyes help you see the world around you. They are like cameras that take pictures of everything you see.\n* **Hearing (Ears):** Your ears help you hear sounds. They are like microphones that pick up sounds from the world around you.\n* **Touch (Skin):**  Your skin is like a big blanket that covers your whole body. It helps you feel things, like hot, cold, rough, or smooth. \n* **Smell (Nose):** Your nose is like a detector that helps you smell things. It can tell if something smells good or bad.\n* **Taste (Tongue):** Your tongue helps you taste things. It can tell if something is sweet, sour, salty, or bitter.\n\n### Fun Facts About Your Body:\n\n* **Water is your friend:**  About 60% of your body is made up of water, just like a big glass of water!\n* **Your brain doesn't feel pain:**  Your brain is very special. It controls your body, but it doesn't feel pain. \n* **You have a lot of bones!** When you were born, you had 270 bones. As you grew older, some bones fused together, so now you have 206 bones in your body.\n* **Your heart is a super hero!**  Your heart works very hard to pump blood all around your body. It's like a powerful pump that keeps you alive.\n\n###  The Smallest Part of Your Body: The Cell!\n\nImagine you take a tiny piece of your body, smaller than a grain of sand. That tiny piece is made up of even tinier things called cells. \n\n* **What is a cell?**  A cell is like a tiny building block.  All living things, even you, are made of cells. \n* **What do cells do?** Each cell has a special job to do, just like the workers in a building. \n* **Lots of different cells:**  There are many different kinds of cells, like nerve cells that help you think and muscle cells that help you move. \n\n###  More Fun Facts About Cells:\n\n* **Cells were discovered by a scientist:**  A scientist named Robert Hooke was the first person to see cells!\n* **The biggest cell is an egg!** One of the biggest cells in the world is the ostrich egg. It can be bigger than a football!\n* **You have lots of bacteria:**  That's right, you have more bacteria cells in your body than human cells! But don't worry, most of these bacteria are good for you. \n\n###  Learning More:\n\nThat was a lot of information, wasn't it? We learned about the different parts of your body, your five senses, and the tiny cells that make up your body.  There is so much more to learn about the human body, so keep exploring and asking questions!\n\nRemember, the human body is a very amazing thing. You should be proud to be a human!\n",
    quizContent:
      "## Welcome to the Amazing Human Body Quiz! \n\nGet ready to test your knowledge about your incredible body!  \n\n**Instructions:** Choose the best answer for each question.  \n\n**1. What is the brain like?**\na)  The roof of a house\nb)  The walls and floors of a house\nc) The control center of your body\nd) The doorway to your house\n\n**Answer:**  c) The control center of your body. \n\n**Explanation:**  The brain is the most important part of your body. It helps you think, feel, and move.\n\n**2. Which of these is NOT a sense?**\na) Sight\nb)  Smell\nc)  Taste\nd)  Jumping\n\n**Answer:** d) Jumping. \n\n**Explanation:** Jumping is something your body does, not a sense.  Your senses help you learn about the world around you.\n\n**3.  What part of your body is like a powerful pump?**\na)  Your brain\nb)  Your stomach\nc) Your heart\nd)  Your bones\n\n**Answer:** c)  Your heart. \n\n**Explanation:** Your heart pumps blood all around your body to keep you alive. \n\n**4.  What are the building blocks of your body?**\na)  Bones\nb)  Water\nc)  Cells\nd)  Organs\n\n**Answer:** c) Cells. \n\n**Explanation:**  Just like building a house with bricks, your body is made up of tiny cells. \n\n**5. How much of your body is made up of water?**\na) 10%\nb)  20%\nc)  50%\nd)  60%\n\n**Answer:** d) 60%. \n\n**Explanation:**  You need water to stay alive and healthy!  It makes up most of your body. \n\n**Congratulations!** You've finished the Amazing Human Body Quiz. You learned so much about your amazing body. Keep asking questions and learning more! \n",
  },
  {
    id: 3,
    title: "Nutrition",
    img: Cell,
    subject: "Biology",
    courseContent:
      "## Eating Right: A Guide to Nutrition for Growing Bodies\n\nHi there! Today we're going to talk about nutrition. You know how important it is to eat healthy foods to grow strong and feel good, right?  Well, let's dive in and learn more about what makes our bodies happy!\n\n###  What are Vitamins and Minerals?\n\nVitamins and minerals are like tiny superheroes for our bodies. They help us do lots of important things, like:\n\n* **Grow Strong:**  Think of them like the building blocks for our bones, muscles, and teeth. \n* **Fight Off Germs:**  Vitamins and minerals make our immune system strong, so we don't get sick as easily.\n* **Have Energy:**  They help our bodies turn food into energy, so we can play, learn, and do all the things we love.\n\n###  Important Vitamins and Minerals\n\nThere are lots of different vitamins and minerals, but here are a few super important ones:\n\n**1. Riboflavin (B2):** This vitamin helps make energy in our bodies and keeps our eyes healthy. You can find it in yummy things like meat, eggs, peas, nuts, milk, and green vegetables!\n\n**2. Folate (B9, Folic Acid):** This vitamin helps make red blood cells that carry oxygen around our bodies and helps build DNA, which is like the instruction manual for our bodies. You can find it in green vegetables, beans, liver, and oranges.\n\n**3. Calcium:**  Calcium is like the building block for our bones and teeth.  We need it to be strong and healthy. You can find it in milk, yogurt, cheese, and green vegetables.\n\n**4. Iron:** Iron helps carry oxygen in our blood, so our bodies can get the energy they need. You can find it in red meat, poultry, soy, green leafy vegetables, fish, and pork.\n\n**5. Magnesium:** Magnesium helps our muscles work properly, keeps our nerves healthy, and helps our bodies use energy. You can find it in nuts, whole grains, breads, bananas, and milk.\n\n**6. Phosphorus:** Phosphorus helps build strong bones and teeth, and helps our bodies make energy and build cells. You can find it in milk, meat, and fish.\n\n**7. Potassium:** Potassium helps our muscles work and keeps our nervous system healthy. You can find it in potatoes, broccoli, bananas, and fruits.\n\n**8. Zinc:** Zinc helps us grow and develop, keeps our immune system strong, and helps our bodies heal. You can find it in red meat, seafood, nuts, milk, whole grains, and poultry.\n\n###  Eating the Right Foods\n\nTo get all these amazing vitamins and minerals, we need to eat a variety of foods from all the food groups.  Think of it like a yummy rainbow of foods!\n\n**Here are the main food groups:**\n\n* **Grains:** Think breads, cereal, pasta, and rice. \n* **Dairy:** Think milk, cheese, and yogurt.\n* **Fruits:** Think apples, oranges, berries, grapes, and bananas.\n* **Vegetables:** Think broccoli, beans, spinach, carrots, and peas.\n* **Protein:** Think beef, chicken, pork, eggs, nuts, and fish.\n\n**Remember:**  It's important to eat a balanced diet from all these food groups every day.  \n\n###  MyPlate\n\nThe USDA (United States Department of Agriculture) has a cool tool called MyPlate. It's a picture of a plate showing how much of each food group you should eat at each meal. The vegetables and grains are a little bigger than the fruit and protein portions, so we know those are important to eat more of.\n\n**Here are some tips from MyPlate:**\n\n* **Drink skim milk or low-fat milk.** This means it has less fat and is healthier for you.\n* **Eat whole grains for your grains.** Look for wheat bread instead of white bread. Whole grains have more nutrients.\n* **Drink water instead of sugary drinks.** Water is the best way to stay hydrated and it's way healthier than soda or juice.\n\n###  Calories and Energy\n\n**Calories** are like energy units in food. When we eat, we get calories, and our bodies use them to do all sorts of things, like run, jump, and play!  If we eat more calories than we use, we might gain weight. But if we don't eat enough, we might not have enough energy.  That's why it's important to eat just the right amount!\n\n**Remember:** Eating healthy foods from all the food groups gives us the nutrients we need to grow strong and be happy! \n",
    quizContent:
      "##  Superhero Nutrition Quiz! \n\nGet ready to test your nutrition knowledge, because you're about to become a superhero of healthy eating!  \n\n**Instructions:**  Read each question carefully and choose the best answer. \n\n**Question 1:** What do vitamins and minerals do for our bodies?\n\na)  They make us grow super tall.\nb) They help us fight off bad guys (germs) and give us energy to play.\nc) They make our hair grow faster.\nd) They make our clothes cleaner.\n\n**Answer:** b) They help us fight off bad guys (germs) and give us energy to play.\n\n**Explanation:**  Vitamins and minerals are like tiny superheroes that help our bodies grow, fight off germs, and give us energy to do all the fun things we love!\n\n**Question 2:** Which yummy food is a great source of Riboflavin (B2)?\n\na) Pizza\nb)  Ice cream\nc)  Broccoli \nd) Chocolate \n\n**Answer:** c) Broccoli\n\n**Explanation:** Broccoli is full of Riboflavin (B2), which helps make energy in our bodies and keeps our eyes healthy.\n\n**Question 3:** Which vitamin helps make red blood cells and build DNA?\n\na) Calcium\nb)  Folate (B9, Folic Acid)\nc) Iron\nd)  Zinc\n\n**Answer:** b) Folate (B9, Folic Acid)\n\n**Explanation:** Folate (B9, Folic Acid) is like a tiny builder that helps make red blood cells, which carry oxygen, and builds DNA, which is like the instruction manual for our bodies.\n\n**Question 4:** What food group is important for building strong bones and teeth?\n\na)  Fruits\nb)  Grains\nc)  Dairy\nd)  Vegetables\n\n**Answer:** c)  Dairy\n\n**Explanation:** Dairy foods like milk, yogurt, and cheese are packed with Calcium, which helps build strong bones and teeth, making us tough as a rock!\n\n**Question 5:** Which food is a good source of Iron, which helps carry oxygen in our blood?\n\na) Apples\nb)  Potatoes\nc)  Spinach\nd)  Cookies\n\n**Answer:** c)  Spinach\n\n**Explanation:** Spinach is a great source of Iron, which helps our bodies get the energy they need to run, jump, and play!\n\n**Question 6:** What does MyPlate tell us?\n\na)  How many toys we should have\nb)  What colors to wear each day\nc) How much of each food group to eat at each meal\nd)  What time to go to bed\n\n**Answer:** c) How much of each food group to eat at each meal\n\n**Explanation:** MyPlate is like a colorful guide to healthy eating. It shows us how much of each food group to eat to get all the nutrients our bodies need.\n\n**Question 7:** What is the best choice to stay hydrated?\n\na) Soda\nb) Juice\nc) Water\nd)  Milk\n\n**Answer:** c) Water\n\n**Explanation:** Water is the best way to stay hydrated and it's way healthier than sugary drinks like soda and juice. \n\n**Question 8:** What are calories?\n\na)  Tiny creatures that live in our food.\nb)  Units of energy in food that our bodies use to play and grow.\nc)  A type of special ingredient that makes food taste better.\nd)  Something we measure with a ruler. \n\n**Answer:** b) Units of energy in food that our bodies use to play and grow.\n\n**Explanation:** Calories are like tiny energy units in food that help us run, jump, and do all the amazing things we love. \n\n**Superhero Score:**\n\n* 8 out of 8:  You're a true nutrition superhero! You're eating right and fueling your body with energy!\n* 6-7 out of 8:  You're on the right track to becoming a healthy eating superhero!  Keep learning and exploring new foods. \n* 4-5 out of 8:  That's a good start!  Keep learning about nutrition and choosing healthy foods.  \n* 0-3 out of 8:  Don't worry, you've got this! Let's keep exploring the world of healthy eating together! \n",
  },
];

const physicsCourses = [
  {
    id: 1,
    title: "Astronomy",
    img: Apple,
    subject: "Physics",
    courseContent:
      "##  Let's Explore the Stars!\n\nThis course is all about **astronomy**, which is the study of everything in space. We'll talk about stars, planets, galaxies, and even black holes!  \n\n### What is Astronomy?\n\nAstronomy is like a giant puzzle. Astronomers are like detectives who try to figure out how the universe works. They use special tools to look at the sky and collect clues.  \n\n### How Do We Look at the Stars?\n\nWe use **telescopes** to see things in space that are too far away for our eyes to see. A telescope is like a super-powerful magnifying glass that gathers light from faraway objects. \n\nThere are many different kinds of telescopes, each looking at different kinds of light: \n\n* **Optical Telescopes:** These telescopes use regular light, like what we see with our eyes.\n* **Radio Telescopes:** These telescopes look at radio waves, a type of light we can't see. \n* **Infrared Telescopes:** These telescopes look at infrared light, which is heat. \n\n### Famous Astronomers\n\n* **Galileo Galilei:** Galileo was one of the first people to use a telescope to look at the stars. He discovered that Jupiter has moons, just like our Earth!\n* **Johannes Kepler:** Kepler figured out how the planets move around the sun. He found that they don't move in circles, but in oval shapes!\n* **Isaac Newton:** Newton was a super-smart scientist who discovered the laws of gravity. Gravity is what keeps us on the ground and keeps the planets orbiting the sun.\n\n### Cool Things in Space\n\n* **Stars:** Stars are giant balls of hot gas that make their own light. They come in different colors, sizes, and ages.\n* **Planets:** Planets are big balls of rock or gas that orbit a star. Our Earth is a planet, and it orbits the sun.\n* **Galaxies:** Galaxies are huge collections of stars, gas, and dust. Our Milky Way is a galaxy, and it has billions of stars!\n* **Black Holes:** Black holes are super-dense objects that have so much gravity that nothing, not even light, can escape them.\n\n###  Fun Facts about Astronomy!\n\n*  The sun is a star, and it's the closest star to our planet!\n*  We can't see all the stars in the galaxy because some are too far away or hidden by dust.\n*  The universe is constantly expanding, meaning everything is moving farther apart! \n\nThis is just a little peek into the fascinating world of astronomy. There's so much more to learn! So keep looking up, and remember that space is full of amazing discoveries waiting to be made. \n",
    quizContent:
      "##  Space Explorers Quiz! \n\nGet ready to blast off into a fun quiz about astronomy! Choose the best answer for each question. \n\n**1. What is astronomy all about?** \n\na) Studying the weather \nb) Learning about animals \nc)  Exploring the universe \nd) Making telescopes\n\n**Explanation:** Astronomy is the study of everything in space, including stars, planets, and galaxies! \n\n**2. What do astronomers use to see things in space?** \n\na) Microscopes \nb) Telescopes \nc)  Binoculars \nd)  Magnifying glasses\n\n**Explanation:** Telescopes are super-powerful tools that gather light from faraway objects in space. \n\n**3. What kind of telescope looks at heat?** \n\na) Optical Telescope \nb)  Radio Telescope \nc)  Infrared Telescope \nd)  All of the above\n\n**Explanation:** Infrared telescopes use infrared light, which is a type of heat, to see things in space. \n\n**4. Who was one of the first people to use a telescope to look at the stars?**\n\na) Isaac Newton \nb)  Galileo Galilei \nc)  Johannes Kepler \nd)  Albert Einstein\n\n**Explanation:** Galileo Galilei was a famous astronomer who used a telescope to make important discoveries about the stars and planets.\n\n**5. What is a planet?**\n\na) A giant ball of hot gas that makes its own light \nb) A big ball of rock or gas that orbits a star \nc)  A collection of stars, gas, and dust \nd)  A super-dense object with strong gravity\n\n**Explanation:** Planets are big balls of rock or gas that go around a star. Our Earth is a planet! \n\n**6. What is the closest star to our planet?**\n\na)  The North Star \nb)  The Sun \nc)  Sirius \nd)  Proxima Centauri\n\n**Explanation:**  The Sun is a star, and it's the closest star to our Earth! \n\n**7.  What is true about the universe?** \n\na) It is getting smaller \nb) It is constantly expanding \nc) It is filled with only stars \nd)  It is completely empty\n\n**Explanation:** The universe is always getting bigger! Everything in space is moving further apart.\n\n**Congratulations, Space Explorer! You've completed the quiz!** \n",
  },
  {
    id: 2,
    title: "Nuclear Physics and Relativity",
    img: Tv,
    subject: "Physics",
    courseContent:
      "## Let's Explore Nuclear Physics and Relativity!\n\nThis is a cool topic, and we're going to break it down bit by bit so it's easy to understand.\n\n**1. What is Nuclear Physics?**\n\nImagine a tiny world inside atoms, the building blocks of everything around us. Nuclear physics studies that tiny world! \n\n* **Atoms:** Think of atoms like tiny solar systems, with a center called the nucleus and particles called electrons spinning around it.\n* **Nucleus:** The nucleus is like the sun of our tiny solar system, made of even smaller particles called protons and neutrons. \n* **Protons and Neutrons:** They are like planets, but even tinier! Protons have a positive charge, and neutrons have no charge.\n\n**2.  The Power of the Nucleus!**\n\nNow, these protons and neutrons are really tightly packed together, and they have a huge amount of energy stored inside them.  This is what makes nuclear physics so exciting!\n\n* **Nuclear Energy:**  This is the energy locked up inside the nucleus of an atom. It's like a tiny battery, but much, much more powerful!\n* **Nuclear Reactions:**  When we change the nucleus of an atom, we release this energy. This happens in nuclear reactors and nuclear bombs.\n\n**3. Einstein's Famous Equation: E=mc2**\n\nAlbert Einstein was a super smart scientist who figured out how energy and matter are related. He came up with this famous equation:\n\n* **E:**  This stands for energy.\n* **m:**  This stands for mass (how much something weighs).\n* **c:**  This is the speed of light, which is super fast!\n\nThis equation means that energy and mass are actually two sides of the same coin. We can change matter into energy, and we can change energy into matter.\n\n**4. Nuclear Fission: Splitting Atoms**\n\nImagine a big atom like a bowling ball. If we throw another particle at it, it can split into smaller atoms! This is called nuclear fission.\n\n* **Splitting the Atom:**  When we split an atom, we release a lot of energy, kind of like a tiny explosion.\n* **Nuclear Reactors:** We use this energy to generate electricity in nuclear power plants.\n\n**5. Nuclear Fusion: Joining Atoms Together**\n\nThis is like making a bigger bowling ball!  If we combine two smaller atoms, we release even more energy than in fission. This is what powers the sun and other stars!\n\n* **Sun's Power:** Our sun fuses hydrogen atoms to make helium, and this releases a lot of heat and light!\n* **Fusion Power:**  Scientists are trying to use fusion to generate electricity on Earth. It's a tough challenge, but if we can do it, it will be a clean and powerful source of energy.\n\n**6. Relativity: A Mind-Bending Topic**\n\nEinstein also developed a theory called relativity, which helps us understand how time, space, gravity, and energy are all connected.  It's a bit complex, but here's the basics:\n\n* **Special Relativity:**  This is about how time and space change when things move at very high speeds, close to the speed of light.\n* **General Relativity:**  This is about how gravity works, and it turns out that it's not just a force, but a curve in space-time itself!\n\n**7.  Radioactivity:  When Atoms Decay**\n\nSome atoms are unstable, like a wobbly tower of blocks.  They can break down and release particles called radiation. This is called radioactivity.\n\n* **Radiation:** This can be dangerous, but it can also be used for good, like in medicine to treat cancer.\n* **Half-Life:**  This is how long it takes for half of a radioactive material to decay.\n\n**8.  Important Points to Remember:**\n\n* Nuclear physics is the study of the tiny world inside atoms.\n* E=mc2 shows that energy and mass are related.\n* Nuclear fission splits atoms, releasing energy.\n* Nuclear fusion joins atoms, releasing even more energy.\n* Relativity is a theory about space, time, and gravity.\n* Radioactivity is when unstable atoms decay, releasing radiation.\n\n**I hope this simplified explanation of nuclear physics and relativity helps!**\n",
    quizContent:
      "##  Get Ready to Blast Off! It's Nuclear Physics and Relativity Quiz Time! 🚀\n\n**Instructions:**  Read each question carefully and choose the best answer.  Get ready to learn some amazing things about the tiny world inside atoms!\n\n**1.  What does nuclear physics study?**\n\na) The stars in the sky.\nb)  The tiny world inside atoms.\nc)  How animals behave.\nd)  How to make pizza.\n\n**Answer:**  b) The tiny world inside atoms. \n\n**Explanation:** Nuclear physics is all about the super small parts of atoms, like protons and neutrons!\n\n**2.  What is the nucleus of an atom like?**\n\na) A giant pizza.\nb) A tiny solar system.\nc) A bouncy ball.\nd)  A rainbow.\n\n**Answer:** b) A tiny solar system.\n\n**Explanation:** The nucleus is like the sun in a tiny solar system, with electrons spinning around it like planets!\n\n**3.  What does E=mc2 mean?**\n\na) Energy and matter are not related.\nb)  Energy is equal to mass times the speed of light.\nc)  You can travel back in time.\nd)  Pizza is the best food.\n\n**Answer:** b) Energy is equal to mass times the speed of light.\n\n**Explanation:** This famous equation shows that energy and matter are actually two sides of the same coin!\n\n**4. What happens in nuclear fission?**\n\na) Atoms are joined together.\nb)  Atoms are split apart.\nc)  Atoms turn into pizza.\nd)  Atoms disappear.\n\n**Answer:** b) Atoms are split apart.\n\n**Explanation:** Think of it like breaking a bowling ball into smaller pieces!\n\n**5. Where does nuclear fusion happen?**\n\na)  Inside a pizza oven.\nb)  Inside a nuclear power plant.\nc)  Inside a volcano.\nd) Inside our sun!\n\n**Answer:** d) Inside our sun!\n\n**Explanation:** The sun is a giant fusion reactor, combining hydrogen atoms to make helium and releasing tons of energy!\n\n**6. What is relativity all about?**\n\na)  How to make friends.\nb)  How to bake a cake.\nc)  How space, time, gravity, and energy are connected.\nd)  How to play a video game.\n\n**Answer:** c)  How space, time, gravity, and energy are connected.\n\n**Explanation:**  It's a mind-bending topic, but it helps us understand how these things all work together!\n\n**7.  What happens when an atom decays?**\n\na)  It turns into a different type of atom.\nb)  It becomes a pizza.\nc)  It explodes!\nd)  It disappears.\n\n**Answer:** a) It turns into a different type of atom.\n\n**Explanation:** Some atoms are unstable, like a wobbly tower of blocks, and they break down, releasing particles called radiation.\n\n**You did it! You've completed the Nuclear Physics and Relativity Quiz!** \n\n**Remember:** This is just a taste of all the exciting things we can learn about the tiny world inside atoms and the universe around us!  Keep exploring and keep asking questions! \n",
  },
  {
    id: 3,
    title: "Light and Optics",
    img: Apple,
    subject: "Physics",
    courseContent:
      "## Light and Optics: A Journey into the World of Light!\n\nHey there, friend! Get ready to explore the amazing world of light and how it behaves! We'll discover how light travels, bends, and even changes colors. We'll learn about the amazing things we can see because of light, like rainbows and how we see things in the first place!\n\n**Let's start with the basics:**\n\n* **Light is all around us!** It comes from the sun, light bulbs, and even fireflies. \n* **Light travels in straight lines.** Imagine a beam of light like a laser pointer - it goes straight! \n* **Light can bounce off things!** This is called reflection. Have you ever looked in a mirror? That's light reflecting back at you!\n\n**Now, let's talk about bending light!**\n\n* **Light bends when it goes from one thing to another.** For example, light bends when it goes from air to water. This is called **refraction**.\n* **Think of it like this:** When you run into a puddle, you might change direction a little bit.  That's like light changing direction when it goes into water.\n* **Refraction is how we see things!** It's how lenses in cameras and telescopes work.\n\n**Here are some fun facts about light:**\n\n* **Light comes in different colors!**  Remember rainbows? Each color of light bends at a slightly different angle. \n* **Light can be split into its colors!**  A prism can split white light into a rainbow of colors. It's like a magic trick!\n* **Light travels super fast!**  So fast that it takes less than a second to travel around the Earth!\n\n**We'll learn about more cool things about light, like how it can create shadows and even be used to see tiny things through a microscope!**\n\n**Keep asking questions, and let's have fun learning about this amazing part of our world!** \n",
    quizContent:
      "## Light and Optics: A Journey into the World of Light! Quiz\n\nGet ready to test your knowledge about light! Answer these questions carefully and let's see how much you've learned.\n\n**1. Where can we find light?**\n\na) Only from the sun\nb) Only from light bulbs\nc) Only from fireflies\nd) All of the above!\n\n**2. How does light travel?**\n\na) In a zig-zag pattern\nb) In a circle\nc) In straight lines\nd) In any direction it wants\n\n**3. What happens when light bounces off something?**\n\na) It disappears\nb) It gets hotter\nc) It reflects\nd) It changes color\n\n**4. What happens to light when it goes from air to water?**\n\na) It disappears\nb) It gets hotter\nc) It reflects\nd) It bends\n\n**5. What is the name for when light bends?**\n\na) Reflection\nb) Refraction\nc) Diffraction\nd) Absorption\n\n**6. How do lenses in cameras and telescopes work?**\n\na) They reflect light\nb) They bend light\nc) They absorb light\nd) They make light disappear\n\n**7. What happens to white light when it goes through a prism?**\n\na) It turns black\nb) It disappears\nc) It splits into different colors\nd) It gets hotter\n\n**8. How fast does light travel?**\n\na) Really slowly\nb) Super fast!\nc) It doesn't travel\nd) At the speed of sound\n\n**Answer Key:**\n\n1. **d) All of the above!** Light comes from many sources, including the sun, light bulbs, and fireflies.\n2. **c) In straight lines** Imagine a laser pointer - light travels like a straight beam!\n3. **c) It reflects**  Have you ever looked in a mirror? That's light reflecting back at you!\n4. **d) It bends**  Think of it like you changing direction when you run into a puddle - light changes direction when it goes into water!\n5. **b) Refraction**  It's like light bending when it goes from one thing to another!\n6. **b) They bend light**  Lenses help us see things by bending light!\n7. **c) It splits into different colors**  A prism can create a rainbow of colors from white light - it's like magic!\n8. **b) Super fast!**  Light travels so fast that it takes less than a second to travel around the Earth! \n\n**Well done! You are a light expert!** \n",
  },
];

// CourseCard component
const CourseCard = ({
  id,
  title,
  img,
  subject,
  courseContent,
  quizContent,
}) => {
  const { setSelectedCourse } = useOutletContext(); // Get setSelectedCourse function from context

  const handleClick = () => {
    setSelectedCourse({ id, title, img, subject, courseContent, quizContent });
  };
  return (
    <div
      onClick={handleClick}
      key={id}
      className={`min-w-[245px] md:w-[245px] shadow-lg rounded-[12px] mb-10 xl:mb-6 cursor-pointer py-6 px-5 xl:px-5 xl:py-6 ${GRADIENTS[subject]}`}
    >
      <div className="text-6xl flex mb-4 items-center justify-center">
        <img src={img} className="w-full" alt={`${title} course icon`} />
      </div>
      <div className="font-medium text-2xl xl:text-xl text-white">{title}</div>
      <div
        className={`font-bold text-xl xl:text-lg mb-3 ${
          subject === "Biology"
            ? `text-[${TEXT_COLORS.Biology}]`
            : `text-[${TEXT_COLORS.Physics}]`
        }`}
      >
        {subject}
      </div>
      <div className="flex items-center text-lg xl:text-base justify-between text-white/60 font-bold">
        <span>Completed:</span>
        <span>95%</span>
      </div>
    </div>
  );
};

// My Learning component
const MyLearning = () => (
  <div className="xl:p-6 pb-2 relative text-zinc-900 px-5 md:px-12 xl:px-5">
    <div className="text-center md:text-left mb-12 max-w-[600px]">
      <h1 className="font-bold text-4xl mb-3">My Learning</h1>
      <p className="font-medium text-gray-700">
        Dive into the fascinating worlds of biology and physics! Each learning
        path has a set of interactive courses for you to explore.
      </p>
    </div>

    {/* Biology Courses section */}
    <section className="mb-12">
      <h2 className="font-bold text-center mb-8 md:text-left text-3xl xl:text-2xl xl:mb-6">
        Biology
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-8 overflow-x-auto pb-4 custom-scrollbar">
        {biologyCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </section>

    {/* Physics Courses section */}
    <section>
      <h2 className="font-bold text-center mb-8 md:text-left text-3xl xl:text-2xl xl:mb-6">
        Physics
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-8 overflow-x-auto pb-4 scrollbar-custom">
        {physicsCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </section>
  </div>
);

export default MyLearning;
