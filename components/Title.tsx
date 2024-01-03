export default function Title ({
  title,
  children
}:{
  title?: string
  children: any
}) {
  return (
    <h1 className="text-3xl font-serif">
      {children}
    </h1>
  )
}