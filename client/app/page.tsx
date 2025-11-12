import { loaderHomePage } from "@/apis/actions";
import { notFound } from "next/navigation";

export default async function Home() {
  const data = await loaderHomePage();
  if (!data) notFound();

  console.log(data);
  
  return (
    <div>
      <p>{data.title}</p>
      <p>{data.description}</p>
    </div>
  );
}
