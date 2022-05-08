import { fetch } from "@sapphire/fetch"
import { fromAsync, isErr } from "@sapphire/result"

class Client {
    private domain: string;
    private server_id: string;
    private api_key: string;

    public async getData() {
        const res = await fromAsync(async () => await fetch(`${this.domain}api/client/servers/${this.server_id}/resources`, {
            headers: {
                "Authorization": `Bearer ${this.api_key}`
            }
        }))

        if(isErr(res)) {
            throw new Error(res.error as string);
        }

        return res.value;
    }
    


    /**
     *
     */
    constructor({ domain = '', server_id = '', api_key = '' }) {
        this.domain = domain,
        this.server_id = server_id;
        this.api_key = api_key;
    }
}


export default Client