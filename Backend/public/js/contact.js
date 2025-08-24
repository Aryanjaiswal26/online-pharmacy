 function openGoogleMaps() {
            // United Institute of Technology, Naini, Prayagraj location
            const latitude = 25.3909; 
            const longitude = 81.9037;
            const businessName = "United Institute of Technology"; 
            
            // Create Google Maps URL with exact institute location
            const address = "United Institute of Technology, Naini, Prayagraj, Uttar Pradesh 211010";
            const addressUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
            
            // Open Google Maps in a new tab
            window.open(addressUrl, '_blank');
        }

        // Add some interactive feedback
        document.querySelector('.map-section').addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-2px) scale(0.98)';
        });

        document.querySelector('.map-section').addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-5px) scale(1)';
        });

        document.querySelector('.map-section').addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });