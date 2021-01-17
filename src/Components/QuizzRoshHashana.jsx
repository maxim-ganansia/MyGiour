import React, { Component } from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import '../Quizz.css'
// import './QuizMain.css';

export default class QuizzKippour extends Component {

	// initiating the local state
	state = {
		quiestions: {
			1: 'A quelle date tombe Rosh Hashana ?',
			2: 'A quoi correspond Rosh Hashana ?',
			3: 'A quel moment sonnons-nous le shoffar ?',
			4: 'Que ne fait on PAS la veille de Rosh Hashana ?',
			5: 'Quelle ingrédient ne fait PAS partie du plateau du seder?',
			6: "Quel est l'autre nom de cette fête ?",
			7: 'Que célèbre t on à Rosh Hashana ?',
			8: 'Que sont les Selihots ?',
			9: "Combien de sonneries de shoffar devons nous entendre au minimum ?",
			10: "Combien de sonneries de shoffar sonnons nous à Rosh Hashana ?",
			11: "Que sont les Yamims Noraîms"


		},
		answers: {
			1: {
				1: '25 Kislev',
				2: '1er et 2 Tichri',
				3: '15 shvat',
				4: '14 Adar'
			},
			2: {
				1: 'Nouvel an des arbres',
				2: 'Nouvel an des animaux',
				3: 'La sortie d Egypte',
				4: 'Nouvel an des Hommes',
			},
			3: {
				1: 'Arvit',
				2: 'Moussaf',
				3: 'Chaharit',
				4: 'Minha',
			},
			4: {
				1: 'Kaparots',
				2: 'Aller Au Cimetière',
				3: 'Aller Au Mikveh',
				4: 'Atarat Nedarim',
			},
			5: {
				1: 'Pomme et Miel',
				2: 'Grenade',
				3: 'Herbes amères',
				4: 'Blette',
			},
			6: {
				1: 'Hoshana Raba',
				2: 'Simha Torah',
				3: 'Matan Torah',
				4: 'Yom Hadin',
			},
			7: {
				1: 'Don de la Torah',
				2: "Sortie d'Egypte",
				3: 'Nouvel an, Jour du jugement',
				4: 'Miracle de Rosh Hashana',
			},
			8: {
				1: 'Les supplications',
				2: "L'annulation des voeux",
				3: 'Expiation des fautes',
				4: 'Repas de fête',
			},
			9: {
				1: '1',
				2: "30",
				3: '60',
				4: '100',
			},
			10: {
				1: '1',
				2: "30",
				3: '60',
				4: '100',
			},
			11: {
				1: '10 jours de pénitences',
				2: "10 jours de prières",
				3: '10 jours de fête',
				4: "Cela n'existe pas",
            },
		},
		correctAnswers: {
			1: '2',
			2: '4',
			3: '2',
			4: '1',
			5: '3',
			6: '4',
			7: '3',
			8: '1',
			9: '2',
			10: '4',
			11: '1'
		},
		correctAnswer: 0,
		clickedAnswer: 0,
		step: 1,
		score: 0
	}

	// the method that checks the correct answer
	checkAnswer = answer => {
		const { correctAnswers, step, score } = this.state;
		if (answer === correctAnswers[step]) {
			this.setState({
				score: score + 1,
				correctAnswer: correctAnswers[step],
				clickedAnswer: answer
			});
		} else {
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

	render() {
		let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
		return (
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

