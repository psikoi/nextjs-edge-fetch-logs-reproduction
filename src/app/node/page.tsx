export default async function Home() {
  const data = await (await fetch("https://dummyjson.com/todos")).json();

  return (
    <main>
      <h1>Node</h1>
      <h2>Check the logs! It should have logged the API request.</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
