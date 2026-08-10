export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className="bg-blue-500 text-white p-4">Places Header</h1>
      {children}
      <h1 className="bg-blue-500 text-white p-4">Places Footer</h1>
    </div>
  );
}
