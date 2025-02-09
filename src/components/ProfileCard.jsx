import React from "react";
import ProfileImage from "../assets/software.jpg";

const ProfileCard = () => {
  return (
    <section id="profile" className="max-w-sm mx-auto bg-gradient-to-r mt-20 from-indigo-500 via-purple-500 to-pink-500 shadow-xl rounded-2xl overflow-hidden my-8">
      <img className="w-full h-56 object-cover border-b-4 border-white" src={ProfileImage} alt="Profile" />
      <div className="p-6 bg-white bg-opacity-90 rounded-b-2xl">
        <h2 className="text-3xl font-bold text-gray-800 hover:text-indigo-600 transition-all duration-300">Salai Chai Naing</h2>
        <p className="text-gray-600 mt-1 mb-4">Full Stack Developer</p>
        <p className="text-gray-700">
          Passionate about coding and problem-solving. With expertise in both front-end and back-end technologies, I enjoy building scalable and efficient web applications. Constantly learning and adapting to new challenges in the tech world.
        </p>
      </div>
    </section>
  );
};

export default ProfileCard;
