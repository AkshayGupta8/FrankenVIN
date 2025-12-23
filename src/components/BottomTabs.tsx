import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type Tab = {
  to: string;
  label: string;
  icon: ReactNode;
};

const tabBase =
  "flex flex-1 flex-col items-center justify-center gap-1 py-2 text-[11px] transition";

export function BottomTabs() {
  const tabs: Tab[] = [
    {
      to: "/passport",
      label: "Passport",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 3h10a2 2 0 0 1 2 2v16l-4-2-4 2-4-2-4 2V5a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M8 8h8M8 12h8"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      to: "/community",
      label: "Community",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M16 11c1.66 0 3-1.79 3-4s-1.34-4-3-4-3 1.79-3 4 1.34 4 3 4Zm-8 0c1.66 0 3-1.79 3-4S9.66 3 8 3 5 4.79 5 7s1.34 4 3 4Zm0 2c-2.67 0-8 1.34-8 4v2h10v-2c0-1.08.37-2.04.98-2.86C10.57 13.61 9.25 13 8 13Zm8 0c-1.25 0-2.57.61-2.98 1.14.61.82.98 1.78.98 2.86v2h10v-2c0-2.66-5.33-4-8-4Z"
            fill="currentColor"
            opacity="0.95"
          />
        </svg>
      ),
    },
    {
      to: "/garage",
      label: "Garage",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 11.5 12 4l9 7.5V20a1.5 1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 20v-8.5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M8 21v-7h8v7"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-md">
        {tabs.map((t) => (
          <NavLink
            key={t.to}
            to={t.to}
            className={({ isActive }) =>
              `${tabBase} ${
                isActive ? "text-white" : "text-white/60 hover:text-white/90"
              }`
            }
          >
            <span className="-mb-0.5">{t.icon}</span>
            <span>{t.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
