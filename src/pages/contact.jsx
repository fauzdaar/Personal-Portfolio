export default function Contact() {
  return (
    <section className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white py-12 px-6 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">📬 Contact Me</h2>

        <p className="text-center mb-10 text-gray-700 dark:text-gray-300">
          Feel free to reach out using the form below. I’ll get back to you as soon as possible.
        </p>

        <form
          action="https://formspree.io/f/mvgraklz"
          method="POST"
          className="space-y-6 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow transition"
        >
          {/* Optional Hidden Inputs */}
          <input type="hidden" name="_subject" value="New message from portfolio contact form" />
          <input type="hidden" name="_captcha" value="false" />

          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              className="w-full p-3 rounded bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message..."
              className="w-full p-3 rounded bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
