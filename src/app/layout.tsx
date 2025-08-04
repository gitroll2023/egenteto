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
  title: "에겐 VS 테토 성향 테스트 | MZ가 말하는 진짜 성격",
  description: "나는 감성 터지는 에겐? 터프한 매력의 테토? 에스트로겐vs테스토스테론으로 알아보는 내 진짜 성향! 2.6M+ 참여",
  keywords: "에겐, 테토, 에겐테토, 성향테스트, MZ성격테스트, 에스트로겐, 테스토스테론, 에겐남, 테토남, 에겐녀, 테토녀",
  openGraph: {
    title: "에겐 VS 테토 성향 테스트 | 너 에겐이야 테토야?",
    description: "💜에겐: 감성파, 이모티콘 남발, 애교 폭발 VS 💙테토: 단답러, 쿨함 그 자체, 터프함 갑! 10문제로 알아보는 나의 진짜 성향",
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
