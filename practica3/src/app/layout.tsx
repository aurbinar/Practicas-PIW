import { SelectionProvider } from "../context/context";
import Navbar from "../components/navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <SelectionProvider>
          <Navbar />
          {children}
        </SelectionProvider>
      </body>
    </html>
  );
}