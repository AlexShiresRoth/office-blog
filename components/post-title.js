export default function PostTitle({ children }) {
  return (
    <h1 className="text-slate-700 font-serif text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-2 md:mb-12 mt-10 text-left">
      {children}
    </h1>
  )
}
