const prometheusURL = 'http://127.0.0.1:9090/api/v1/';

/** @type {import('./__types/[id]').RequestHandler} */
export async function get() {
  const queryStr = `${prometheusURL}query?query=up`;

  const response = await fetch(queryStr);
  const data = await response.json();
  console.log('data', JSON.stringify(data))

  if (data) {
    return {
      body: { data }
    };
  }

  return {
    status: 404
  };
};
