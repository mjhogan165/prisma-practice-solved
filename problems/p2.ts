import { prisma } from "./prisma";

// We want to grab the first N youngest users
export const getNYoungestUsers = async (howManyUsersToGrab: number) => {
  return prisma.user
    .findMany({
      orderBy: [{ age: "asc" }],
    })
    .then((arr) => {
      return arr.slice(0, howManyUsersToGrab);
    });
};
