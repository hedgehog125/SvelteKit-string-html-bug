<script>
	import { onMount } from "svelte";
	import linkPage from "$util/LinkPage.js"; // Not actually used, but it does mean that the escaped code would be valid if unescaped

	import { textboxes } from "$lib/Demo.js";

	let wildcardContent = "";

	onMount(_ => {
		wildcardContent = textboxes.demo;
	});
</script>

<main>
	<p>
		Here are a bunch of variations of escaped HTML anchor tags in textareas. Paragraphs and presumably most other HTML elements don't have the same issue, I guess because the angle brackets are escaped before the links are checked.
	</p>
	<p>
		Although it's just supposed to show off some code, when it's treated as literal html, the JavaScript will make the link start with the base path. But when it's being validatated, the code is often treated as the link itself, causing it to be invalid as it doesn't start with the base path. Although weirdly even a valid hardcoded link seems to be treated as invalid. See below...
	</p>
	<p>
		The code that should be inside the various textareas is: &lt;a href={`{linkPage("foo")}`}&gt;This works&lt;/a&gt;
	</p>
	<p>
		None of the HTML stored in strings in the JavaScript file result in parsing errors. And escaping by using concatination to break up things like &lt;a&gt; doesn't make a difference (as the issue isn't in that file).
	</p> <br>

	<h1>The tests</h1>

	<p>
		Paragraph tag with the content (the HTML code that should be displayed as text) set using Svelte curly brackets to a string imported from a JavaScript file:
	</p>
	<p>
		{textboxes.demo}
	</p>
	<p>
		Compiles, which is presumably the same for most HTML elements (except some like textarea)
	</p>

	<p>
		*Commented with HTML comment tag* textarea, with the content from an external script, using Svelte curly brackets in the (commented) HTML: (this is the most likely to compile, but won't show anything)
	</p>
	<!-- <textarea readonly cols="80" rows="2">{textboxes.demo}</textarea> <br> -->
	<p>
		Compiles
	</p>

	<p>
		Textarea with the content from an external script, using Svelte curly brackets in the HTML:
	</p>
	<!-- <textarea readonly cols="80" rows="2">{textboxes.demo}</textarea> <br> -->
	<p>
		*Doesn't* compile
	</p>

	<p>
		The same but the whole thing in a string but using @html (using vanilla string template): <br>
		The contents is commented out by removing the dollar sign as I can't use an HTML comment.
	</p>
	{@html `
		<textarea readonly cols="80" rows="2">{textboxes.demo}</textarea> <br>
	`}
	<p>
		*Doesn't* compile (unless the contents is removed in this way)
	</p> <br>

	<p>
		Same but the URL in the escaped string uses a hardcoded prefix (so the escaped HTML code would be valid if put unescaped without any JavaScript). Still loaded from an external script and put into this document with Svelte curly brackets:
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
		Same thing but using a non-existent property instead of the value property:
	</p>
	<textarea readonly cols="80" rows="2" foo={textboxes.demo}></textarea> <br>
	<p>
		Compiles (although no content because it's not set properly)
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
		Content set without another script, using the {"{`<content...>`}"} method:
	</p>
	<!-- <textarea readonly cols="80" rows="2">{`<a href={linkPage("foo")}>This works</a>`}</textarea> <br> -->
	<p>
		*Doesn't* compile
	</p> <br>

	<p>
		HTML string put directly in the document as the inner content of the tag:
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

	<p>
		Wildcard: setting the content on mount with Svelte curly brackets:
	</p>
	<textarea readonly cols="80" rows="2">{wildcardContent}</textarea> <br>
	<p>
		Compiles! Probably because it's not in the SSR so it can't be validated
	</p> <br>
</main>