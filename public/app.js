// public/app.js
document.getElementById('shorten-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const originalUrl = document.getElementById('original-url').value;
    const customSlug = document.getElementById('custom-slug').value;
    const response = await fetch('/api/url/shorten', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ originalUrl, customSlug })
    });

    const data = await response.json();
    if (response.ok) {
        document.getElementById('short-url').textContent = data.shortUrl;
        document.getElementById('short-url').href = data.shortUrl;
        document.getElementById('qr-code').src = data.qrCode;
        document.getElementById('result').style.display = 'block';
    } else {
        alert('Error: ' + data);
    }
});
