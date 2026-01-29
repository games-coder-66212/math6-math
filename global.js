 // global.js - Place this in your main folder


(function() {

    // Check for saved settings in localStorage

    const savedKey = localStorage.getItem('panicKey');

    const savedUrl = localStorage.getItem('panicUrl') || 'https://google.com';


    // Global Listener: This runs on every page that includes this script

    document.addEventListener('keydown', (e) => {

        // If the key pressed matches your saved Panic Key, redirect immediately

        if (savedKey && e.key === savedKey) {

            window.location.replace(savedUrl);

        }

    });

})();


// Shared function for opening the site in about:blank

function openInAboutBlank() {

    const html = document.documentElement.outerHTML;

    const blob = new Blob([html], { type: 'text/html' });

    const blobUrl = URL.createObjectURL(blob);


    const win = window.open('about:blank', '_blank');

    if (!win) {

        alert("Pop-up blocked! Please allow pop-ups for this site.");

        return;

    }


    win.document.body.style.margin = '0';

    win.document.body.style.height = '100vh';

    

    const iframe = win.document.createElement('iframe');

    iframe.src = blobUrl;

    iframe.style.border = 'none';

    iframe.style.width = '100%';

    iframe.style.height = '100%';

    

    win.document.body.appendChild(iframe);

}
