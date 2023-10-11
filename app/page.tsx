import SaveSeat from "@/components/forms/SaveSeat";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="flex flex-col gap-y-16 items-center">
        <h1 className="justify-center text-center lg:text-[64px]  header md:text-5xl text-[32px] lg:mt-[100px]  md:mt-[50px] mt-[12px]">
          How to run your agency on Notion
        </h1>
        <h3 className="subheader lg:text-[32px] md:text-[28px] text-center text-xl">
          The Notion blueprint for scaling agencies.
          <span className="font-bold"> A masterclass.</span>
        </h3>
        <SaveSeat />
      </section>
    </main>
  );
}
