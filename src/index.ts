export default class ObsGenClient {
  private readonly apiKey: string;
  private readonly baseId: string;
  private readonly tableName: string;

  constructor(apiKey: string) {
    const [apiKeyPart, baseId, tableName] = apiKey.split("-");
    this.apiKey = apiKeyPart;
    this.baseId = baseId;
    this.tableName = tableName;
  }

  async logEvent(data: Record<string, any>): Promise<void> {
    const url = `https://api.airtable.com/v0/${this.baseId}/${this.tableName}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({ fields: data }),
    });

    if (!response.ok) {
      throw new Error(`Failed to log event: ${await response.text()}`);
    }
  }
}
