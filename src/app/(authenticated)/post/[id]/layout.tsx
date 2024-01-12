
export default function AuthenticatedLayout(props: {
  children: React.ReactNode
  details: React.ReactNode
  posts: React.ReactNode
}) {
  return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {props.children}
        {props.details}
        {props.posts}
      </div>
  );
}
