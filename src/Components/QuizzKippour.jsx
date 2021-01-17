import React, {Component} from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import '../Quizz.css'
// import './QuizMain.css';

export default class QuizzKippour extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: 'A quelle date tombe Yom Kippour ?',
            2: 'A quoi correspond les Kaparots ?',
            3: 'A quoi correspond la Séouda Mafseket ?',
            4: 'A qui devons nous dire Mehila ?',
            5: 'Pourquoi ne portons nous pas de chaussures en cuir à Kippour ?',
            6: 'Combien de prières compose Yom Kippour ?',
            7: 'A quoi correspond la prière de Kol Nidré ?',
            8: 'Combien de personnes montent à la Torah le jour de Kippour ?',
            9: "Qu'est-ce que le Vidouï ?",
            10: "Pourquoi est-il d'usage de s'habiller en blanc ?",
            11: "Doit-on jeuner si Kippour tombe un jour de shabbat ?"

        },
        answers: {
            1: {
                1: '25 Kislev',
                2: '10 Tichri',
                3: '15 shvat',
                4: '14 Adar'
            },
            2: {
                1: 'Don aux pauvres',
                2: 'Demi shekel',
                3: 'Expiation des fautes',
                4: 'Don de la Torah'
            },
            3: {
                1: 'Repas avant le jeune',
                2: 'Annulation des voeux',
                3: 'Don au pauvres',
                4: 'Priere de cloture de Kippour'
            },
            4: {
                1: 'A Hakadosh Barouh Hou seulement',
                2: 'A notre prochain seulement',
                3: 'A Hakadosh Barouh Hou et à notre prochain',
                4: 'A personne'
            },
            5: {
                1: 'Cela fait trop mal aux pieds',
                2: "Pour ne pas discreminer ceux qui ne peuvent s'en procurer ",
                3: "Car c'est trop classe",
                4: "Car trop confortable et rappel le veau d'or"
            },
            6: {
                1: 'Trois prières',
                2: 'Quatres prières',
                3: 'Cinq prières',
                4: 'Six prières'
            },
            7: {
                1: 'Repas de fin de fête',
                2: 'Expiation des fautes',
                3: 'Dons aux pauvres',
                4: 'Annulation des voeux'
            },
            8: {
                1: '5 personnes',
                2: '6 personnes',
                3: '7 personnes',
                4: '8 personnes'
            },
            9: {
                1: 'Confession des péchés',
                2: 'Expiation des fautes',
                3: 'repas de fete',
                4: 'Annulation des voeux'
            },
            10: {
                1: 'Pas de risques de se salir en mengeant',
                2: 'Pour nous différencier des autres',
                3: 'Pour refleter la lumière',
                4: 'Pour ressembler à des anges'
            },
            11: {
                1: 'Oui nous jeunons',
                2: 'Non Shabbat est plus important',
                3: 'Nous avons seulement le droit de boire',
                4: 'Nous repoussons le jeune au landemain'
            },
        },
        correctAnswers: {
            1: '2',
            2: '3',
            3: '1',
            4: '3',
            5: '4',
            6: '3',
            7: '4',
            8: '2',
            9: '1',
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