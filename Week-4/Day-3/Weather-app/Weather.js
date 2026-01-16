 const API_KEY = '7d41f6338a08b9c5785ce41b3ca75710'; 
        const API_URL = 'https://openweathermap.org';

        
        function fetchWeatherWithPromise(city) {
            return fetch(`${API_URL}?key=${API_KEY}&q=${city}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('City not found!');
                    }
                    return response.json();
                })
                .then(data => {
                    return data;
                })
                .catch(error => {
                    throw error;
                });
        }

        // Method 2: 
        async function fetchWeatherWithAsync(city) {
            try {
                const response = await fetch(`${API_URL}?key=${API_KEY}&q=${city}`);
                
                if (!response.ok) {
                    throw new Error('City not found!');
                }
                
                const data = await response.json();
                return data;
            } catch (error) {
                throw error;
            }
        }

        // Main function to get weather
        async function getWeather() {
            const city = document.getElementById('cityInput').value;
            const loading = document.getElementById('loading');
            const error = document.getElementById('error');
            const weatherInfo = document.getElementById('weatherInfo');

            if (city === '') {
                alert('Please enter a city name!');
                return;
            }

            // Show loading
            loading.style.display = 'block';
            error.style.display = 'none';
            weatherInfo.style.display = 'none';

            try {
               
                const data = await fetchWeatherWithAsync(city);
                
           
                
                displayWeather(data);
            } catch (err) {
                error.textContent = err.message;
                error.style.display = 'block';
            } finally {
                loading.style.display = 'none';
            }
        }

        function displayWeather(data) {
            const weatherInfo = document.getElementById('weatherInfo');
            
            document.getElementById('cityName').textContent = data.location.name + ', ' + data.location.country;
            document.getElementById('temperature').textContent = Math.round(data.current.temp_c) + '°C';
            document.getElementById('description').textContent = data.current.condition.text;
            document.getElementById('humidity').textContent = data.current.humidity + '%';
            document.getElementById('windSpeed').textContent = data.current.wind_kph + ' km/h';
            
            weatherInfo.style.display = 'block';
        }

        document.getElementById('cityInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                getWeather();
            }
        });