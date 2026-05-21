---
name: taste-skill
source: https://github.com/Leonxlnx/taste-skill
description: High-Agency Frontend Skill — anti-slop premium frontend rules. Cached locally for One Construction.
---

# High-Agency Frontend Skill (cached excerpt)

## 1. ACTIVE BASELINE
- DESIGN_VARIANCE: 8
- MOTION_INTENSITY: 6
- VISUAL_DENSITY: 4

## 2. ARCHITECTURE
- Verify deps in package.json before importing.
- Tailwind for ~90% styling. Lock to installed major version.
- ANTI-EMOJI in code/markup/alt.
- `min-h-[100dvh]` instead of `h-screen` for hero.
- CSS Grid over flex percentage math.
- Icons: `@phosphor-icons/react` or `@radix-ui/react-icons`, single global strokeWidth.

## 3. BIAS CORRECTION
- Display: `text-4xl md:text-6xl tracking-tighter leading-none`. Ban Inter for premium. Use Geist / Outfit / Cabinet Grotesk / Satoshi.
- Body: `text-base text-gray-600 leading-relaxed max-w-[65ch]`.
- Max 1 accent, saturation < 80%. THE LILA BAN — no AI purple/blue glow.
- Anti-center bias for hero when LAYOUT_VARIANCE > 4. Split / asymmetric.
- Cards only when elevation communicates hierarchy. Tint shadows to bg hue.
- Implement loading (skeletal) / empty / error states. `:active` → `-translate-y-[1px]` or `scale-[0.98]`.

## 4. CREATIVE PROACTIVITY
- Liquid Glass: `backdrop-blur` + 1px inner border + `shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`.
- Magnetic micro-physics via Framer `useMotionValue`/`useTransform`, NEVER `useState`.
- Spring physics `type:"spring", stiffness:100, damping:20`. No linear easing.
- `staggerChildren` parent + children must live in same client component tree.

## 5. PERFORMANCE GUARDRAILS
- Grain/noise: `fixed inset-0 pointer-events-none` only. Never on scrolling containers.
- Animate ONLY `transform` and `opacity`.
- No z-index spam.

## 7. AI TELLS (forbidden)
- Visual: no neon outer glows, no `#000000` (use Zinc-950 / Charcoal), no oversaturated accents, no gradient text on big headers, no custom cursors.
- Typography: NO Inter. No oversized H1 just for size. Serif only for editorial.
- Layout: NO generic 3-column card row. Use zig-zag / asymmetric / horizontal scroll.
- Data: no "John Doe", no "99.99%", no "Acme/Nexus/SmartFlow", no "Elevate/Seamless/Unleash/Next-Gen".
- No Unsplash. Use `https://picsum.photos/seed/{x}/w/h` or SVG.
- shadcn/ui only customised — never default radii/colors.
