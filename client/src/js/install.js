const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    console.log('beforeinstallprompt fired');
    e.preventDefault();
    deferredPrompt = e;
    butInstall.style.display = 'block';
    }
);

butInstall.addEventListener('click', () => {
    console.log('butInstall clicked');
    butInstall.style.display = 'none';
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
        console.log(choiceResult.outcome);
        if (choiceResult.outcome === 'dismissed') {
            console.log('User cancelled installation');
        } else {
            console.log('User added to home screen');
        }
        deferredPrompt = null;
    });
}
);

window.addEventListener('appinstalled', (evt) => {
    console.log('appinstalled fired', evt);
}
);

