import React, { useRef, useState } from "react";
//import emailjs from emailjs/browser package
import emailjs from "@emailjs/browser";

// //intialize emailJS
// init("service_qkcv0rh");

//define functional component Contact
const Contact = () => {
  //useRef hook to reference variable form
  const form = useRef();

  const [isSubmitted, setIsSubmitted] = useState(false);

  //handle form submission
  const sendEmail = (e) => {
    //stop form submission default behavior
    e.preventDefault();
    emailjs
      //form.current represents the data to be sent
      //service ID, template ID, and public key
      .sendForm(
        "service_qkcv0rh",
        "template_r8nnexl",
        form.current,
        "B35w6zrADtq1_4Mpk"
      )
      .then(
        (result) => {
          console.log(result.text);
          //set state to show successful submission
          setIsSubmitted(true);
        },
        //catch errors
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section
        className="flex content-center text-gray-600 body-font relative"
        id="contact"
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12" id="contact">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Form
            </h1>
            <p className="w-3/4 lg:w-2/3 mx-auto leading-relaxed text-base text-black font-bold p-2">
              Reach out to me on
              <a
                href="https://www.linkedin.com/in/lvollmer/"
                className="font-bold text-[#957fef]"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span> LinkedIn </span>
              </a>
              or take a look at my
              <a
                href="https://github.com/lavollmer"
                className="font-bold text-[#957fef]"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span> Github </span>
              </a>
              !
            </p>

            <div className="md:p-4 w-full leading-relaxed text-black p-2">
              <p>
                Located in Minneapolis, Minnesota | <br />
                Open to Remote (USA)
              </p>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black font-bold md:p-4 p-2">
                Send me an email with the form below! I will respond in 1-2
                business days.
              </p>
            </div>
          </div>
          {/* onSubmit is set to sendEmail which is triggered when form is submitted, form data is called and sent with emailJS */}
          <div>
            {isSubmitted ? (
              <div className="flex flex-col justify-center items-center border-2 border-green p-5">
                <p className="text-green font-bold ">
                  Form successfully submitted!
                </p>
                <p>
                  We will be in contact with you or your company in 1-2 business
                  days.
                </p>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail}>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                  <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label
                          htmlFor="name"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label
                          htmlFor="email"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <div className="relative">
                        <label
                          htmlFor="message"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        ></textarea>
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <button
                        className="flex mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-[#957fef] rounded text-lg"
                        type="submit"
                        value="Send"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
