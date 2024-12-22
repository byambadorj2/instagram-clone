import { auth } from "@/auth";
import PostsGrid from "@/components/PostsGrid";
import { prisma } from "@/db";
import { CheckIcon, ChevronLeft, CogIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();
  const profile = await prisma.profile.findFirst({
    where: { email: session?.user?.email as string },
  });
  if (!profile) {
    return redirect("/settings");
  }
  return (
    <main>
      <section className="flex justify-between items-center">
        <button>
          <ChevronLeft />
        </button>
        <div className="font-bold flex items-center gap-2">
          {profile?.username}
          <div className="size-5 rounded-full bg-ig-red inline-flex justify-center items-center text-white">
            <CheckIcon size={16} />
          </div>
        </div>
        <button>
          <Link href={"/settings"}>
            <CogIcon />
          </Link>
        </button>
      </section>
      <section className="mt-8 flex justify-center">
        <div className="size-48 rounded-full p-2 bg-gradient-to-tr from-ig-orange to-ig-red">
          <div className="size-44 p-2 bg-white rounded-full">
            <div className=" size-40 aspect-square rounded-full overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-4 text-center">
        <h1 className="text-xl font-bold">{profile?.name}</h1>
        <p className=" text-gray-500 mt-1 mb-1">{profile?.subtitle}</p>
        <p>{profile?.bio}</p>
      </section>
      <section className="mt-4">
        <div className="flex justify-center gap-4 font-bold">
          <Link href={""}>Posts</Link>
          <Link className="text-gray-500" href={"/highlights"}>
            Highlights
          </Link>
        </div>
      </section>
      <section className="mt-4">
        <PostsGrid />
      </section>
    </main>
  );
}
