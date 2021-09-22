"use strict";

const {
  db,
  models: { User, Image },
} = require("../server/db");

async function seed() {
  await db.sync({ force: true });
  console.log("database synced!");

  const images = await Promise.all([
    Image.create({ URL: "https://picsum.photos/seed/picsum/200/300" }),
    Image.create({ URL: "https://picsum.photos/seed/picsum/200/300" }),
  ]);

  console.log(`seeded ${images.length} images`);
  console.log(`seeded successfully`);
  return {
    images: {
      one: images[0],
      two: images[1],
    },
  };
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed
