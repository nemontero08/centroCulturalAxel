import FaqList from "./FaqList";
import MembershipSelector from "./MembershipSelector";
import ProfileHeader from "./ProfileHeader";
import SiteFooter from "./SiteFooter";

export default function MembershipPage() {
  return (
    <div className="flex min-h-screen justify-center bg-aqua-50 pb-10">
      <div className="min-h-screen w-full max-w-[520px] bg-surface-page shadow-[0_0_0_1px_var(--border-subtle)] tablet:max-w-[1040px]">
        <ProfileHeader />
        <MembershipSelector />
        <FaqList />
        <SiteFooter />
      </div>
    </div>
  );
}
