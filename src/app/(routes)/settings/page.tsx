import { auth } from "@/auth";
import SettingsForm from "@/components/SettingsFrom";
import { prisma } from "@/db";

export default async function SettingsPage() {
  const session = await auth();
  if (!session?.user?.email) {
    return "not logged in";
  }
  const profile = await prisma.profile.findFirst({
    where: { email: session?.user?.email as string },
  });
  if (!profile) {
    return "Profile not found";
  }
  return (
    <div className="max-w-md mx-auto ">
      <h1 className="text-3xl font-bold mb-4 text-center">Profile settings</h1>
      <SettingsForm profile={profile} userEmail={session?.user?.email} />
    </div>
  );
}
