import Home from "@/components/home/Home";

export default async function IndexPage() {

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex w-full flex-col items-center gap-4 text-center">
          <Home />
        </div>
      </section>
    </>
  )
}
