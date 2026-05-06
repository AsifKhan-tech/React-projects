export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-10">
      <div>
        <div className="h-16 bg-zinc-100 rounded-2xl w-4/5 mb-6"></div>
        <div className="flex gap-3">
          <div className="h-8 bg-zinc-100 rounded-full w-24"></div>
          <div className="h-8 bg-zinc-100 rounded-full w-32"></div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="h-4 bg-zinc-100 rounded-md w-full"></div>
        <div className="h-4 bg-zinc-100 rounded-md w-full"></div>
        <div className="h-4 bg-zinc-100 rounded-md w-3/4"></div>
      </div>

      <div className="flex gap-2">
        <div className="h-8 bg-zinc-50 rounded-lg w-20"></div>
        <div className="h-8 bg-zinc-50 rounded-lg w-24"></div>
        <div className="h-8 bg-zinc-50 rounded-lg w-16"></div>
      </div>

      <div className="space-y-3">
        <div className="h-12 bg-zinc-50 rounded-xl w-full"></div>
        <div className="h-12 bg-zinc-50 rounded-xl w-full"></div>
        <div className="h-12 bg-zinc-50 rounded-xl w-full"></div>
      </div>
    </div>
  );
}
