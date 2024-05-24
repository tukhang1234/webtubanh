document.getElementById('hackButton').addEventListener('click', function() {
    const output = document.getElementById('output');
    output.innerHTML = '';
    
    const messages = [
        "Initializing hack...",
        "Bypassing firewall...",
        "Accessing mainframe...",
        "Decrypting passwords...",
        "Hacking complete! Just kidding :)"
    ];

    let i = 0;
    const interval = setInterval(function() {
        if (i < messages.length) {
            output.innerHTML += `<p>${messages[i]}</p>`;
            i++;
        } else {
            clearInterval(interval);
        }
    }, 1000);
});
