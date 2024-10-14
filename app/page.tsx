import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Image from "next/image";
import anhImage from "../src/assets/images/anh.jpg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Trang chủ</h1>
        <p>
          Chào mừng đến với trang học tiếng Anh! Hãy chọn Khóa học để bắt đầu
          làm các bài kiểm tra kỹ năng.
        </p>

        <div className="w-full md:w-1/2 mx-auto mt-6">
          <Image
            src={anhImage}
            alt="Hình ảnh nội dung"
            layout="responsive"
            width={600}
            height={350}
            className="object-contain"
          />
          <p className="mt-4 text-gray-600 text-center">
            Đây là một khóa học tiếng Anh trực tuyến giúp bạn cải thiện các kỹ
            năng nghe, nói, đọc và viết. ...
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
