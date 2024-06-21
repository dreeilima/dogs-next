import photoGet from "@/actions/photo-get";
import Feed from "@/components/feed/feed";

export default async function Home() {
  const data = await photoGet();

  return (
    <section className="container mainContainer">
      <Feed photos={data} />
    </section>
  );
}
