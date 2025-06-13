import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en"
           bbai-tooltip-injected="true"
    >
      <body
         cz-shortcut-listen="true"  
      >
        {children}
      </body>
    </html>
  );
}
