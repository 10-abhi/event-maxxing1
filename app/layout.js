import ToastProvider from "@/context/toastProvider";
import "./globals.css";
import Provider from "@/context/sessionProvider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </Provider>
      </body>
    </html>
  );
}
