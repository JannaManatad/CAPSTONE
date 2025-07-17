export const metadata = {
  title: 'ChillNet Ice Cream',
  description: 'Order and sell dirty ice cream online!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts (optional) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inria+Serif:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen font-['Inria_Serif'] bg-white text-black">
        {children}
      </body>
    </html>
  );
}
