# Sveltekit-string-html-bug
This is a simple demo of a bug in SvelteKit where string literals are half treated as HTML. This issue happens when you build with a base path and include an escaped link that doesn't start with the base.

Normally I'd use the repository name as the base path so I can host on GitHub pages, but I'm using "build" here to replicate the folder structure so you can test things.

# Demo
Have a look at the static/src/routes/index.svelte and lib/Demo.js files. I've documented which lines produce errors but you can try removing or commenting out different lines to see yourself. Note that dev mode won't test it, as I've written some code to disable the base path in that mode. So that you can actually see the problematic lines, I've used HTML comments on them so it can compile.