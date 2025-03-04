import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

export default async function Home() {
  return (
    <>
      <main className="flex-1 flex flex-col gap-6 px-4 justify-center items-center">
        {/* Hero Section */}
        <div
          className="w-screen h-1/2 flex flex-col justify-center items-center bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('https://media.discordapp.net/attachments/789777292665946132/1345992924034240582/received_672448952013048.jpg?ex=67c7e298&is=67c69118&hm=0739313a240c0dcc41cc7e635d7e784ee66d967d746aeaf8ea53e8c4b8f89345&=&format=webp&width=724&height=953')",
          }}
        >
          <div className="py-32 flex flex-col items-center justify-center">
            <p className="text-9xl text-white">UNICORDZ</p>
            <p className="text-xl text-white">We create, You play</p>
          </div>
        </div>

        {/* What's Going On Section */}
        <div className="w-4/5 bg-black text-white rounded-lg p-8 flex gap-6">
          {/* Left Side - Title & Description */}
          <div className="w-1/2">
            <p className="text-3xl font-semibold">What’s going on?</p>
            <p className="text-lg mt-4">
              Embarking on an ambitious game development project, our team aims to create an immersive multiplayer online experience set in a sprawling cyberpunk metropolis. Players will navigate a richly detailed world filled with hidden secrets, formidable challenges, and diverse characters. With dynamic storytelling and adaptive AI, each journey will be unique and driven by player choices.
            </p>
          </div>

          {/* Right Side - Empty Box Placeholder */}
          <div className="w-1/2 border border-gray-500 rounded-lg h-48"></div>
        </div>
      </main>
    </>
  );
}




