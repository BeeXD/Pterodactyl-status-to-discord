import Client from "../src/index"

const client = new Client({domain: 'https://game.creavite.co/', api_key: 'la8zJE9ZFsdVu2GBsbEZMw1bZsxGIEPTYwxRswoKbNUKio5f', server_id: '047afba1'})

test('Do a basic data fetch', async () => {
    const data = await client.getData();
    expect(data).not.toBeNull();
})