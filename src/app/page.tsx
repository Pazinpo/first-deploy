import Image from "next/image";

// 포트폴리오 데이터
const portfolioData = {
  "name": "강채민",
  "github": "https://github.com/Pazinpo",
  "bio": "안녕하세요! C언어, Java, C# 등의 프로그래밍 언어를 조금 사용할 줄 아는 개발자 지망생입니다. Unity를 활용한 게임 개발에 경험이 있습니다. 바다를 바라보는것을 좋아하고, 충분한 잠을 자는 것이 생산성을 만드는 비결이라고 생각합니다. 새로운 기술을 배우고 적용하는 것을 좋아하며, 창의적인 해결책을 통해 문제를 해결하는 것에 관심이 많습니다.",
  "skills": {
    "languages": ["C", "Java", "C#"],
    "frameworks": ["Unity"],
    "others": ["게임", "문제 해결", "바다 감상", "잠자기"]
  },
  "projects": [
    {
      "name": "Unity 게임 개발 프로젝트",
      "description": "C#과 Unity 엔진을 활용하여 개발한 인터랙티브 게임 프로젝트입니다. 플레이어와 게임 환경 간의 상호작용을 구현하고 직관적인 사용자 경험을 제공하는 것에 중점을 두었습니다.",
      "technologies": ["Unity", "C#", "Visual Studio"],
      "highlights": [
        "게임 오브젝트 간의 상호작용 시스템 구현",
        "물리 엔진을 활용한 자연스러운 캐릭터 움직임 구현",
        "사용자 인터페이스(UI) 및 메뉴 시스템 개발",
        "게임 로직 및 점수 시스템 설계 및 구현",
        "효과음 및 배경 음악을 통한 게임 몰입도 향상"
      ]
    }
  ]
};

export default function Home() {
  const data = portfolioData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Header Section */}
        <header className="text-center mb-16">
          <div className="mb-8">
            <Image
              className="mx-auto rounded-full shadow-2xl border-4 border-white"
              src="/beach.jpg"
              alt="Profile - Beach lover"
              width={200}
              height={200}
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {data.name}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {data.bio}
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
        </header>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            기술 스택
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                프로그래밍 언어
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.languages.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                프레임워크
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.frameworks.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                좋아하는 것
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.others.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            프로젝트 경험
          </h2>
          <div className="space-y-6">
            {data.projects.map((project: { name: string; description: string; technologies: string[]; highlights: string[] }, index: number) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    사용 기술:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, techIndex: number) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    주요 성과:
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    {project.highlights.map((highlight: string, highlightIndex: number) => (
                      <li
                        key={highlightIndex}
                        className="text-gray-600 dark:text-gray-300 text-sm"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 {data.name}. 모든 권리 보유.
          </p>
        </footer>
      </div>
    </div>
  );
}
