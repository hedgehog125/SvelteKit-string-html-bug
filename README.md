# Sveltekit-string-html-bug
This is a simple demo of a bug in SvelteKit where string literals are half treated as HTML. This issue happens when you build with a base path try and include the HTML for an anchor tag in plain text (so the you can read the code instead of seeing a link) in a page.

Normally I'd use the repository name as the base path so I can host on GitHub pages, but I'm using "build" here to replicate the folder structure so you can test things. For this reason, make sure you host it as stated below.

# Demo
Have a look at the static/src/routes/index.svelte and static/src/lib/Demo.js files. Also host the static folder with something like http-server, and go to /build to test. I've already documented which lines cause issues there, but you can try removing or commenting out different lines to see yourself. Note that dev mode won't test it, as I've written some code to disable the base path in that mode (in svelte.config.js), so host as described earlier and build each time. I've also used HTML comments around the broken ones so the page can actually compile.