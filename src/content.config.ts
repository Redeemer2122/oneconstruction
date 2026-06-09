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
    slug: z.string().optional(),
    name: z.string(),
    index: z.string(),
    sortOrder: z.number().int(),
    showOnHomepage: z.boolean().optional(),
    location: z.string().optional(),
    phase: z.enum(["PHASE_01", "PHASE_02", "PHASE_03"]).optional(),
    coordinates: z
      .object({ lat: z.number(), lng: z.number() })
      .optional(),
    cover: z.string().optional(),
    description: z.string().optional(),
    status: z.string(),
    delivery: z.string(),
    storeys: z.string(),
    units: z.string(),
    priceFrom: z.string(),
    territory: z.string().optional(),
    seoDescription: z.string().optional(),
    hero: z
      .object({
        eyebrow: z.string().optional(),
        summary: z.string().optional(),
        image: z.string().optional(),
        imageAlt: z.string().optional(),
        featuredPlanLabel: z.string().optional(),
      })
      .optional(),
    stats: z
      .array(
        z.object({
          value: z.string(),
          label: z.string(),
          detail: z.string().optional(),
        })
      )
      .optional(),
    benefits: z
      .array(
        z.object({
          title: z.string(),
          body: z.string(),
        })
      )
      .optional(),
    plans: z.array(
      z.object({
        rooms: z.string(),
        area: z.string(),
        price: z.string(),
        image: z.string().optional(),
        note: z.string().optional(),
      })
    ),
    gallery: z
      .array(
        z.object({
          image: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
          label: z.string().optional(),
          category: z.string().optional(),
          width: z.number().optional(),
          height: z.number().optional(),
        })
      )
      .optional(),
    purchaseOptions: z
      .array(
        z.object({
          title: z.string(),
          body: z.string(),
          meta: z.string().optional(),
          status: z.enum(["confirmed", "needs_verification"]).optional(),
        })
      )
      .optional(),
    constructionStatus: z
      .object({
        label: z.string().optional(),
        title: z.string(),
        summary: z.string(),
        status: z.string().optional(),
        delivery: z.string().optional(),
        verificationNote: z.string().optional(),
        activeStageIndex: z.number().int().min(0).optional(),
        items: z
          .array(
            z.object({
              label: z.string(),
              value: z.string(),
              note: z.string().optional(),
            })
          )
          .optional(),
        stages: z
          .array(
            z.object({
              title: z.string(),
              status: z.string(),
              period: z.string().optional(),
              description: z.string().optional(),
              verification: z.enum(["demo", "project", "pending"]).optional(),
              state: z.enum(["completed", "active", "planned", "target"]).optional(),
              image: z.string().optional(),
              imageAlt: z.string().optional(),
              note: z.string().optional(),
            })
          )
          .optional(),
      })
      .optional(),
    contactCta: z
      .object({
        label: z.string().optional(),
        title: z.string(),
        body: z.string(),
        supportPoints: z.array(z.string()).optional(),
        contactDetails: z
          .object({
            phone: z.string().optional(),
            phoneHref: z.string().optional(),
            address: z.string().optional(),
            email: z.string().optional(),
            emailHref: z.string().optional(),
            responseNote: z.string().optional(),
            schedule: z.array(z.string()).optional(),
            socialLinks: z
              .array(
                z.object({
                  label: z.string(),
                  href: z.string().optional(),
                  ariaLabel: z.string().optional(),
                })
              )
              .optional(),
          })
          .optional(),
        form: z
          .object({
            title: z.string().optional(),
            intro: z.string().optional(),
            securityNote: z.string().optional(),
            successMessage: z.string().optional(),
          })
          .optional(),
      })
      .optional(),
    installment: z
      .object({
        label: z.string(),
        maxMonths: z.number().int().optional(),
        status: z.enum(["confirmed", "needs_verification"]),
        note: z.string().optional(),
      })
      .optional(),
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
