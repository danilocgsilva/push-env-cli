import { parse } from 'ts-command-line-args'


interface IEnvironmentArguments {
    name: string,
    help?: boolean
}

export default class ArgumentParser
{
    static getArgs() {
        return parse<IEnvironmentArguments>(
            {
                name: String,
                help: {
                    type: Boolean,
                    optional: true,
                    multiple: true,
                    alias: 'h',
                    description: 'Prints this usage guide'
                }
            }, {
                helpArg: 'help',
                headerContentSections: [
                    {
                        header: 'Generates docker recipes',
                        content: 'Write files required to run docker compose environments'
                    }
                ]
            }
        )
    }
}