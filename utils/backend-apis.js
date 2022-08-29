const payloadData = {
  sdkVersion: "3.7.5",
  sdkType: "w",
  messageType: "text",
};

// POST method
export async function addRequest(data = {}) {
  let url = !data.userId
    ? "https://gupshup.active.ai/morfeus/v1/channels/298w40189141909/init"
    : "https://gupshup.active.ai/morfeus/v1/channels/298w40189141909/authmessage";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...payloadData, ...data }),
    });
    return response.json();
  } catch {
    log("Something went wonrg");
  }
}
