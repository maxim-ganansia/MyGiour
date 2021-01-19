import React, {Component} from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import '../Quizz.css'
// import './QuizMain.css';

export default class QuizzHanouka extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: 'A quelle date tombe Hanouka ?',
            2: 'Combien de branches possède la Hanoukia ?',
            3: 'Quelle est la coutume de Hanouka ?',
            4: 'Que célèbre t on a Hanouka ?',
            5: "Situez Hanouka dans l'histoire",
            6: 'Quelle est la meilleure huile pour allumer la Hanoukia ?',
            7: 'Quel est le temps minimal de durée de vie des bougies de Hanouka ?',
            8: "Si j'habite au 2eme étage d'un immeuble où dois-je placer la Hanoukia ?",
            9: 'A quoi sert le Shamash sur la Hanoukia ?',
            10: 'Dans quel sens allume t-on les bougies de Hanouka ?',
            11: 'Peut on déplacer la Hanoukia ?'

        },
        answers: {
            1: {
                1: '10 Tichri',
                2: '9 Av',
                3: '15 Shvat',
                4: '25 Kislev'
            },
            2: {
                1: '7 + Le shamash',
                2: '8 + Le shamash',
                3: '9 + Le shamash',
                4: '10 + Le shamash'
            },
            3: {
                1: 'Se déguiser et écouter la méguila',
                2: 'Manger des produits laitiers',
                3: 'Danser autour de la Torah',
                4: 'Allumer le chandelier, Manger des beignets et faire de la toupie'
            },
            4: {
                1: 'La destruction du temple',
                2: 'La construction du temple',
                3: '2 miracles',
                4: '1 miracle'
            },
            5: {
                1: 'A la création du monde',
                2: "A l'époque du premier Beth Hamikdash",
                3: 'Entre les deux Beth Hamikdash',
                4: "A l'époque du second Beth Hamikdash"
            },
            6: {
                1: "Huile d'olive pure",
                2: "Huile de tournesol",
                3: 'Huile de synthèse',
                4: 'Cire de bougie'
            },
            7: {
                1: '10 minutes',
                2: '30 minutes',
                3: '45 minutes',
                4: '1 heure'
            },
            8: {
                1: 'Sur le rebord de la fenètre',
                2: "Devant la porte d'entrée",
                3: 'Sur la table à manger',
                4: 'Dans la cuisine'
            },
            9: {
                1: 'Faire encore plus de lumière',
                2: 'Il sert à allumer les autres',
                3: "Il permet l'équilibre" ,
                4: 'Il nous permet de pouvoir profiter de la lumière de la Hanoukia'
            },
            10: {
                1: 'Droite à gauche',
                2: 'Gauche à droite',
                3: 'Comme on préfère',
                4: 'De haut en bas'
            },
            11: {
				1: "Ce n'est pas interdit",
                2: 'Oui',
                3: 'Non',
                4: 'Seulement pour profiter de la lumière si coupure électricité'
            },
        },
        correctAnswers: {
            1: '4',
            2: '2',
            3: '4',
            4: '3',
            5: '4',
            6: '1',
            7: '2',
            8: '1',
            9: '4',
            10: '2',
			11: '3' 
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
            <div className="Content">
                {step <= Object.keys(quiestions).length ? 
                    (<>
                        <Question
                            question={quiestions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Next</button>
                    </>) : (
                        <div className="finalPage">
                            <h1>Bravo tu as fini le Quizz !</h1>
                            <p>Ton score est : {score} of {Object.keys(quiestions).length}</p>
                        </div>
                    )
                }
            </div>
        );
    }
}



// import React, { useState } from 'react';


// export default function App() {
// 	const questions = [
// 		{
// 			questionText: 'Quelle est la date de Hanoukkah ?',
// 			answerOptions: [
// 				{ answerText: '10 tevet', isCorrect: false },
// 				{ answerText: '15 Shvat', isCorrect: false },
// 				{ answerText: '25 Kislev', isCorrect: true },
// 				{ answerText: '25 Nissan', isCorrect: false },
// 			],
// 		},
// 		{
// 			questionText: 'combien de branches possède la Hannoukia ?',
// 			answerOptions: [
// 				{ answerText: '7', isCorrect: false },
// 				{ answerText: '8', isCorrect: false },
// 				{ answerText: '9', isCorrect: true },
// 				{ answerText: '10', isCorrect: false },
// 			],
// 		},
// 		{
// 			questionText: 'Quelle est la coutume de hannoukah ?',
// 			answerOptions: [
// 				{ answerText: 'Se déguiser et écouter la méguila', isCorrect: false },
// 				{ answerText: 'Allumer le chandelier, Manger des beignets et faire de la toupie', isCorrect: true },
// 				{ answerText: 'Manger des produits laitiers', isCorrect: false },
// 				{ answerText: 'Danser autour de la torah', isCorrect: false },
// 			],
// 		},
// 		{
// 			questionText: 'Que célèbre t on a hannoukah ?',
// 			answerOptions: [
// 				{ answerText: '2 miracles', isCorrect: true },
// 				{ answerText: '1 miracle', isCorrect: false },
// 				{ answerText: 'La destruction du temple', isCorrect: false },
// 				{ answerText: 'la construction du temple', isCorrect: false },
// 			],
// 		},
// 		{
// 			questionText: 'situez hannoukah dans l histoire ',
// 			answerOptions: [
// 				{ answerText: 'A la création du monde', isCorrect: false },
// 				{ answerText: 'Avant le premier beth hamikdash', isCorrect: false },
// 				{ answerText: 'Après le 2eme beth Hamikdash', isCorrect: false },
// 				{ answerText: 'Entre le premier et le 2eme beth Hamikdash', isCorrect: true },
// 			],
//         },
//         {
// 			questionText: 'Quels sont les initiales sur les toupies de Hannoukah en Israel ? ',
// 			answerOptions: [
// 				{ answerText: 'Ness Gadol Aya Po', isCorrect: true },
// 				{ answerText: 'Ness Gadol Aya sham', isCorrect: false },
// 				{ answerText: 'Hanerot Hallalou Maoz Tsour', isCorrect: false },
// 				{ answerText: 'Aya Cham Ness Gadol', isCorrect: false },
// 			],
// 		},
// 	];

//     const [currentQuestion, setCurrentQuestion] = useState(0);
    
//     const [showScore, setShowScore] = useState(false);

//     const [score, setScore] = useState(0);

// 	const handleAnswerButtonClick = (isCorrect) => {
//         if(isCorrect === true){
//             setScore(score + 1)
//         }

//         const nextQuestion = currentQuestion + 1;
//         if(nextQuestion < questions.length){
//             setCurrentQuestion(nextQuestion)
//         }else{
//             setShowScore(true)
//         }
		
// 	}

// 	return (
//         <>
//         <h1 className="titre-quizz">Quizz de Hannoukah</h1>
// 		<div className='quizz'>
// 			{/* HINT: replace "false" with logic to display the 
//       score when the user has answered all the questions */}
// 			{showScore ? (
// 				<div className='score-section'>You scored {score} out of {questions.length}</div>
// 			) : (
// 				<>
// 					<div className='question-section'>
// 						<div className='question-count'>
// 							<span>Question {currentQuestion + 1}</span>/{questions.length}
// 						</div>
// 						<div className='question-text'>{questions[currentQuestion].questionText}</div>
// 					</div>
// 					<div className='answer-section'>
// 						{questions[currentQuestion].answerOptions.map((answerOptions)=>(
// 						<button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
// 						))}
// 					</div>
// 				</>
// 			)}
// 		</div>
//         </>
// 	);
// }
