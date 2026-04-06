import { JSX } from "react";
import client from "lib/sitecore-client";

const SitecoreClientTest = async (): Promise<JSX.Element> => {
  let page: Record<string, unknown> | null = null;
  let error: string | null = null;

  try {
    page = (await client.getPage("/", {
      site: "skate-park-na",
      locale: "en",
    })) as Record<string, unknown>;
  } catch (err) {
    error = String(err ?? "Unknown error");
  }

  return (
    <div>
      <h1>Page Layout data</h1>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <pre style={{ maxHeight: "400px", overflow: "scroll" }}>
          {JSON.stringify(page, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default SitecoreClientTest;
