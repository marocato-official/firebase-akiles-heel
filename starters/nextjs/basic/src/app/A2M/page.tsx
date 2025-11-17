import Link from "next/link";

export default function Page() {
  return (
    <main className="content">
      <div id="posts">
        <div id="post1">
          <h1> &lt; A2M &gt; </h1>
          <p> Processes an audio file of a song into a midi file. </p>
          <p> <b>NO GENERATIVE AI</b> WAS OR IS USED. </p>
          <br>
          <h3> Notes: </h3>
          <div class="tab">
					  <p> Intended for vocals only or single instrument audio. Multi-instrument audio files will confuse the pitch detection. </p>
				  </div>
				  <br>
				  <div class="tab">
					  <p> Only works with .wav files. </p>
				  </div>
				  <br>
				  <div class="tab">
					  <p> Libraries used: pitchwriter.js, midiwriter.js </p>
				  </div>
				  <br>
          <details>
            <summary> Click this to confirm you have read the text and to proceed with using the tool. </summary>
            <br>
  					<div style="display:flex; justify-content: center;">
  						<label for="fileupload" class="custom-file-upload">
  							Upload Your File
  						</label>
  						<input id="fileupload" type="file" accept="audio/wav" />
  					</div>
          </details>
        </div>
      </div>
    </main>
  );
}
