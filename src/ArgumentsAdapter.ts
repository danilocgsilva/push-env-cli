import SimpleFile from "./types/SimpleFile";

export default class ArgumentsAdapter
{
    constructor(private arg: Record<string, any>)
    {}

    public getFiles(): Array<SimpleFile>
    {
        return [
            {
                content: "FROM nginx:latest",
                path: "Dockerfile"
            },
            {
                content: "version: '3.5'",
                path: "docker-compose.yml"
            }
        ]
    }
}
