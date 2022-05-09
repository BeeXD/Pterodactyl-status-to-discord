import Client from "../src/index"
import { envParseString, setup } from "@skyra/env-utilities";

test('Do a basic data fetch', async () => {
    setup('.env.local');
    const client = new Client({domain: envParseString('DOMAIN'), api_key: envParseString('API_KEY'), server_id: envParseString('SERVER_ID')});
    const data = await client.getData();
    expect(data).not.toBeNull();
})

declare module '@skyra/env-utilities' {
	interface Env {
		API_KEY: string;
        DOMAIN: string;
        SERVER_ID: string;
        
	}
}