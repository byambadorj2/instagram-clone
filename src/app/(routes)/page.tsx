import { auth, signOut, signIn } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      Test <br />
      {session && (
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button
            className="border px-4 py-2 bg-ig-red text-white rounded-lg"
            type="submit"
          >
            Logout
          </button>
        </form>
      )}
      {!session && (
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button
            className="border px-4 py-2 bg-ig-red text-white rounded-lg"
            type="submit"
          >
            Login with Google
          </button>
        </form>
      )}
    </div>
  );
}