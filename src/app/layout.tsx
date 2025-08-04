import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "에겐 VS 테토 성향 테스트 | 나의 진짜 성격 찾기",
  description: "나는 에겐남(녀)일까 VS 테토남(녀)일까? 10개의 질문으로 알아보는 성향 테스트. 2.6M+ 참여!",
  keywords: "에겐, 테토, 성향테스트, 성격테스트, 심리테스트, MBTI",
  openGraph: {
    title: "에겐 VS 테토 성향 테스트",
    description: "나는 에너지 넘치는 에겐? 차분한 테토? 지금 테스트해보세요!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
