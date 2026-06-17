/**
 * ContactForm — React island. Hydration: client:visible.
 *
 * Все поля: rounded-none, прозрачный фон, hairline-граница снизу,
 * фокус — переход к ярко-кобальтовому 0.5px. Никаких box-shadow,
 * никакого ring-glow. Tactile-feedback только на :active кнопки.
 *
 * Phase 3: реальный endpoint, валидация, обработка ошибок.
 */
import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "bg-transparent border-0 border-b border-slate-300 px-0 py-3 text-base text-slate-900 placeholder:text-slate-400/80 outline-none transition-[border-color,box-shadow,letter-spacing] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-violet-500 focus:border-violet-600 focus:shadow-[0_1px_0_0_oklch(0.48_0.20_285)]";

const labelClass = "group flex flex-col gap-2";
const labelTextClass =
  "font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500 transition-colors duration-300 group-focus-within:text-violet-600";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const isBusy = status === "submitting";
  const isDone = status === "success";

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        // TODO: replace mock submit with real endpoint / Telegram / CRM integration.
        setStatus("submitting");
        await new Promise((r) => setTimeout(r, 700));
        setStatus("success");
      }}
      className="grid gap-6 md:gap-7"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
        <label className={labelClass}>
          <span className={labelTextClass}>ВАШЕ ИМЯ*</span>
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="Ваше имя"
            className={inputClass}
          />
        </label>

        <label className={labelClass}>
          <span className={labelTextClass}>ТЕЛЕФОН*</span>
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+996 700 00 00 00"
            className={inputClass}
          />
        </label>
      </div>

      <label className={labelClass}>
        <span className={labelTextClass}>ИНТЕРЕС</span>
        <input
          name="interest"
          placeholder="ЖК Medina, 3-комнатная"
          className={inputClass}
        />
      </label>

      <div className="flex flex-col gap-4 pt-3">
        <button
          type="submit"
          disabled={isBusy || isDone}
          className="group relative inline-flex w-full min-h-12 items-center justify-between gap-3 border border-slate-900 bg-slate-900 px-6 py-4 font-mono text-[12px] uppercase tracking-[0.22em] text-alabaster shadow-[0_18px_38px_rgb(15_23_42_/_0.18)] transition-[transform,background-color,color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:!bg-violet-700 hover:text-white hover:border-violet-700 hover:shadow-[0_22px_44px_rgb(109_40_217_/_0.28)] active:scale-[0.99] disabled:opacity-60"
        >
          <span>
            {isBusy ? "ОТПРАВЛЯЕМ" : isDone ? "ЗАЯВКА ПРИНЯТА" : "ОСТАВИТЬ ЗАЯВКУ"}
          </span>
          <span
            aria-hidden="true"
            className="inline-flex items-center text-violet-300 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:text-white"
          >
            ↗
          </span>
        </button>

        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500 max-w-[44ch] leading-relaxed">
          И наш менеджер свяжется с вами в течении 15 минут!
        </p>
      </div>
    </form>
  );
}
