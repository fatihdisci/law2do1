export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background pointer-events-none">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-indigo-200 dark:border-indigo-900 border-t-indigo-600 dark:border-t-indigo-500 rounded-full animate-spin"></div>
        <p className="text-sm font-semibold text-muted-foreground animate-pulse">Yükleniyor...</p>
      </div>
    </div>
  );
}
