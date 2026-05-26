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
  "bg-transparent border-0 border-b-[0.5px] border-slate-300 px-0 py-3 text-base text-slate-900 placeholder:text-slate-400 outline-none transition-[border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-violet-500 hover:shadow-[0_1px_0_0_oklch(0.58_0.18_285_/_0.6)] focus:border-violet-600 focus:shadow-[0_1px_0_0_oklch(0.48_0.20_285)]";

const labelClass = "flex flex-col gap-2";
const labelTextClass =
  "font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500";

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
      className="grid gap-7 md:gap-8 max-w-[34rem]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8">
        <label className={labelClass}>
          <span className={labelTextClass}>ИМЯ</span>
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="Айбек"
            className={inputClass}
          />
        </label>

        <label className={labelClass}>
          <span className={labelTextClass}>ТЕЛЕФОН</span>
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

      <div className="flex flex-col gap-4 pt-2">
        <button
          type="submit"
          disabled={isBusy || isDone}
          className="group self-start inline-flex items-center gap-3 px-6 py-3.5 border-[0.5px] border-slate-900 bg-slate-900 text-alabaster font-mono text-[11px] uppercase tracking-[0.22em] transition-[transform,background-color,color,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98] disabled:opacity-60 hover:bg-violet-600 hover:text-white hover:border-violet-600"
        >
          {isBusy ? "ОТПРАВЛЯЕМ" : isDone ? "ПРИНЯТО" : "ОТПРАВИТЬ ЗАЯВКУ"}
          <span
            aria-hidden="true"
            className="block h-px w-4 bg-current transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-8"
          />
        </button>

        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500 max-w-[42ch] leading-relaxed">
          Перезвоним в течение 4 часов в рабочее время. По телефону уточним
          интерес, пришлём паспорта планировок.
        </p>
      </div>
    </form>
  );
}
