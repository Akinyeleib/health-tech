
import './App.css';

const MeetTheTeam = () => {
  const members = [
    {
      name: "Akinniyi Akinwande",
      linkedin: "https://www.linkedin.com/in/akinniyi-akinwande-02a6121b9",
      role: "Project Lead & Data Scientst",
      contribution: "Trained and built the ML model"
    },
    {
      name: "Mariam Rasaq",
      linkedin: "https://www.linkedin.com/in/mariam-rasaq-887425249",
      role: "Hater",
      contribution: "Hating and jumping to conclusions"
    },
    {
      name: " John Samuel",
      linkedin: "/",
      role: "Contributor",
      contribution: ""
    },
    {
      name: "Modinat",
      linkedin: "/",
      role: "Eat Alone",
      contribution: "Enabling the hater"
    },{
      name: "Ibrahim Akinyele",
      linkedin: "https://linkedin.com/in/akinyelib",
      role: "Developer",
      contribution: "Web App"
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
