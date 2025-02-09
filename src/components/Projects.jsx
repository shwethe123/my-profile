import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Project 1</h3>
            <p className="text-gray-700">Description of Project 1.</p>
            <a
              href="https://github.com/yourusername/project1"  // Link to your GitHub repo
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 block"
            >
              View on GitHub
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Project 2</h3>
            <p className="text-gray-700">Description of Project 2.</p>
            <a
              href="https://github.com/yourusername/project2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 block"
            >
              View on GitHub
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Project 3</h3>
            <p className="text-gray-700">Description of Project 3.</p>
            <a
              href="https://github.com/yourusername/project3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 block"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
