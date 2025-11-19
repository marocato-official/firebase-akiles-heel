import Link from "next/link";

export default function Home() {
  const message = process.env["MESSAGE"] || "Hello!";
  return (
    <main className="content">
      <div id="posts">
        <div>
          <h1> {"<"} NEWS {">"} </h1>
          <img src="https://i.imgur.com/AeDlNOd.png" width="100%"/>
          <br/><br/>
          <h2> Project Prototype Release: A2M (Audio-to-MIDI) </h2>
          <p> Audio File to MIDI tool. Intended for single-track recordings. Currently available online and as a downloadable .exe file. </p>
          <p> Use the online version{" "}<Link href="/A2M">here</Link>! (Redirects to a different page on this website.)</p>
        </div>

        <div>
          <h2> &lt; Projects &gt; </h2>
          
          <div className="tab">
  			<h3> Lunti CVVC </h3>
  			<p> <b>STATUS:</b> IN DEVELOPMENT </p>
  			<p> An English CVVC X-SAMPA UTAU voicebank. </p>
		  </div>
		  <br/>

          <div className="tab">
  			<h3> Quill for TalonVoice </h3>
  			<p> <b>STATUS:</b> ABANDONED {" "} {"["}<Link href="https://github.com/marocato-official/talonvoice-quill">github</Link>{"]"} </p>
  			<p> A module for TalonVoice. Made for a friend. </p>
		  </div>
		  <br/>

          <div className="tab">
  			<h3> A2M (Audio-to-MIDI) </h3>
  			<p> <b>STATUS:</b> PROTOTYPE {" "}{"["}<Link href="/A2M">online</Link>{"]"} {" "}{"["}<Link href="https://akiles-heel.itch.io/a2m-audio-to-midi-wip">itch</Link>{"]"} </p>
  			<p> Audio to MIDI tool. </p>
		  </div>
		  <br/>
        </div>

		<div>
		  <h2> {"<"} About Me {">"} </h2>
		  <p> Hi, I{"'"}m Maro Akile! I use masculine and neutral pronouns. Please refer to me as a boy, not a girl or woman. </p>
		  <p> I live in the Philippines, which uses the GMT+8 timezone. </p>
		  <br/>
		  <p> <b> My interests: </b> programming, biology, genetics, linguistics, vocal synths, birds, drawing </p>
		  <p> <b> Media I like: </b> Skyrim </p>
		</div>
      </div>
    </main>
  );
}
