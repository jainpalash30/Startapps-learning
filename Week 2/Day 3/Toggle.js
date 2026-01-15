
        var savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            if (savedTheme === 'dark') {
                document.body.classList.add('dark');
                document.getElementById('themeIcon').textContent = '🌙';
                document.getElementById('themeStatus').textContent = 'Current Theme: Dark Mode';
            }
        }
        
       
        function toggleTheme() {
            var body = document.body;
            var icon = document.getElementById('themeIcon');
            var status = document.getElementById('themeStatus');
            
            if (body.classList.contains('dark')) {

                body.classList.remove('dark');
                icon.textContent = '☀️';
                status.textContent = 'Current Theme: Light Mode';
                localStorage.setItem('theme', 'light');
            } else {
                body.classList.add('dark');
                icon.textContent = '🌙';
                status.textContent = 'Current Theme: Dark Mode';
                localStorage.setItem('theme', 'dark');
            }
        }
        
