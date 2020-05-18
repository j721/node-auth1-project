exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const users = [
    {
      username: "color",
      password: "purple",
      role: 1,
    },
    {
      username: "admin",
      password: "keepitsecret,keepitsafe.",
      role: 1,
    },
    {
      username: "food",
      password: "drinks",
      role: 2,
    },
    {
      username: "anybody",
      password: "somebody",
    },
    {
      username: "ghost",
      password: "zombies",
    },
  ];

  return knex("users").insert(users);
};
