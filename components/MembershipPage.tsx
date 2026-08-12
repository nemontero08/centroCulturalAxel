"use client";

import FaqList from "./FaqList";
import MembershipCarousel from "./MembershipCarousel";
import ProfileHeader from "./ProfileHeader";
import SiteFooter from "./SiteFooter";
import { useBreakpoint } from "./useBreakpoint";

export default function MembershipPage() {
  const { perView, shellWidth } = useBreakpoint();

  return (
    <div className="flex min-h-screen justify-center bg-aqua-50 pb-10">
      <div
        className="min-h-screen w-full bg-surface-page shadow-[0_0_0_1px_var(--border-subtle)]"
        style={{ maxWidth: `${shellWidth}px` }}
      >
        <ProfileHeader perView={perView} />
        <MembershipCarousel perView={perView} />
        <FaqList />
        <SiteFooter />
      </div>
    </div>
  );
}
