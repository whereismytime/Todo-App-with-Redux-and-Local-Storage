function FAQ() {
  const faqData = [
    {
      question: "How do I add tasks?",
      answer:
        "To add a task, use the 'Add Task' button. Enter your task details in the input box and click the button to add it to your task list.",
    },
    {
      question: "Can I edit tasks?",
      answer:
        "Yes, you can edit any task by clicking the 'Edit' button. After modifying the task details, you can save the changes or cancel them if needed.",
    },
    {
      question: "How do I delete a task?",
      answer:
        "You can delete a task by clicking the 'Delete' button next to it. This will permanently remove the task from your list.",
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question">
            Question {index + 1}: {faq.question}
          </div>
          <div className="faq-answer">{faq.answer}</div>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
