import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const leaderboardRouter = createTRPCRouter({
    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.leaderboard.findMany();
    }),
});
