     var questions = [
            {
                question: "What is the capital of France?",
                options: ["London", "Berlin", "Paris", "Madrid"],
                answer: 2
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                answer: 1
            },
            {
                question: "What is 5 + 7?",
                options: ["10", "11", "12", "13"],
                answer: 2
            },
            {
                question: "Who painted the Mona Lisa?",
                options: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Michelangelo"],
                answer: 2
            },
            {
                question: "What is the largest ocean on Earth?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                answer: 3
            },
            {
                question: "How many continents are there?",
                options: ["5", "6", "7", "8"],
                answer: 2
            },
            {
                question: "What is the fastest land animal?",
                options: ["Lion", "Cheetah", "Leopard", "Tiger"],
                answer: 1
            },
            {
                question: "Which language is most spoken worldwide?",
                options: ["Spanish", "English", "Mandarin Chinese", "Hindi"],
                answer: 2
            }
        ];
        
        var currentQuestion = 0;
        var score = 0;
        var selectedAnswer = -1;
        var answered = false;
        
        window.onload = function() {
            displayQuestion();
        }
        
        function displayQuestion() {
            answered = false;
            selectedAnswer = -1;
            
            var q = questions[currentQuestion];
            document.getElementById('questionText').innerHTML = q.question;
            document.getElementById('progressText').innerHTML = 'Question ' + (currentQuestion + 1) + ' of ' + questions.length;
            
            var optionsHTML = '';
            for (var i = 0; i < q.options.length; i++) {
                optionsHTML += '<div class="option" onclick="selectOption(' + i + ')" id="option' + i + '">';
                optionsHTML += q.options[i];
                optionsHTML += '</div>';
            }
            
            document.getElementById('optionsBox').innerHTML = optionsHTML;
            document.getElementById('nextBtn').disabled = true;
            updateScore();
        }
        
        function selectOption(index) {
            if (answered) return;
            
            selectedAnswer = index;
            var q = questions[currentQuestion];
            
         
            for (var i = 0; i < q.options.length; i++) {
                var opt = document.getElementById('option' + i);
                opt.classList.remove('selected');
            }
            
           
            document.getElementById('option' + index).classList.add('selected');
            document.getElementById('nextBtn').disabled = false;
        }
        
        function nextQuestion() {
            if (selectedAnswer === -1) return;
            
            answered = true;
            var q = questions[currentQuestion];
            
          
            if (selectedAnswer === q.answer) {
                score++;
                document.getElementById('option' + selectedAnswer).classList.remove('selected');
                document.getElementById('option' + selectedAnswer).classList.add('correct');
            } else {
                document.getElementById('option' + selectedAnswer).classList.remove('selected');
                document.getElementById('option' + selectedAnswer).classList.add('wrong');
                document.getElementById('option' + q.answer).classList.add('correct');
            }
            
            updateScore();
            
         
            setTimeout(function() {
                currentQuestion++;
                
                if (currentQuestion < questions.length) {
                    displayQuestion();
                } else {
                    showResults();
                }
            }, 1500);
        }
        
        function updateScore() {
            document.getElementById('scoreText').innerHTML = score;
            document.getElementById('questionCount').innerHTML = currentQuestion + '/' + questions.length;
        }
        
        function showResults() {
            document.getElementById('quizScreen').style.display = 'none';
            document.getElementById('resultScreen').style.display = 'block';
            
            var percentage = (score / questions.length) * 100;
            document.getElementById('finalScore').innerHTML = score + ' / ' + questions.length;
            
            var message = '';
            if (percentage >= 80) {
                message = '🏆 Excellent! You are a quiz master!';
            } else if (percentage >= 60) {
                message = '👍 Good job! Keep practicing!';
            } else if (percentage >= 40) {
                message = '😊 Not bad! Try again to improve!';
            } else {
                message = '📚 Keep learning! You can do better!';
            }
            
            document.getElementById('resultMessage').innerHTML = message;
        }
        
        function restartQuiz() {
            currentQuestion = 0;
            score = 0;
            selectedAnswer = -1;
            answered = false;
            
            document.getElementById('quizScreen').style.display = 'block';
            document.getElementById('resultScreen').style.display = 'none';
            
            displayQuestion();
        }