export default function PostTitle({ children }) {
  return (
    <h1 className="text-slate-700 font-serif text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-2 md:mb-12 mt-10 text-left">
      {children}
    </h1>
  )
}
