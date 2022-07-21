<script>
	import linkPage from "$util/LinkPage.js";

	import { textboxes } from "$lib/Demo.js";
</script>

<main>
	<p>
		Here are a bunch of variations of escaped HTML anchor tags, in both paragraphs (where tag escaping is needed) and in textareas (where it isn't).
	</p>
	<p>
		When treated as literal html, the JavaScript will make the link start with the base path. But when it's being validatated, the code is often treated as the link itself, causing it to be invalid.
	</p>
	<p>
		Here's an annoying way to escape it which actually works. So you can see the code: &lt;a href={`{linkPage("foo")}`}&gt;This works&lt;/a&gt; <br>
		This page exists, which prevents some of the errors. That bit of code is just displayed in a p tag, using HTML escape codes for the greater than and less than symbols.
	</p> <br>
	<p>
		None of HTML in the JavaScript strings in the JavaScript files result in parsing errors. And escaping by using concatination to break up things like &lt;a&gt; doesn't make a difference.
	</p> <br>

	<h1>The tests</h1>

	<p>
		*HTML commented* textarea with the content (that raw HTML code) from an external script (most likely to compile, but won't show anything), using Svelte curly brackets in the (commented) HTML:
	</p>
	<!-- <textarea readonly cols="80" rows="2">{textboxes.demo}</textarea> <br> -->
	<p>
		Compiles
	</p> <br>

	<p>
		Textarea with the content (that raw HTML code) from an external script, using Svelte curly brackets in the HTML:
	</p>
	<!-- <textarea readonly cols="80" rows="2">{textboxes.demo}</textarea> <br> -->
	<p>
		*Doesn't* compile
	</p> <br>

	<p>
		It's invalid syntax to run the same code but with a @html prefix on textboxes.hardCoded.
	</p>
	<p>
		The same but the whole thing in a string but using @html (using vanilla string template): <br>
		The contents is commented out by removing the dollar sign as I can't use an HTML comment.
	</p>
	{@html `
		<textarea readonly cols="80" rows="2">{textboxes.demo}</textarea> <br>
	`}
	<p>
		*Doesn't* compile (unless the contents is removed like this)
	</p> <br>

	<p>
		Same but the URL in the escaped string uses a hardcoded prefix (meaning it would be valid even without JavaScript if it wasn't in a textarea). Still loaded from an external script and put into this document with Svelte curly brackets:
	</p>
	<!-- <textarea readonly cols="80" rows="2">{textboxes.hardCoded}</textarea> <br> -->
	<p>
		*Doesn't* compile, even when the page exists
	</p> <br>

	<p>
		The same escaped HTML code but put *unescaped* into the HTML document:
	</p>
	<a href="/build/foo">This works</a> <br>
	<p>
		Compiles if the page exists (expected)
	</p> <br>
	
	<br>

	<p>
		Textarea with the content loaded using the value property (instead of inbetween the tags), from an external script, using Svelte curly brackets in the HTML:
	</p>
	<!-- <textarea readonly cols="80" rows="2" value={textboxes.demo}></textarea> <br> -->
	<p>
		*Doesn't* compile, even with quotes around the value property
	</p> <br>

	<p>
		Same thing but using a non-existent element but the commonly used "value" property:
	</p>
	<foo value={textboxes.demo}></foo>
	<p>
		Compiles
	</p> <br>

	<p>
		Same thing but using a non-existent element and property:
	</p>
	<foo bar={textboxes.demo}></foo>
	<p>
		Compiles
	</p> <br>

	<br>

	<p>
		HTML string put as an inline string in the HTML, using the {"{`<content...>`}"} method:
	</p>
	<!-- <textarea readonly cols="80" rows="2">{`<a href={linkPage("foo")}>This works</a>`}</textarea> <br> -->
	<p>
		*Doesn't* compile
	</p> <br>

	<p>
		HTML string put directly in the document as the *inner content* of the tag:
	</p>
	<!-- <textarea readonly cols="80" rows="2">
		<a href={linkPage("foo")}>This works</a>
	</textarea> <br> -->
	<p>
		*Doesn't* compile, results in parse error
	</p> <br>

	<p>
		HTML string put directly in the document as the *value property* of the tag:
	</p>
	<!-- <textarea readonly cols="80" rows="2" value='<a href={linkPage("foo")}>This works</a>'></textarea> <br> -->
	<p>
		*Doesn't* compile
	</p> <br>
</main>