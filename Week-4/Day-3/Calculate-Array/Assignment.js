 function calculateSum() {
            const input = document.getElementById('arrayInput').value.trim();
            const errorDiv = document.getElementById('error');
            const resultDiv = document.getElementById('result');
            
            errorDiv.classList.remove('show');
            resultDiv.classList.remove('show');

            if (!input) {
                showError('Please enter some numbers!');
                return;
            }

            const parts = input.split(',');
            const numbers = [];

            for (let i = 0; i < parts.length; i++) {
                const num = parseFloat(parts[i].trim());
                
                if (isNaN(num)) {
                    showError(`Invalid number: "${parts[i].trim()}"`);
                    return;
                }
                
                numbers.push(num);
            }

            const sum = numbers.reduce((acc, curr) => acc + curr, 0);

            document.getElementById('sumValue').textContent = sum;
            document.getElementById('arrayDisplay').textContent = 
                `Array: [${numbers.join(', ')}]`;
            resultDiv.classList.add('show');
        }

        function showError(message) {
            const errorDiv = document.getElementById('error');
            errorDiv.textContent = message;
            errorDiv.classList.add('show');
        }

        function clearAll() {
            document.getElementById('arrayInput').value = '';
            document.getElementById('result').classList.remove('show');
            document.getElementById('error').classList.remove('show');
        }

        document.getElementById('arrayInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateSum();
            }
        });