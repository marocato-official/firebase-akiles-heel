import Link from "next/link";

export default function Home() {
  const message = process.env["MESSAGE"] || "Hello!";
  return (
    <main className="content">
      <div id="posts">
        <div>
          <h1> &lt; NEWS &gt; </h1>
          <img src="https://i.imgur.com/AeDlNOd.png" width="100%"/>
          <br><br>
          <h2> Project Prototype Release: A2M (Audio-to-MIDI) </h2>
          <p> Audio File to MIDI tool. Intended for single-track recordings. Currently available online and as a downloadable .exe file. </p>
          <p> Use the online version{" "}<Link href="/A2M">here</Link>{" "}! (Redirects to a different page on this website.)</p>
        </div>
      </div>
      <h1 className="heading">Next.js on Firebase App Hosting</h1>
      <h2> hi its akile </h2>
      <p>{message}</p>

      <section className="features">
        <article className="card">
          <h2>Scalable, serverless backends</h2>
          <p>
            Dynamic content is served by{" "}
            <Link
              href="https://cloud.google.com/run/docs/overview/what-is-cloud-run"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cloud Run
            </Link>
            , a fully managed container that scales up and down with demand.
            Visit{" "}
            <Link href="/ssr">
              <code>/ssr</code>
            </Link>{" "}
            and{" "}
            <Link href="/ssr/streaming">
              <code>/ssr/streaming</code>
            </Link>{" "}
            to see the server in action.
          </p>
        </article>
        <article className="card">
          <h2>Global CDN</h2>
          <p>
            Cached content is served by{" "}
            <Link
              href="https://cloud.google.com/cdn/docs/overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Cloud CDN
            </Link>
            , a fast and secure way to host cached content globally. Visit
            <Link href="/ssg">
              {" "}
              <code>/ssg</code>
            </Link>{" "}
          </p>
        </article>
      </section>
    </main>
  );
}
