
import './App.css';

const MeetTheTeam = () => {
  const members = [
    {
      name: "Akinniyi Akinwande",
      linkedin: "https://www.linkedin.com/in/akinniyi-akinwande-02a6121b9",
      role: "Project Lead",
      contribution: "Trained and developed the machine learning models and built the Flask application framework"
    },
    {
      name: "Boluwatife Shokunbi",
      linkedin: "",
      role: "Member",
      contribution: "Conducted SQL analysis and generated insights"
    },
    {
      name: "Ibrahim Akinyele",
      linkedin: "https://linkedin.com/in/akinyelib",
      role: "Member",
      contribution: "Developed the web application for deployment"
    },
    {
      name: "Mariam Rasaq",
      linkedin: "https://www.linkedin.com/in/mariam-rasaq-887425249",
      role: "Deputy Project Lead ",
      contribution: "Documented files in the GitHub repository, provided annotations, and designed presentations"
    },
    {
      name: "Modinat Abioye",
      linkedin: "",
      role: "Member",
      contribution: "Clarified the problem statement and performed Power BI analysis"
    },
    {
      name: "Samuel John",
      linkedin: "",
      role: "Member",
      contribution: "Conducted SQL analysis and generated insights"
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
