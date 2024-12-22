"use client";
import { updateProfile } from "@/actions";
import { Profile } from "@prisma/client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import { CloudUploadIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SettingsForm({
  userEmail,
  profile,
}: {
  userEmail: string;
  profile: Profile | null;
}) {
  const router = useRouter();
  return (
    <form
      action={async (data: FormData) => {
        await updateProfile(data, userEmail);
        router.push("/profile");
        router.refresh();
      }}
    >
      <div className="flex gap-2 items-center">
        <div>
          <div className="bg-gray-400 size-24 rounded-full"></div>
        </div>
        <div>
          <Button variant="surface">
            <CloudUploadIcon />
            Change avatar
          </Button>
        </div>
      </div>
      <p className="font-bold mt-2">username</p>
      <TextField.Root
        name="username"
        defaultValue={profile?.username || ""}
        placeholder="user_name"
      />
      <p className="font-bold mt-2">name</p>
      <TextField.Root
        name="name"
        defaultValue={profile?.name || ""}
        placeholder="Byambaa"
      />
      <p className="font-bold mt-2">subtitle</p>
      <TextField.Root
        name="subtitle"
        defaultValue={profile?.subtitle || ""}
        placeholder="Software Engineer"
      />
      <p className="font-bold mt-2">bio</p>
      <TextArea name="bio" defaultValue={profile?.bio || ""} />
      <div className="mt-4 flex justify-center">
        <Button variant="solid">Save Settings</Button>
      </div>
    </form>
  );
}
