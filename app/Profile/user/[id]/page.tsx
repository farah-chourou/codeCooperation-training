export default function user({ params }: { params: { id: string } }) {
  return <div>this is my {params.id} </div>;
}
