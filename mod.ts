Deno.serve(() => {
  return new Response("301 LOL", {
    headers: { Location: "https://mckoda09.ru" },
    status: 301,
    statusText: "LOL",
  });
});
