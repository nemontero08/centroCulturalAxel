"use client";

import Image from "next/image";
import { site } from "@/data/site";
import Icon from "./Icon";
import ShareButton from "./ShareButton";

export default function ProfileHeader() {
  const { profile, layout } = site;
  const cover = layout.cover;
  const avatar = layout.avatar;

  const avatarSize = avatar.size ? `${avatar.size}px` : "clamp(84px,20vw,112px)";

  return (
    <header className="relative">
      <div
        className="relative overflow-hidden bg-aqua-100"
        style={{ height: cover.height ? `${cover.height}px` : "clamp(140px,28vw,230px)" }}
      >
        <Image
          src={profile.cover}
          alt={profile.coverAlt}
          fill
          priority
          sizes="(max-width: 700px) 100vw, 1040px"
          style={{
            objectFit: "cover",
            objectPosition: `${cover.focusX}% ${cover.focusY}%`,
            transform: `scale(${cover.zoom / 100})`,
          }}
        />
      </div>

      <div className="relative z-[1] flex flex-col gap-3 px-[clamp(16px,4.5vw,30px)] pb-[26px]">
        <div className="flex items-end justify-between -mt-[14px] tablet:-mt-[42px]">
          <Image
            src={profile.avatar}
            alt={profile.avatarAlt}
            width={112}
            height={112}
            priority
            className="block animate-flota"
            style={{
              width: avatarSize,
              height: avatarSize,
              objectFit: "contain",
              objectPosition: `${avatar.focusX}% ${avatar.focusY}%`,
            }}
          />
          <ShareButton />
        </div>

        <div className="flex flex-col gap-1.5">
          <h1 className="m-0 text-[clamp(26px,5.5vw,38px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-text-strong">
            {profile.name}
          </h1>
          <div className="flex items-center gap-1.5 text-sm text-text-muted">
            <Icon name="location_on" size={16} />
            <span>{profile.location}</span>
          </div>
        </div>

        <p className="m-0 mt-1 rounded-lg bg-aqua-50 px-4 py-[14px] text-sm leading-[1.5] text-ink-600 [text-wrap:pretty]">
          {profile.note}
        </p>
      </div>
    </header>
  );
}
