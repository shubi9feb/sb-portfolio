// src/app/layout.jsx
import "@/app/globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Shubham Bhatia | Portfolio",
  description: "Frontend React Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors duration-300">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="bg-red-500 text-white text-2xl min-h-screen p-10">
//         TESTING RED BACKGROUND
//         {children}
//       </body>
//     </html>
//   );
// }
