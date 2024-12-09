'use client';
import { ChangeEvent, useEffect, useState } from "react";
import Header from "../../teacher_components/header"
import Sidebar from "../../teacher_components/sidebar"
import { Button } from '@/components/ui/button';
import { userLoginState } from "@/state";
import { useRecoilState } from "recoil";

interface Question {
    text: string;
    type: "multiple" | "fill";
    answers: string[];
    correctAnswerIndex: number;
}
const editQuizPage = ({ params }: { params: Promise<{ quizId: string }> }) => {
    const [rtnParams, setRtnParams] = useState<{ quizId: string }>({ quizId: "" });
    const loadParams = async () => {
        const unwrappedParams = await params;
        return { quizId: unwrappedParams.quizId };
    }
    const [userLogin, setUserLogin] = useRecoilState(userLoginState)
    useEffect(() => {
            loadParams().then((res) => setRtnParams(res));
            const userFromSessionRaw = sessionStorage.getItem('userLogin')
            if(!userFromSessionRaw) return
            setUserLogin(JSON.parse(userFromSessionRaw))  
        }, [])
    const [questions, setQuestions] = useState<Question[]>([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const sampleQuestions: Question[] = [
        {
            text: "What is the capital of France?",
            type: "multiple",
            answers: ["Berlin", "Madrid", "Paris", "Rome"],
            correctAnswerIndex: 2, // Paris
        },
        {
            text: "Which programming language is known as the backbone of web development?",
            type: "multiple",
            answers: ["Python", "JavaScript", "C++", "Ruby"],
            correctAnswerIndex: 1, // JavaScript
        },
        {
            text: "The process of water turning into vapor is called __________.",
            type: "fill",
            answers: ["evaporation"],
            correctAnswerIndex: 0, // Correct answer for fill
        },
        {
            text: "What is 2 + 2?",
            type: "multiple",
            answers: ["3", "4", "5", "6"],
            correctAnswerIndex: 1, // 4
        },
        {
            text: "Complete the phrase: The early bird catches the __________.",
            type: "fill",
            answers: ["worm"],
            correctAnswerIndex: 0, // Correct answer for fill
        },
    ];
    useEffect(() => {
        setQuestions(sampleQuestions);
    }, []);
    const [newQuestion, setNewQuestion] = useState<Question>({
        text: "",
        type: "multiple",
        answers: ["", "", "", ""],
        correctAnswerIndex: 0,
    });

    const handleAddQuestion = () => {
        setQuestions([...questions, newQuestion]);
        setNewQuestion({
            text: "",
            type: "multiple",
            answers: ["", "", "", ""],
            correctAnswerIndex: 0,
        });
        setModalOpen(false);
    };

    const renderAnswers = (question: { text: string; type: string; answers: string[]; correctAnswerIndex: number }) => {
        if (question.type === "multiple") {
            return question.answers.map((answer, index) => (
                <div
                    key={index}
                    className={`p-2 rounded-lg ${
                        index === question.correctAnswerIndex
                            ? "bg-green-200"
                            : "bg-red-200"
                    }`}
                >
                    {answer}
                </div>
            ));
        } else if (question.type === "fill") {
            return (
                <div className="p-2 rounded-lg bg-green-200">
                    Correct Answer: {question.answers[0]}
                </div>
            );
        }
    };

    console.log(rtnParams)
    return (
        <div className="grid grid-rows-12 grid-cols-12 gap-4 bg-black ">
            {Header(userLogin.lastName + ' ' + userLogin.firstName)}
            {Sidebar(userLogin.firstName, userLogin.lastName)}
            {/* Header */}
            <div className="bg-pink-600 col-start-3 col-span-10 row-span-1 rounded-xl text-3xl text-white font-semibold uppercase items-center p-5 flex flex-col justify-center">
                <h1 className="self-center">quiz title</h1>
                <button
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                    onClick={() => setModalOpen(true)}
                >
                    Add Question
                </button>
            </div>


            {/* Questions Container */}
            <div className="space-y-6 bg-white col-start-3 col-span-10 row-span-9 mb-4 rounded-xl">
                {questions.map((question, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md p-6 rounded-lg space-y-4"
                    >
                        <h2 className="text-lg font-semibold">{`Q${index + 1}: ${
                            question.text
                        }`}</h2>
                        <div className="space-y-2">{renderAnswers(question)}</div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Add a Question</h2>
                        <label className="block mb-2">
                            Question Text:
                            <input
                                type="text"
                                className="w-full border rounded-lg p-2 mt-1"
                                value={newQuestion.text}
                                onChange={(e) =>
                                    setNewQuestion({ ...newQuestion, text: e.target.value })
                                }
                            />
                        </label>
                        <label className="block mb-2">
                            Question Type:
                            <select
                                className="w-full border rounded-lg p-2 mt-1"
                                value={newQuestion.type}
                                onChange={(e) =>
                                    setNewQuestion({ ...newQuestion, type: e.target.value as "multiple" | "fill" })
                                }
                            >
                                <option value="multiple">Multiple Choice</option>
                                <option value="fill">Fill in the Blank</option>
                            </select>
                        </label>

                        {newQuestion.type === "multiple" && (
                            <>
                                {newQuestion.answers.map((answer, index) => (
                                    <label key={index} className="block mb-2">
                                        Answer {index + 1}:
                                        <input
                                            type="text"
                                            className="w-full border rounded-lg p-2 mt-1"
                                            value={answer}
                                            onChange={(e) => {
                                                const updatedAnswers = [...newQuestion.answers];
                                                updatedAnswers[index] = e.target.value;
                                                setNewQuestion({
                                                    ...newQuestion,
                                                    answers: updatedAnswers,
                                                });
                                            }}
                                        />
                                    </label>
                                ))}
                                <label className="block mb-2">
                                    Correct Answer:
                                    <select
                                        className="w-full border rounded-lg p-2 mt-1"
                                        value={newQuestion.correctAnswerIndex}
                                        onChange={(e) =>
                                            setNewQuestion({
                                                ...newQuestion,
                                                correctAnswerIndex: parseInt(e.target.value, 10),
                                            })
                                        }
                                    >
                                        {newQuestion.answers.map((_, index) => (
                                            <option key={index} value={index}>
                                                Answer {index + 1}
                                            </option>
                                        ))}
                                    </select>
                                </label>
                            </>
                        )}

                        {newQuestion.type === "fill" && (
                            <label className="block mb-2">
                                Correct Answer:
                                <input
                                    type="text"
                                    className="w-full border rounded-lg p-2 mt-1"
                                    value={newQuestion.answers[0]}
                                    onChange={(e) =>
                                        setNewQuestion({
                                            ...newQuestion,
                                            answers: [e.target.value],
                                        })
                                    }
                                />
                            </label>
                        )}

                        <div className="flex justify-end space-x-4 mt-4">
                            <button
                                className="bg-gray-300 px-4 py-2 rounded-lg"
                                onClick={() => setModalOpen(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                                onClick={handleAddQuestion}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default editQuizPage