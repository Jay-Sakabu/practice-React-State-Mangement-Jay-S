import React, { useState } from "react";

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target; //TODO: Maybe change naming convention, works for now though
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="the-whole-form">
            <div className="enter-yo-stuff">
                <h1>Feedback Form</h1>
                <form>

                    <h4>Enter name:</h4>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                </form>
                <form>
                    <h4>Enter email:</h4>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </form>
                <form>
                    <h4>Enter feedback:</h4>
                    <textarea
                        type="textarea"
                        name="feedback"
                        value={formData.nafeedbackme}
                        onChange={handleChange}
                        defaultValue={"Test"}
                    > </textarea>

                </form>
            </div>
            <div className="feedback-box">
                <h2>Preview of your feedback</h2>
                <p>Name: {formData.name}</p>
                <p>Email: {formData.email}</p>
                <p>Feedback: {formData.feedback}</p>
            </div>
        </div>

    )
}

export default FeedbackForm;