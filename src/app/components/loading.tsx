export default function Loading() {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="animate-pulse text-center">
        <div className="h-6 w-40 bg-gray-700 rounded mb-4" />
        <div className="h-4 w-64 bg-gray-700 rounded mb-2" />
        <div className="h-4 w-52 bg-gray-700 rounded" />
      </div>
    </div>
  );
}