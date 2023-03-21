export default class ObsGenClient {
    private readonly apiKey;
    private readonly baseId;
    private readonly tableName;
    constructor(apiKey: string);
    logEvent(data: Record<string, any>): Promise<void>;
}
