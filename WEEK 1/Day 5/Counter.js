 function makeCounter() {
            var count = 0;
           
            
            
            return {
                add: function() {
                    var next = previous + current;
                    previous = current;
                    current = next;
                    count = next;
                },
                subtract: function() {
                    count = count - 1;
                },
                reset: function() {
                     count = 0;
                        previous = 0;
                        current = 1;
                },
                getCount: function() {
                    return count;
                }
            };
        }
        
        var counter = makeCounter();
        var maxLimit = 10;
        var minLimit = -10;
        
        function updateDisplay() {
            document.getElementById('counterDisplay').textContent = counter.getCount();
        }
        
        function showMessage(msg) {
            document.getElementById('message').textContent = msg;
            setTimeout(function() {
                document.getElementById('message').textContent = '';
            }, 2000);
        }
        
        document.getElementById('incrementBtn').addEventListener('click', function() {
            if (counter.getCount() < maxLimit) {
                counter.add();
                updateDisplay();
            } else {
                showMessage('Maximum limit reached! (10)');
            }
        });
        
        document.getElementById('decrementBtn').addEventListener('click', function() {
            if (counter.getCount() > minLimit) {
                counter.subtract();
                updateDisplay();
            } else {
                showMessage('Minimum limit reached! (-10)');
            }
        });
        
        document.getElementById('resetBtn').addEventListener('click', function() {
            counter.reset();
            updateDisplay();
            showMessage('Counter reset to 0');
        });
        
        updateDisplay();
