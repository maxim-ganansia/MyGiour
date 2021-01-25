import React, {Component} from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import '../Quizz.css'
// import './QuizMain.css';

export default class QuizzPourim extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: "Comment s'appelle le jeûne de Pourim ?",
            2: "A quelle date tombe le jeûne d'Esther ?",
            3: "Combien donner au minimum pour le Matanot laevyonim (don aux pauvres) ?",
            4: "Qu'est-ce que la Meguilat Esther ?",
            5: "A quoi signifie le mot Pourim ?",
            6: "Quel est le nom du premier ministre d'Assuerus qui voulait tuer les juifs ?",
            7: "Combien de fois doit-on entendre la meguila pour être quitte ?",
            8: "Pourquoi doit on donner le mahatsit Hashekel ?"
        },
        answers: {
            1: {
				1: "Matanot Laevyonim",
                2: "Jeûne d'Esther",
                3: "Jeûne de Mordehai",
                4: "Jeune de Pourim"
            },
            2: {
				1: "13 Adar",
                2: "14 Adar",
                3: "9 av",
                4: "17 Tamouz"
            },
            3: {
				1: "l'équivalent d'un repas pour une famille (environs 20euros)",
                2: "l'équivalent de deux repas pour une famille (environs 40euros)",
                3: "l'équivalent d'un repas pour une personne (environs 5euros)",
                4: "l'équivalent d'un repas pour deux personnes (environs 10euros)"
            },
            4: {
				1: "les Chants d'Esther",
                2: "L'histoire de Pourim",
                3: "Les lois de Pourim",
                4: "Les coutimes de Pourim"
            },
            5: {
				1: "Sort",
                2: "Joie",
                3: "Deguisement",
                4: "Histoire"
            },
            6: {
				1: "Assuerus",
                2: "Mordehai",
                3: "Vashti",
                4: "Haman"
            },
            7: {
				1: "0",
                2: "1",
                3: "2",
                4: "3"
            },
            8: {
				1: "Souvenir de l'impot du temple",
                2: "Pour donner aux pauvres",
                3: "Pour donner aux enfants",
                4: "Pour acheter des déguisements"
            },
        },
        correctAnswers: {
            1: '2',
            2: '1',
            3: '3',
            4: '2',
            5: '1',
            6: '4',
            7: '3',
            8: '1'
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