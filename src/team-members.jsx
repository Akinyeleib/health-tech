
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
      name: "Abioye Modinat",
      linkedin: "/",
      role: "Data Scientist",
      contribution: "Designed the Powerpoint Presentation File"
    },
    {
      name: "Ibrahim Akinyele",
      linkedin: "https://linkedin.com/in/akinyelib",
      role: "Software Engineer",
      contribution: "Web App"
    },
    {
      name: "Boluwatife",
      linkedin: "/",
      role: "Data Scientist",
      contribution: ""
    }
  ];

  return (
<div className="min-h-screen bg-gray-50 px-4 py-10">
  <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">
    <h1 className="text-3xl font-bold text-black-700 mb-8 text-center">Project Team</h1>

    <ul className="space-y-6">
      {members.map((member, idx) => (
        <li
          key={idx}
          className="p-6 bg-gray-100 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
        >
          <p className="text-lg font-semibold text-gray-800">{member.name}</p>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">Role:</span> {member.role}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-medium">Contribution:</span>{' '}
            {member.contribution || 'Not specified'}
          </p>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-orange-600 text-sm hover:underline font-medium"
          >
            View LinkedIn →
          </a>
        </li>
      ))}
    </ul>
  </div>
</div>
  );
}

export default MeetTheTeam;
