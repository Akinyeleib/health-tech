
import './App.css';

const MeetTheTeam = () => {
  const members = [
    {
      name: "Ibrahim Akinyele",
      linkedin: "https://linkedin.com/in/akinyelib",
      role: "Project Lead & Backend Developer",
      contribution: "Designed Flask API and ML integration"
    },
    {
      name: "Akinniyi Akinwande",
      linkedin: "https://linkedin.com/in/jane-doe",
      role: "Frontend Developer",
      contribution: "Built React UI and routing"
    },
    {
      name: "John Smith",
      linkedin: "https://linkedin.com/in/john-smith",
      role: "Data Scientist",
      contribution: "Trained logistic regression model"
    }
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Project Team</h1>
      <ul className="space-y-4">
        {members.map((member, idx) => (
          <li key={idx} className="p-4 bg-white shadow rounded border">
            <p><strong>Name:</strong> {member.name}</p>
            <p><strong>Role:</strong> {member.role}</p>
            <p><strong>Contribution:</strong> {member.contribution}</p>
            <p>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                LinkedIn Profile
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MeetTheTeam;
