const SkillCard = ({ skill, level, icon }) => {
    return (
      <div className="border border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-xl hover:border-blue-500 transition-all duration-300">
        <div className="flex items-center space-x-4">
          <div className="text-4xl">{icon}</div>
          <div>
            <h3 className="text-xl font-bold">{skill}</h3>
            <p className="text-gray-600">{level}</p>
          </div>
        </div>
      </div>
    );
  };
  export default SkillCard;
  