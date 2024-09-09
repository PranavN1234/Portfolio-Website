"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser"; // Correct import for EmailJS
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+1) 646-956-9715",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "pn2229@nyu.edu",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "397 Chauncey St, 3F",
  },
];

const Contact = () => {
  const form = useRef(); // Create a ref for the form

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hzwwa8f", // Replace with your EmailJS service ID
        "template_h54krnr", // Replace with your EmailJS template ID
        form.current, // Pass the form ref
        "argvy0tnxLTHl5WM1" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({ // Clear form after sending
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={form} // Attach the ref to the form element
              onSubmit={sendEmail}
              className="flex flex-col gap-6 p-10 bg-[#e7d8c9] rounded-xl"
            >
              <h3 className="text-4xl text-[#b2967d]">Let's work together</h3>
              <p className="text-[#8c5e58]/80">Contact me, Here!</p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" type="text" placeholder="Firstname" value={formData.firstname} onChange={handleChange} required />
                <Input name="lastname" type="text" placeholder="Lastname" value={formData.lastname} onChange={handleChange} required />
                <Input name="email" type="email" placeholder="Email address" value={formData.email} onChange={handleChange} required />
                <Input name="phone" type="text" placeholder="Phone number" value={formData.phone} onChange={handleChange} required />
              </div>
              {/* textarea */}
              <Textarea name="message" className="h-[200px]" placeholder="Type your message here." value={formData.message} onChange={handleChange} required />
              {/* btn */}
              <Button type="submit" size="md" className="max-w-40 bg-[#e6beae] text-white">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#e7d8c9] text-[#b2967d] rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-[#8c5e58]/80">{item.title}</p>
                      <h3 className="text-xl text-[#8c5e58]">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
