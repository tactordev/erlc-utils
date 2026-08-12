"use client";

export default function SButton(
  {
    name,
    image,
    url
  }: {
    name: string;
    image: React.ReactNode;
    url: string;
  }
) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className={`relative group flex items-center justify-center p-3 rounded-lg transition-all duration-200 hover:bg-white/10 hover:cursor-pointer`}
        onClick={() => window.location.href = url}
      >
        { image }

        <div className="absolute left-17 px-2.5 py-1 text-base font-medium text-zinc-300 bg-zinc-900 border border-white/10 rounded-md shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap z-50">
          { name }
        </div>
      </div>
    </div>
  );
}