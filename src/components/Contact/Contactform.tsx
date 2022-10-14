const ContactForm = () => (
  <form className="w-2/3 space-y-4">
    <div className="flex w-full gap-4">
      <div className="flex flex-col w-1/2">
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          id="Name"
          className="text-gray-700 py-2 px-4 focus:outline-none"
          placeholder="Enter your name"
        />
      </div>
      <div className="flex flex-col w-1/2">
        <label htmlFor="Email">Email</label>
        <input
          type="text"
          id="Email"
          className="text-gray-700 py-2 px-4 focus:outline-none"
          placeholder="Enter your email"
        />
      </div>
    </div>
    <textarea
      className="w-full text-gray-700 py-2 px-4 focus:outline-none h-56"
      placeholder="Type your message"></textarea>
    <div className="w-full flex justify-end">
      <button className="flex h-10 px-4 items-center rounded-md bg-gray-300 text-stone-900 hover:bg-slate-800 hover:text-white ease-in duration-300">
        Submit
      </button>
    </div>
  </form>
);
export default ContactForm;
