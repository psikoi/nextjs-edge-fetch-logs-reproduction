export const runtime = "edge";

export default async function Home() {
  const data = await (await fetch("https://dummyjson.com/todos")).json();

  return (
    <main>
      <h1>Edge</h1>
      <h2>Check the logs! It doesn't log the API request.</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
