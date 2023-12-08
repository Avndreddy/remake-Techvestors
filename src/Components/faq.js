import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswer = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <div>
      <div className="question" onClick={toggleAnswer}>
        {question}
      </div>
      {isAnswerVisible && <div className="answer">{answer}</div>}
    </div>
  );
};

const FAQSection = () => {
  return (
    <div className="faq-container">
      <FAQItem
        question="What is Lorem Ipsum?"
        answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <FAQItem
        question="Why use it?"
        answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      />
      {/* Add more FAQ items as needed */}
    </div>
  );
};

export default FAQSection;
