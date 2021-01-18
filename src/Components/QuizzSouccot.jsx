import React, { Component } from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import '../Quizz.css'
// import './QuizMain.css';

export default class QuizzSouccot extends Component {

	// initiating the local state
	state = {
		quiestions: {
			1: 'Qu’est-ce que la fête de Souccot symbolise ?',
			2: 'Qu’est-ce que le mot “Souccot” signifie en hébreu ?',
			3: 'Quelle est la date du 1er jour de Souccot ?',
			4: 'Quelle est la Mitsva spécifique de la fête de Souccot ?',
			5: 'Qu’est-ce que Sim’ha Beth Hachoéva ?',
			6: "Qu’est-ce que Hocha’ana Rabba ?",
			7: 'Quel est le moment propice pour commencer la construction de la souccah ?',
			8: 'Qui sont les Oush Pizim ?',
			9: "Que sont les Arbaa Minim?",
			10: "Quel espèce ne fait pas partie des Arbaa Minim ?",
			11: "Quel est la prière du Loulav ?"


		},
		answers: {
			1: {
				1: 'Le don de la Torah',
				2: ' Le miracle des Nuées de Gloire',
				3: 'La sortie d’Égypte',
				4: 'La construction du temple'
			},
			2: {
                1: 'Nuées de gloire',
				2: 'Providence Divine',
				3: 'Protection Divine',
				4: 'Cabanes'
			},
			3: {
                1: '1er Tichri',
				2: '15 Tichri',
				3: '14 Adar',
				4: '15 Nissan'
			},
			4: {
                1: 'Résider dans la Soucca',
				2: 'Juste prier dans la Soucca',
				3: 'Juste manger dans la Soucca',
				4: 'Juste faire le Loulav dans la Soucca'
			},
			5: {
                1: 'Le 5ème jour de Souccot',
				2: 'Le dernier jour de Souccot',
				3: 'Organiser une réjouissance particulière en l’honneur de Souccot',
				4: 'Le landemain de Souccot'
			},
			6: {
                1: 'Un moment propice pour prier pour ce que l’on veut',
				2: 'Manger un repas de viande dans la Soucca',
				3: 'Moment propice pour agiter le loulav',
				4: 'Le 7ème jour de Souccot'
			},
			7: {
                1: "Dès le début de l'année",
				2: 'Quelques jours avant souccot',
				3: 'A la sortie de Kippour',
				4: 'Pas besoin de la construire'
			},
			8: {
                1: 'Les invités spéciaux',
				2: "Les agresseurs du peuple d'Israel",
				3: "Les amis du peuple d'Israel",
				4: 'Les invités standars'
			},
			9: {
                1: 'Les 4 types de juifs',
				2: 'Les 4 espèces',
				3: 'Les 4 livres',
				4: 'Les 4 mitsvots'
			},
			10: {
                1: 'Le Loulav',
				2: 'Etrog',
				3: 'Hadass',
				4: 'Sekakh'
			},
			11: {
                1: 'Al nétilat loulav',
				2: 'Al Mitsvat loulav',
				3: 'Boré peri loulav',
				4: 'Al Ahilat loulav'
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
