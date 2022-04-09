/* This example requires Tailwind CSS v2.0+ */
const faqs = [
    {
      id: 1,
      question: "Lorem ipsum, dolor sit amet consectetur adipisicing elit?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ipsum laudantium eaque minus placeat! Minima, cumque! Nam, vero!",
    },
    {
        id: 2,
        question: "Fugiat nihil aperiam magni a ut?",
        answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis sint accusantium distinctio."
    },
    {
        id: 3,
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, provident?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum eum ut eveniet laudantium iusto."
    },
    {
        id: 4,
        question: "Lorem ipsum, dolor sit amet consectetur adipisicing elit?",
        answer:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ipsum laudantium eaque minus placeat! Minima, cumque! Nam, vero!",
      },
      {
          id: 5,
          question: "Fugiat nihil aperiam magni a ut?",
          answer:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis sint accusantium distinctio."
      },
    {

    }
    // More questions...
  ]
  
  export default function FAQ() {
    return (
      
        <div className="max-w-7xl mx-auto py-12 px-8 divide-y divide-white divide-opacity-20 lg:py-16">
          <h2 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl">Frequently asked questions</h2>
          <div className="mt-8">
            <dl className="divide-y divide-white divide-opacity-20">
              {faqs.map((faq) => (
                <div key={faq.id} className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                  <dt className="text-base font-medium text-white md:col-span-5">{faq.question}</dt>
                  <dd className="mt-2 md:mt-0 md:col-span-7">
                    <p className="text-base text-white text-opacity-60">{faq.answer}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
     
    )
  }
  