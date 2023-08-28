import SimpleFile from "./types/SimpleFile";

export default class ArgumentsAdapter
{
    constructor(private arg: Record<string, any>)
    {}

    public getFiles(): Array<SimpleFile>
    {
        const uppercasedName = this.getClassName(this.arg.name)

        console.log(`--> ${uppercasedName} <--`)

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

    private getClassName(argumentEnvironmentName: string): String
    {
        const nameParts = argumentEnvironmentName.split("_")
        const uppercasedParts = nameParts.map((namePart: String) => namePart.replace(/^./, namePart[0].toUpperCase()))
        return uppercasedParts.join("")
    }
}
