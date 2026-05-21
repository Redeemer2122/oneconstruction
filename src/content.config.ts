/**
 * Content Collections — Astro 6 Content Layer API.
 * Полная реализация — Фаза 2 (вместе с Keystatic).
 * Здесь — минимальный валидный заглушечный конфиг.
 *
 * Astro 6 changes:
 *  - Файл должен лежать в `src/content.config.ts` (не `src/content/config.ts`).
 *  - `type: "data"` removed.
 *  - Loader is mandatory (`glob` from astro/loaders).
 *  - `z` импортируется из `astro/zod`, не из `astro:content`.
 */
import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{json,yaml,yml}",
    base: "./src/content/projects",
  }),
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    location: z.string().optional(),
    phase: z.enum(["PHASE_01", "PHASE_02", "PHASE_03"]).optional(),
    coordinates: z
      .object({ lat: z.number(), lng: z.number() })
      .optional(),
    cover: z.string().optional(),
    description: z.string().optional(),
  }),
});

const apartments = defineCollection({
  loader: glob({
    pattern: "**/*.{json,yaml,yml}",
    base: "./src/content/apartments",
  }),
  schema: z.object({
    projectSlug: z.string(),
    code: z.string(),
    rooms: z.number().int().min(0).max(10),
    areaTotal: z.number(),
    areaLiving: z.number().optional(),
    floorPlan: z.string().optional(),
    price: z.number().optional(),
  }),
});

export const collections = { projects, apartments };
