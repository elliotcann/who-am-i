fetch('/api/whoami')
.then(response => response.json())
.then(data => {
    document.getElementById('ip').textContent = data.ipaddress;
    document.getElementById('language').textContent = data.language;
    document.getElementById('software').textContent = data.software;
})
.catch(error => {
    console.error('Error fetching WhoAmI data:', error);
});