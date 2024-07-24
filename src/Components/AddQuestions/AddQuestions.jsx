import { useState } from 'react'
import { doc, arrayUnion, updateDoc} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import "./AddQuestions.css"

function AddQuestions() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const userEmail = sessionStorage.getItem('userEmail');
    const navigate = useNavigate();

    const handleAddQuestion = async (e) => {
        e.preventDefault()
        if(!userEmail || userEmail === ""){
            navigate("/login")
        }
        try {
            const userDocRef = doc(db, "users", userEmail);
            console.log(userDocRef.path);

            // Data to be added to Firestore
            const data = {
                question: question,
                answer: answer,
            };
    
            // Add a new document with the data
            await updateDoc(userDocRef, {
                questions: arrayUnion(data)
            });
            alert('Question added successfully');
            setQuestion('');
            setAnswer('');
        } catch (error) {
            alert(error.message);
        }
    };
  return (
    <form action="" className='addQuestionForm'>
        <div className='addQuestion'>
            <div className='addQuestionContainer'>
                <label className='addQuestionLabel' htmlFor="question">Question</label>
                <input 
                    type="text" 
                    id='question' 
                    name='question' 
                    placeholder='question' 
                    value={question}
                    className='addQuestionInput'
                    onChange={(e) => setQuestion(e.target.value)}
                />
            </div>
            <div className='addQuestionContainer'>
                <label className='addQuestionLabel' htmlFor="answer">Answer</label>
                <input 
                    type="text" 
                    id='answer' 
                    name='answer' 
                    placeholder='answer'
                    value={answer}
                    className='addQuestionInput'
                    onChange={(e) => setAnswer(e.target.value)}
                />
            </div>
        </div>
        
        <button className='addButton' type="submit" onClick={(e) => handleAddQuestion(e)}>Add Question</button>
    </form>
  )
}

export default AddQuestions