import Image from "next/image";

// 서버 컴포넌트에서 직접 API 호출
async function getResumeInfo() {
  const res = await fetch(
    "https://raw.githubusercontent.com/Pazinpo/first-deploy/refs/heads/main/service/resume_general_info_service.json"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getResumeInfo();

  return (
    <div className="font-sans grid grid-rows-[1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-1 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/digit.png"
          alt="Next.js logo"
          width={181}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            안녕하세요 {data.name} 입니다.
          </li>
          <li className="tracking-[-.01em]">잘 부탁드립니다.</li>
          <li className="tracking-[-.01em]">깃주소: {data.github}</li>
        </ol>
      </main>
    </div>
  );
}
