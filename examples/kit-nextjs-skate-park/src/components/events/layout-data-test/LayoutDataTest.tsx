import { JSX } from "react";
import { LayoutServiceData } from "@sitecore-content-sdk/nextjs";
import { layoutService } from "lib/layout-service";

const LayoutDataTest = async (): Promise<JSX.Element> => {
  const routeOptions = { site: "skate-park-na", locale: "en" };
  let data: LayoutServiceData | null = null;
  let error: string | null = null;

  try {
    data = await layoutService.fetchLayoutData("/", routeOptions);
  } catch (err: unknown) {
    error = err instanceof Error ? err.message : String(err ?? "Failed to fetch layout data");
  }

  if (error) {
    return (
      <div>
        <h1>Layout data</h1>
        <div>Error: {error}</div>
      </div>
    );
  }

  return (
    <div>
      <h1>Layout data</h1>
      <pre style={{ maxHeight: "400px", overflow: "scroll" }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default LayoutDataTest;
