import React, { useState } from 'react';


export default function App() {
	const questions = [
		{
			questionText: 'Quelle est la date de Hanoukkah ?',
			answerOptions: [
				{ answerText: '10 tevet', isCorrect: false },
				{ answerText: '15 Shvat', isCorrect: false },
				{ answerText: '25 Kislev', isCorrect: true },
				{ answerText: '25 Nissan', isCorrect: false },
			],
		},
		{
			questionText: 'combien de branches possède la Hannoukia ?',
			answerOptions: [
				{ answerText: '7', isCorrect: false },
				{ answerText: '8', isCorrect: false },
				{ answerText: '9', isCorrect: true },
				{ answerText: '10', isCorrect: false },
			],
		},
		{
			questionText: 'Quelle est la coutume de hannoukah ?',
			answerOptions: [
				{ answerText: 'Se déguiser et écouter la méguila', isCorrect: false },
				{ answerText: 'Allumer le chandelier, Manger des beignets et faire de la toupie', isCorrect: true },
				{ answerText: 'Manger des produits laitiers', isCorrect: false },
				{ answerText: 'Danser autour de la torah', isCorrect: false },
			],
		},
		{
			questionText: 'Que célèbre t on a hannoukah ?',
			answerOptions: [
				{ answerText: '2 miracles', isCorrect: true },
				{ answerText: '1 miracle', isCorrect: false },
				{ answerText: 'La destruction du temple', isCorrect: false },
				{ answerText: 'la construction du temple', isCorrect: false },
			],
		},
		{
			questionText: 'situez hannoukah dans l histoire ',
			answerOptions: [
				{ answerText: 'A la création du monde', isCorrect: false },
				{ answerText: 'Avant le premier beth hamikdash', isCorrect: false },
				{ answerText: 'Après le 2eme beth Hamikdash', isCorrect: false },
				{ answerText: 'Entre le premier et le 2eme beth Hamikdash', isCorrect: true },
			],
        },
        {
			questionText: 'Quels sont les initiales sur les toupies de Hannoukah en Israel ? ',
			answerOptions: [
				{ answerText: 'Ness Gadol Aya Po', isCorrect: true },
				{ answerText: 'Ness Gadol Aya sham', isCorrect: false },
				{ answerText: 'Hanerot Hallalou Maoz Tsour', isCorrect: false },
				{ answerText: 'Aya Cham Ness Gadol', isCorrect: false },
			],
		},
	];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    
    const [showScore, setShowScore] = useState(false);

    const [score, setScore] = useState(0);

	const handleAnswerButtonClick = (isCorrect) => {
        if(isCorrect === true){
            setScore(score + 1)
        }

        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion)
        }else{
            setShowScore(true)
        }
		
	}

	return (
        <>
        <h1 className="titre-quizz">Quizz de Hannoukah</h1>
		<div className='quizz'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOptions)=>(
						<button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
        </>
	);
}
