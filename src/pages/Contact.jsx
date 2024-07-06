function Contact() {
  return (
    <div className="my-24 lg:px-12 flex justify-between">
      <div>
        <div className="border-b py-6">
          <div className="flex items-center gap-4">
            <img src="img/icons-phone.png" alt="" className="size-8" />
            <h1 className="font-semibold text-lg">Call To Us</h1>
          </div>

          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
        </div>
        <div className="py-6">
          <div className="flex items-center gap-4">
            <img src="img/icons-mail.png" alt="" className="size-8" />
            <h1 className="font-semibold text-lg">Write To US</h1>
          </div>

          <p className="">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p>Emails: support@exclusive.com</p>
          <p>Emails: customer@exclusive.com</p>
        </div>
      </div>

      <div>
        <div className="space-x-4">
          <input
            type="text"
            placeholder="Your Name *"
            name=""
            id=""
            className="border px-4 py-2"
          />
          <input
            type="text"
            placeholder="Your Email *"
            name=""
            id=""
            className="border px-4 py-2"
          />
          <input
            type="text"
            placeholder="Your Phone *"
            name=""
            id=""
            className="border px-4 py-2"
          />
        </div>

        <textarea
          name=""
          placeholder="Your Massage"
          id=""
          className="w-full border px-4 py-2 my-4 h-52"
        ></textarea>

        <button className="border py-3 px-12 my-2 bg-[#db4444] cursor-pointer text-white rounded-md">
          Send Massage{" "}
        </button>
      </div>
    </div>
  );
}

export default Contact;
