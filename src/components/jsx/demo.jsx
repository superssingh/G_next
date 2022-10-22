const Demo = () => {
  return (
    <div>
      <section className="faq">
        <div id="question flex">
          <div>How to use it?</div>
          <icon>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="downPointer w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </icon>
        </div>
        <div className="answer">
          Just follow the articles and videos step by step. Be the experimental.
        </div>
      </section>

      <section>
        <div id="question">
          <div>How to use it?</div>
          <icon></icon>
        </div>
        <div className="answer">
          Just follow the articles and videos step by step. Be the experimental.
        </div>
      </section>
    </div>
  );
};

export default Demo;
