const content = `
scripts = document.querySelectorAll('script.repeatedScript');
if (scripts.length < SCRIPTS_TO_ADD) {
    for (let i = 0; i < EACH_SCRIPT_ITERS_COUNT; i++) {}
    const script = document.createElement('script');
    script.classList.add('repeatedScript');
    script.innerHTML = scripts[0].innerHTML;
    document.head.appendChild(script);
}
`
let scripts;
const SCRIPTS_TO_ADD = 50;
const EACH_SCRIPT_ITERS_COUNT = 500_000_000;
const script = document.createElement('script');
script.classList.add('repeatedScript');
script.innerHTML = content;
document.head.appendChild(script);