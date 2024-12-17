import OpenAi from "openai"
import "dotenv/config"
import { createAssistant } from "./openai/createAssistant";
import { createThread } from "./openai/createThread";
import { createRun } from "./openai/createRun";
import { performRun } from "./openai/performRun";

async function main() {
    const client = new OpenAi()
    const message = "Hello, Alt Cunningham!"

    const assistant = await createAssistant(client)
    const thread = await createThread(client, message)
    const run = await createRun(client, thread, assistant.id)
    const result = await performRun(run, client, thread)





    console.log("Hello World!");
}

main()